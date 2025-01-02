// Global Variables
let schedule = JSON.parse(localStorage.getItem('schedule')) || [];
let editingTaskId = null;
let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
let currentTaskId = null;

const audio = new Audio('sound-effect/background.mp3'); 
audio.loop = true;
audio.volume = 0.2;
audio.play();

// Initialize date and time display
function initializeDateTimeDisplay() {
    function updateDateTime() {
        const now = new Date();
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: '2-digit', minute: '2-digit' };

        document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', dateOptions);
        document.getElementById('currentTime').textContent = now.toLocaleTimeString('en-US', timeOptions);
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
}

function isTaskComplete(task) {
    const progress = calculateProgress(task);
    return progress.real >= 100;
}

// Time Utility Functions
function formatTimeToAmPm(timeString) {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    }).replace(/\s/g, ''); // Remove extra spaces
}

function calculateEndTime(startTime, durationMinutes) {
    if (!startTime || !durationMinutes) return '';
    const [hours, minutes] = startTime.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    date.setMinutes(date.getMinutes() + parseInt(durationMinutes));

    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    }).replace(/\s/g, '');
}

// Progress Calculation Functions
function calculateProgress(task) {
    const now = new Date();
    const [hours, minutes] = task.time.split(':');

    let scheduleStart = new Date();
    scheduleStart.setHours(parseInt(hours), parseInt(minutes), 0);

    const scheduleEnd = new Date(scheduleStart.getTime() + task.duration * 60000);

    // Calculate time-based progress
    let timeProgress = 0;
    if (now < scheduleStart) {
        timeProgress = 0;
    } else if (now > scheduleEnd) {
        timeProgress = 100;
    } else {
        const totalDuration = scheduleEnd.getTime() - scheduleStart.getTime();
        const elapsedTime = now.getTime() - scheduleStart.getTime();
        timeProgress = Math.min(100, Math.max(0, (elapsedTime / totalDuration) * 100));
    }

    // Calculate real progress based on tracking method
    let realProgress = 0;
    if (task.progressType === 'manual') {
        realProgress = task.manualProgress || 0;
    } else {
        realProgress = task.subtasks && task.subtasks.length > 0
            ? (task.subtasks.filter(st => st.completed).length / task.subtasks.length) * 100
            : 0;
    }

    if (!task.completed && realProgress >= 100) {
        task.completed = true;
        // Trigger completion notification
        showTaskCompletionNotification(task);
    }

    return {
        time: timeProgress,
        real: realProgress,
        total: (timeProgress + realProgress) / 2
    };
}

// Add notification function
function showTaskCompletionNotification(task) {
    if (!("Notification" in window)) return;
    
    if (completedTasks.includes(task.id)) return;
    
    if (Notification.permission === "granted") {
        new Notification("Task Completed!", {
            body: `The task "${task.activity}" has been completed`
        });
        completedTasks.push(task.id);
        localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    }
}

function calculateOverallProgress() {
    if (schedule.length === 0) return { time: 0, real: 0, total: 0 };

    const totals = schedule.reduce((acc, task) => {
        const progress = calculateProgress(task);
        return {
            time: acc.time + progress.time,
            real: acc.real + progress.real,
            total: acc.total + progress.total
        };
    }, { time: 0, real: 0, total: 0 });

    return {
        time: Math.round(totals.time / schedule.length),
        real: Math.round(totals.real / schedule.length),
        total: Math.round(totals.total / schedule.length)
    };
}

// Task Management Functions
function findCurrentTask() {
    if (schedule.length === 0) return -1;

    const now = new Date();
    return schedule.findIndex(task => {
        const [hours, minutes] = task.time.split(':');
        let scheduleStart = new Date();
        scheduleStart.setHours(parseInt(hours), parseInt(minutes), 0);
        const scheduleEnd = new Date(scheduleStart.getTime() + task.duration * 60000);
        return now >= scheduleStart && now <= scheduleEnd;
    });
}

// Modal Functions
function openAddModal() {
    document.getElementById('modalTitle').textContent = 'Add Task';
    document.getElementById('taskTime').value = '';
    document.getElementById('taskName').value = '';
    document.getElementById('taskDuration').value = '';
    document.getElementById('progressType').checked = false;
    document.getElementById('endTime').textContent = '';
    document.getElementById('taskModal').classList.add('active');
    editingTaskId = null;
}

