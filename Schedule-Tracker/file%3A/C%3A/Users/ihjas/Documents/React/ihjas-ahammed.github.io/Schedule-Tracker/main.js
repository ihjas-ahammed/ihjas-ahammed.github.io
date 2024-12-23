// Global Variables
let schedule = JSON.parse(localStorage.getItem('schedule')) || [];
let editingTaskId = null;
let currentTaskId = null;

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

// Time Utility Functions
function calculateEndTime(startTime, durationMinutes) {
    const [hours, minutes, period] = startTime.match(/(\d+):(\d+)\s*(\w+)/).slice(1);
    let dateObj = new Date();
    
    dateObj.setHours(
        period.toLowerCase() === 'pm' ? (parseInt(hours) === 12 ? 12 : parseInt(hours) + 12) :
            (parseInt(hours) === 12 ? 0 : parseInt(hours)),
        parseInt(minutes) + parseInt(durationMinutes),
        0
    );

    return dateObj.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
    });
}

// Local Storage Functions
function saveToLocalStorage() {
    localStorage.setItem('schedule', JSON.stringify(schedule));
}

// Progress Calculation Functions
function calculateProgress(task) {
    const now = new Date();
    const [hours, minutes, period] = task.time.match(/(\d+):(\d+)\s*(\w+)/).slice(1);
    
    let scheduleStart = new Date();
    scheduleStart.setHours(
        period.toLowerCase() === 'pm' ? (parseInt(hours) === 12 ? 12 : parseInt(hours) + 12) :
            (parseInt(hours) === 12 ? 0 : parseInt(hours)),
        parseInt(minutes),
        0
    );

    const scheduleEnd = new Date(scheduleStart.getTime() + task.duration * 60000);

    // Calculate auto progress based on time
    let autoProgress = 0;
    if (now < scheduleStart) {
        autoProgress = 0;
    } else if (now > scheduleEnd) {
        autoProgress = 100;
    } else {
        const totalDuration = scheduleEnd.getTime() - scheduleStart.getTime();
        const elapsedTime = now.getTime() - scheduleStart.getTime();
        autoProgress = Math.min(100, (elapsedTime / totalDuration) * 100);
    }

    // Calculate subtasks progress
    const subtasksProgress = task.subtasks && task.subtasks.length > 0
        ? (task.subtasks.filter(st => st.completed).length / task.subtasks.length) * 100
        : 0;

    // Final progress is average of auto progress and subtasks progress
    const totalProgress = (autoProgress + subtasksProgress) / 2;

    return {
        auto: autoProgress,
        subtasks: subtasksProgress,
        total: totalProgress
    };
}

function calculateOverallProgress() {
    if (schedule.length === 0) return { auto: 0, manual: 0, total: 0 };

    const totals = schedule.reduce((acc, task) => {
        const progress = calculateProgress(task);
        return {
            auto: acc.auto + progress.auto,
            subtasks: acc.subtasks + progress.subtasks,
            total: acc.total + progress.total
        };
    }, { auto: 0, subtasks: 0, total: 0 });

    return {
        auto: totals.auto / schedule.length,
        manual: totals.subtasks / schedule.length,
        total: totals.total / schedule.length
    };
}

// Task Management Functions
function findCurrentTask() {
    const now = new Date();
    return schedule.findIndex(task => {
        const [hours, minutes, period] = task.time.match(/(\d+):(\d+)\s*(\w+)/).slice(1);
        let scheduleStart = new Date();
        scheduleStart.setHours(
            period.toLowerCase() === 'pm' ? (parseInt(hours) === 12 ? 12 : parseInt(hours) + 12) :
                (parseInt(hours) === 12 ? 0 : parseInt(hours)),
            parseInt(minutes),
            0
        );
        const scheduleEnd = new Date(scheduleStart.getTime() + task.duration * 60000);

        return now >= scheduleStart && now <= scheduleEnd;
    });
}

