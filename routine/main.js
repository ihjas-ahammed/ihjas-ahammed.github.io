// Get current date and time
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = now.toLocaleDateString(undefined, options);
    document.getElementById('currentTime').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Initialize the current time and date
updateDateTime();
setInterval(updateDateTime, 1000);

// Sample task data (replace with your actual data)
let tasks = [
    {
        day: 1, // Monday
        time: '09:00',
        name: 'Team Meeting',
        duration: 60,
        progress: 0,
        progressType: 'manual',
        subtasks: []
    },
    {
        day: 3, // Wednesday
        time: '14:00',
        name: 'Client Presentation',
        duration: 90,
        progress: 0,
        progressType: 'subtasks',
        subtasks: ['Prepare slides', 'Rehearse presentation', 'Send follow-up email']
    }
    // ... more tasks
];

// Function to render week tabs
function renderWeekTabs() {
    const weekTabs = document.getElementById('weekTabs');
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentDay = new Date().getDay(); // Get current day of the week (0-6)

    for (let i = 0; i < daysOfWeek.length; i++) {
        const tab = document.createElement('div');
        tab.classList.add('week-tab');
        tab.textContent = daysOfWeek[i];
        tab.addEventListener('click', () => renderSchedule(i)); // Filter tasks by day on tab click
        if (i === currentDay) {
            tab.classList.add('active'); // Highlight current day's tab
        }
        weekTabs.appendChild(tab);
    }
}

// Function to render schedule items
function renderSchedule(dayOfWeek) {
    const scheduleItems = document.getElementById('scheduleItems');
    scheduleItems.innerHTML = ''; // Clear previous schedule items

    // Filter tasks based on the selected dayOfWeek
    const filteredTasks = tasks.filter(task => task.day === dayOfWeek);

    filteredTasks.forEach(task => {
        const item = document.createElement('div');
        item.classList.add('schedule-item');

        const taskInfo = document.createElement('div');
        taskInfo.classList.add('task-info');
        taskInfo.innerHTML = `
            <span class="task-time">${task.time}</span>
            <span class="task-name">${task.name}</span>
        `;
        item.appendChild(taskInfo);

        const taskActions = document.createElement('div');
        taskActions.classList.add('task-actions');
        taskActions.innerHTML = `
            <button class="edit-btn" onclick="editTask(${task.id})">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete-btn" onclick="deleteTask(${task.id})">
                <i class="fas fa-trash-alt"></i>
            </button>
            <button class="progress-btn" onclick="openProgressModal(${task.id})">
                <i class="fas fa-tasks"></i> ${task.progress}%
            </button>
        `;
        item.appendChild(taskActions);

        scheduleItems.appendChild(item);
    });
}

// Function to open the "Add Task" modal
function openAddModal() {
    document.getElementById('modalTitle').textContent = 'Add Task';
    document.getElementById('taskModal').style.display = 'block';
    // Set default day selection to the current day
    const currentDay = new Date().getDay();
    document.getElementById('taskDay').selectedIndex = currentDay;
}

// Function to close the modal
function closeModal() {
    document.getElementById('taskModal').style.display = 'none';
}

// Function to save the task
function saveTask() {
    const day = parseInt(document.getElementById('taskDay').value);
    const time = document.getElementById('taskTime').value;
    const name = document.getElementById('taskName').value;
    const duration = parseInt(document.getElementById('taskDuration').value);
    const progressType = document.getElementById('progressType').checked ? 'subtasks' : 'manual';

    const newTask = {
        day: day,
        time: time,
        name: name,
        duration: duration,
        progress: 0,
        progressType: progressType,
        subtasks: []
    };

    tasks.push(newTask);
    closeModal();
    renderSchedule(day); // Re-render the schedule for the selected day
}

// Function to open the "Update Progress" modal
function openProgressModal(taskId) {
    // ... (Implementation for updating progress)
}

// Function to close the "Update Progress" modal
function closeProgressModal() {
    document.getElementById('progressModal').style.display = 'none';
}

// Function to save the progress
function saveProgress() {
    // ... (Implementation for saving progress)
}

// Function to open the "Subtasks" modal
function openSubtasksModal(taskId) {
    // ... (Implementation for managing subtasks)
}

// Function to close the "Subtasks" modal
function closeSubtasksModal() {
    document.getElementById('subtasksModal').style.display = 'none';
}

// Function to add a subtask
function addSubtask() {
    // ... (Implementation for adding a subtask)
}

// Initial rendering
renderWeekTabs();
renderSchedule(new Date().getDay()); // Render schedule for the current day by default