function updateEndTime() {
    const startTime = document.getElementById('taskTime').value;
    const duration = document.getElementById('taskDuration').value;

    if (startTime && duration) {
        const endTime = calculateEndTime(startTime, duration);
        document.getElementById('endTime').textContent = `Ends at: ${endTime}`;
    }
}

function openProgressModal(id) {
    currentTaskId = id;
    const task = schedule.find(t => t.id === id);
    if (!task) return;

    document.getElementById('progressTaskTime').textContent = formatTimeToAmPm(task.time);
    document.getElementById('progressTaskEndTime').textContent = calculateEndTime(task.time, task.duration);
    document.getElementById('manualProgress').value = task.manualProgress || 0;
    document.getElementById('manualProgressValue').textContent = `${task.manualProgress || 0}%`;

    document.getElementById('progressModal').classList.add('active');

    // Add input event listener for real-time update
    const progressInput = document.getElementById('manualProgress');
    progressInput.oninput = (e) => {
        document.getElementById('manualProgressValue').textContent = `${e.target.value}%`;
    };
}

function openSubtasksModal(id) {
    currentTaskId = id;
    const task = schedule.find(t => t.id === id);
    if (!task) return;

    document.getElementById('taskStartTime').textContent = formatTimeToAmPm(task.time);
    document.getElementById('taskEndTime').textContent = calculateEndTime(task.time, task.duration);

    renderSubtasks(task);
    document.getElementById('subtasksModal').classList.add('active');
}

