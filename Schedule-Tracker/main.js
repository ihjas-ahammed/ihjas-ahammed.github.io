// Global Variables
let schedule = JSON.parse(localStorage.getItem('schedule')) || [];
let editingTaskId = null;
let currentProgressTaskId = null;

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

// Local Storage Functions
function saveToLocalStorage() {
    localStorage.setItem('schedule', JSON.stringify(schedule));
}

// Progress Calculation Functions
function calculateProgress(startTime, duration, manualProgress = 0) {
    const now = new Date();
    const [hours, minutes, period] = startTime.match(/(\d+):(\d+)\s*(\w+)/).slice(1);
    
    let scheduleStart = new Date();
    scheduleStart.setHours(
        period.toLowerCase() === 'pm' ? (parseInt(hours) === 12 ? 12 : parseInt(hours) + 12) :
            (parseInt(hours) === 12 ? 0 : parseInt(hours)),
        parseInt(minutes),
        0
    );

    const scheduleEnd = new Date(scheduleStart.getTime() + duration * 60000);

    if (now < scheduleStart) return { auto: 0, manual: manualProgress, total: manualProgress * 0.5 };
    if (now > scheduleEnd) return { auto: 100, manual: manualProgress, total: Math.min(100, 50 + manualProgress * 0.5) };

    const totalDuration = scheduleEnd.getTime() - scheduleStart.getTime();
    const elapsedTime = now.getTime() - scheduleStart.getTime();
    const autoProgress = Math.min(100, (elapsedTime / totalDuration) * 100);

    return {
        auto: autoProgress,
        manual: manualProgress,
        total: Math.min(100, (autoProgress * 0.5) + (manualProgress * 0.5))
    };
}

function calculateOverallProgress() {
    if (schedule.length === 0) return { auto: 0, manual: 0, total: 0 };

    const totalAutoProgress = schedule.reduce((sum, task) => {
        const progress = calculateProgress(task.time, task.duration, task.manualProgress || 0);
        return sum + progress.auto;
    }, 0);

    const totalManualProgress = schedule.reduce((sum, task) => {
        return sum + (task.manualProgress || 0);
    }, 0);

    const averageAuto = totalAutoProgress / schedule.length;
    const averageManual = totalManualProgress / schedule.length;

    return {
        auto: averageAuto,
        manual: averageManual,
        total: (averageAuto * 0.5) + (averageManual * 0.5)
    };
}

// Task Management Functions
function findCurrentTask() {
    const now = new Date();
    return schedule.findIndex(item => {
        const [hours, minutes, period] = item.time.match(/(\d+):(\d+)\s*(\w+)/).slice(1);
        let scheduleStart = new Date();
        scheduleStart.setHours(
            period.toLowerCase() === 'pm' ? (parseInt(hours) === 12 ? 12 : parseInt(hours) + 12) :
                (parseInt(hours) === 12 ? 0 : parseInt(hours)),
            parseInt(minutes),
            0
        );
        const scheduleEnd = new Date(scheduleStart.getTime() + item.duration * 60000);

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

    container.innerHTML = schedule.map((item, index) => {
        const progress = calculateProgress(item.time, item.duration, item.manualProgress || 0);
        const isCurrentTask = index === currentTaskIndex;

        return `
            <div class="schedule-item ${isCurrentTask ? 'current-task' : ''}">
                <div class="task-main">
                    <div class="time-slot">
                        <i class="fas fa-clock"></i>
                        ${item.time}
                    </div>
                    <div class="activity">${item.activity}</div>
                </div>
                <div class="progress-container">
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${progress.total}%"></div>
                    </div>
                    <span>${Math.round(progress.total)}%</span>
                </div>
                <div class="actions">
                    <button class="btn secondary-btn" onclick="editTask(${item.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn secondary-btn" onclick="openProgressModal(${item.id})">
                        <i class="fas fa-tasks"></i>
                    </button>
                    <button class="btn secondary-btn" onclick="deleteTask(${item.id})">
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
    document.getElementById('taskModal').classList.add('active');
    editingTaskId = null;
}

function openProgressModal(id) {
    currentProgressTaskId = id;
    const task = schedule.find(t => t.id === id);
    document.getElementById('manualProgressInput').value = task.manualProgress || 0;
    document.getElementById('progressValue').textContent = `${task.manualProgress || 0}%`;
    document.getElementById('alertModal').classList.add('active');
}

function closeModal() {
    document.getElementById('taskModal').classList.remove('active');
    editingTaskId = null;
}

function closeAlertModal() {
    document.getElementById('alertModal').classList.remove('active');
    currentProgressTaskId = null;
}

// Event Listeners
document.getElementById('manualProgressInput').addEventListener('input', function(e) {
    document.getElementById('progressValue').textContent = `${e.target.value}%`;
});

function saveManualProgress() {
    const progressValue = parseInt(document.getElementById('manualProgressInput').value);
    
    schedule = schedule.map(task =>
        task.id === currentProgressTaskId
            ? { ...task, manualProgress: progressValue }
            : task
    );

    saveToLocalStorage();
    renderSchedule();
    closeAlertModal();
}

function editTask(id) {
    const task = schedule.find(t => t.id === id);
    if (task) {
        document.getElementById('modalTitle').textContent = 'Edit Task';
        document.getElementById('taskTime').value = task.time;
        document.getElementById('taskName').value = task.activity;
        document.getElementById('taskDuration').value = task.duration;
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
        schedule = schedule.map(task =>
            task.id === editingTaskId
                ? { ...task, time, activity, duration }
                : task
        );
    } else {
        const newTask = {
            id: Date.now(),
            time,
            activity,
            duration,
            manualProgress: 0
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
setInterval(renderSchedule, 60000); // Update every second