// Render Functions
function renderSchedule() {
    const container = document.getElementById('scheduleItems');
    const currentTaskIndex = findCurrentTask();
    const overallProgress = calculateOverallProgress();

    // Update overall progress
    document.getElementById('overallProgressBar').style.width = `${overallProgress.total}%`;
    document.getElementById('overallProgressText').textContent = `${Math.round(overallProgress.total)}%`;
    document.getElementById('autoProgress').textContent = `${Math.round(overallProgress.auto)}%`;
    document.getElementById('manualProgress').textContent = `${Math.round(overallProgress.manual)}%`;

    container.innerHTML = schedule.map((task, index) => {
        const progress = calculateProgress(task);
        const isCurrentTask = index === currentTaskIndex;
        const endTime = calculateEndTime(task.time, task.duration);

        return `
            <div class="schedule-item ${isCurrentTask ? 'current-task' : ''}">
                <div class="task-main">
                    <div class="time-slot">
                        <i class="fas fa-clock"></i>
                        ${task.time} - ${endTime}
                    </div>
                    <div class="activity">${task.activity}</div>
                </div>
                <div class="progress-container">
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${progress.total}%"></div>
                    </div>
                    <span>${Math.round(progress.total)}%</span>
                </div>
                <div class="actions">
                    <button class="btn secondary-btn" onclick="editTask(${task.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn secondary-btn" onclick="openSubtasksModal(${task.id})">
                        <i class="fas fa-tasks"></i>
                    </button>
                    <button class="btn secondary-btn" onclick="deleteTask(${task.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Modal Functions
function openAddModal() {
    document.getElementById('modalTitle').textContent = 'Add Task';
    document.getElementById('taskTime').value = '';
    document.getElementById('taskName').value = '';
    document.getElementById('taskDuration').value = '';
    document.getElementById('endTime').textContent = '';
    document.getElementById('taskModal').classList.add('active');
    editingTaskId = null;

    // Add event listener for duration input
    document.getElementById('taskTime').addEventListener('input', updateEndTime);
    document.getElementById('taskDuration').addEventListener('input', updateEndTime);
}

function updateEndTime() {
    const startTime = document.getElementById('taskTime').value;
    const duration = document.getElementById('taskDuration').value;
    
    if (startTime && duration) {
        const endTime = calculateEndTime(startTime, duration);
        document.getElementById('endTime').textContent = `Ends at: ${endTime}`;
    }
}

function openSubtasksModal(id) {
    currentTaskId = id;
    const task = schedule.find(t => t.id === id);
    
    document.getElementById('taskStartTime').textContent = task.time;
    document.getElementById('taskEndTime').textContent = calculateEndTime(task.time, task.duration);
    
    renderSubtasks(task);
    document.getElementById('subtasksModal').classList.add('active');
}

function renderSubtasks(task) {
    const subtasksList = document.getElementById('subtasksList');
    const subtasks = task.subtasks || [];
    
    subtasksList.innerHTML = subtasks.map((subtask, index) => `
        <div class="subtask-item">
            <input type="checkbox" 
                ${subtask.completed ? 'checked' : ''} 
                onchange="toggleSubtask(${index})"
            >
            <span class="subtask-text">${subtask.text}</span>
            <button class="delete-subtask" onclick="deleteSubtask(${index})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

function addSubtask() {
    const input = document.getElementById('newSubtaskInput');
    const text = input.value.trim();
    
    if (text) {
        const task = schedule.find(t => t.id === currentTaskId);
        if (!task.subtasks) task.subtasks = [];
        
        task.subtasks.push({
            text,
            completed: false
        });
        
        input.value = '';
        renderSubtasks(task);
        saveToLocalStorage();
    }
}

function toggleSubtask(index) {
    const task = schedule.find(t => t.id === currentTaskId);
    task.subtasks[index].completed = !task.subtasks[index].completed;
    saveToLocalStorage();
    renderSchedule();
}

function deleteSubtask(index) {
    const task = schedule.find(t => t.id === currentTaskId);
    task.subtasks.splice(index, 1);
    renderSubtasks(task);
    saveToLocalStorage();
    renderSchedule();
}

function closeModal() {
    document.getElementById('taskModal').classList.remove('active');
    editingTaskId = null;
}

function closeSubtasksModal() {
    document.getElementById('subtasksModal').classList.remove('active');
    currentTaskId = null;
}

function editTask(id) {
    const task = schedule.find(t => t.id === id);
    if (task) {
        document.getElementById('modalTitle').textContent = 'Edit Task';
        document.getElementById('taskTime').value = task.time;
        document.getElementById('taskName').value = task.activity;
        document.getElementById('taskDuration').value = task.duration;
        document.getElementById('endTime').textContent = `Ends at: ${calculateEndTime(task.time, task.duration)}`;
        document.getElementById('taskModal').classList.add('active');
        editingTaskId = id;
    }
}

function saveTask() {
    const time = document.getElementById('taskTime').value;
    const activity = document.getElementById('taskName').value;
    const duration = parseInt(document.getElementById('taskDuration').value);

    if (!time || !activity || !duration) {
        alert('Please fill in all fields');
        return;
    }

    if (editingTaskId) {
        const existingTask = schedule.find(task => task.id === editingTaskId);
        schedule = schedule.map(task =>
            task.id === editingTaskId
                ? { 
                    ...task, 
                    time, 
                    activity, 
                    duration,
                    subtasks: existingTask.subtasks || []
                }
                : task
        );
    } else {
        const newTask = {
            id: Date.now(),
            time,
            activity,
            duration,
            subtasks: []
        };
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

// Initialize
initializeDateTimeDisplay();
renderSchedule();
setInterval(renderSchedule, 60000); // Update every minute