function renderSubtasks(task) {
    const container = document.getElementById('subtasksList');
    if (!task.subtasks) task.subtasks = [];

    container.innerHTML = task.subtasks.map((subtask, index) => `
        <div class="subtask-item">
            <input 
                type="checkbox" 
                ${subtask.completed ? 'checked' : ''} 
                onchange="toggleSubtask(${task.id}, ${index})"
            >
            <span class="subtask-text">${subtask.text}</span>
            <button class="delete-subtask" onclick="deleteSubtask(${task.id}, ${index})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

function addSubtask() {
    const input = document.getElementById('newSubtaskInput');
    const text = input.value.trim();
    if (!text) return;

    const task = schedule.find(t => t.id === currentTaskId);
    if (!task) return;

    if (!task.subtasks) task.subtasks = [];
    task.subtasks.push({ text, completed: false });

    input.value = '';
    saveToLocalStorage();
    renderSubtasks(task);
    renderSchedule();
}

function toggleSubtask(taskId, subtaskIndex) {
    const task = schedule.find(t => t.id === taskId);
    if (!task || !task.subtasks || !task.subtasks[subtaskIndex]) return;

    task.subtasks[subtaskIndex].completed = !task.subtasks[subtaskIndex].completed;
    saveToLocalStorage();
    renderSchedule();
}

function deleteSubtask(taskId, subtaskIndex) {
    const task = schedule.find(t => t.id === taskId);
    if (!task || !task.subtasks) return;

    task.subtasks = task.subtasks.filter((_, index) => index !== subtaskIndex);
    saveToLocalStorage();
    renderSubtasks(task);
    renderSchedule();
}

function saveProgress() {
    const progress = parseInt(document.getElementById('manualProgress').value);
    const task = schedule.find(t => t.id === currentTaskId);
    if (task) {
        task.manualProgress = progress;
        saveToLocalStorage();
        renderSchedule();
    }
    closeProgressModal();
}

// Modal Close Functions
function closeModal() {
    document.getElementById('taskModal').classList.remove('active');
    editingTaskId = null;
}

function closeProgressModal() {
    document.getElementById('progressModal').classList.remove('active');
    currentTaskId = null;
}

function closeSubtasksModal() {
    document.getElementById('subtasksModal').classList.remove('active');
    currentTaskId = null;
}

// Render Functions
function renderSchedule() {
    const container = document.getElementById('scheduleItems');
    const currentTaskIndex = findCurrentTask();
    const overallProgress = calculateOverallProgress();

    // Update overall progress
    document.getElementById('overallProgressText').textContent = `${overallProgress.total}%`;
    document.getElementById('timeProgress').textContent = `${overallProgress.time}%`;
    document.getElementById('realProgress').textContent = `${overallProgress.real}%`;
    
    let overallTime = document.querySelector(".progress-bar.time.overall")
    let overallReal = document.querySelector(".progress-bar.real.overall")

    overallTime.style.width = `${overallProgress.time}%`
    overallReal.style.width = `${overallProgress.real}%`

    if (schedule.length === 0) {
        container.innerHTML = '<div class="empty-schedule">No tasks scheduled. Click "Add Task" to get started.</div>';
        return;
    }

    container.innerHTML = schedule.map((task, index) => {
        const progress = calculateProgress(task);
        const isCurrentTask = index === currentTaskIndex;
        const endTime = calculateEndTime(task.time, task.duration);

        return `
            <div class="schedule-item ${isCurrentTask ? 'current-task' : ''}">
                <div class="task-main">
                    <div class="time-slot">
                        <i class="fas fa-clock"></i>
                        ${formatTimeToAmPm(task.time)} - ${endTime}
                    </div>
                    <div class="activity">${task.activity}</div>
                </div>
                <span>${Math.round(progress.real)}%</span>
                <div class="progress-container">
                    <div class="progress-bar-container">
                        <div class="progress-bar real" style="width: ${progress.real}%"></div>
                        <div class="progress-bar time" style="width: ${progress.time}%"></div>
                    </div>
                </div>
                <div class="actions">
                    <button class="btn secondary-btn" onclick="editTask(${task.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn secondary-btn" onclick="${task.progressType === 'manual' ? 'openProgressModal' : 'openSubtasksModal'}(${task.id})">
                        <i class="fas fa-${task.progressType === 'manual' ? 'percentage' : 'tasks'}"></i>
                    </button>
                    <button class="btn secondary-btn" onclick="deleteTask(${task.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function editTask(id) {
    const task = schedule.find(t => t.id === id);
    if (task) {
        document.getElementById('modalTitle').textContent = 'Edit Task';
        document.getElementById('taskTime').value = task.time;
        document.getElementById('taskName').value = task.activity;
        document.getElementById('taskDuration').value = task.duration;
        document.getElementById('progressType').checked = task.progressType === 'subtasks';
        document.getElementById('endTime').textContent = `Ends at: ${calculateEndTime(task.time, task.duration)}`;
        document.getElementById('taskModal').classList.add('active');
        editingTaskId = id;
    }
}

function saveTask() {
    const time = document.getElementById('taskTime').value;
    const activity = document.getElementById('taskName').value.trim();
    const duration = parseInt(document.getElementById('taskDuration').value);
    const progressType = document.getElementById('progressType').checked ? 'subtasks' : 'manual';

    if (!time || !activity || !duration) {
        alert('Please fill in all fields');
        return;
    }

    if (editingTaskId) {
        const taskIndex = schedule.findIndex(task => task.id === editingTaskId);
        if (taskIndex !== -1) {
            schedule[taskIndex] = {
                ...schedule[taskIndex],
                time,
                activity,
                duration,
                progressType,
                subtasks: progressType === 'subtasks' ? (schedule[taskIndex].subtasks || []) : [],
                manualProgress: progressType === 'manual' ? (schedule[taskIndex].manualProgress || 0) : 0
            };
        }
    } else {
        const newTask = {
            id: Date.now(),
            time,
            activity,
            duration,
            progressType,
            subtasks: progressType === 'subtasks' ? [] : undefined,
            manualProgress: progressType === 'manual' ? 0 : undefined
        };4
        schedule.push(newTask);
    }

    // Sort schedule by time
    schedule.sort((a, b) => {
        const timeA = new Date(`2000/01/01 ${a.time}`);
        const timeB = new Date(`2000/01/01 ${b.time}`);
        return timeA - timeB;
    });

    saveToLocalStorage();
    renderSchedule();
    closeModal();
}

function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        schedule = schedule.filter(task => task.id !== id);
        saveToLocalStorage();
        renderSchedule();
    }
}

// Local Storage Functions
function saveToLocalStorage() {
    localStorage.setItem('schedule', JSON.stringify(schedule));
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeDateTimeDisplay();
    renderSchedule();

    // Add event listeners for real-time end time updates
    document.getElementById('taskTime').addEventListener('input', updateEndTime);
    document.getElementById('taskDuration').addEventListener('input', updateEndTime);

    // Add event listener for new subtask input
    document.getElementById('newSubtaskInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addSubtask();
    });

    // Request notification permission
    if ("Notification" in window) {
        Notification.requestPermission();
    }
});

// Update the schedule display periodically
setInterval(renderSchedule, 1000); // Update every 1 seconds