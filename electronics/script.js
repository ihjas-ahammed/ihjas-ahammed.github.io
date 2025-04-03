document.addEventListener('DOMContentLoaded', () => {
    // --- Global Variables & State ---
    const taskItems = document.querySelectorAll('.task-item');
    const allCheckboxes = document.querySelectorAll('.task-checkbox');
    const taskTimers = {}; // Stores interval IDs: { taskId: intervalId }
    const taskStartTimes = {}; // Stores start timestamps: { taskId: timestamp }
    let taskElapsedTimes = loadElapsedTimes(); // Stores total elapsed ms: { taskId: milliseconds }

    // --- DOM Element References ---
    const overallProgressFill = document.getElementById('overall-progress-fill');
    const overallProgressText = document.getElementById('overall-progress-text');
    const mouseFollower = document.querySelector('.mouse-follower');
    const chartCanvas = document.getElementById('timeChart');

    // --- Chart.js Setup ---
    let timeChart; // To hold the chart instance
    const chartCtx = chartCanvas.getContext('2d');

    function initializeChart() {
        const chartData = getChartData();

        timeChart = new Chart(chartCtx, {
            type: 'line',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: 'Time Spent (seconds)',
                    data: chartData.data,
                    borderColor: 'rgba(0, 242, 254, 0.8)', // Cyan line
                    backgroundColor: 'rgba(0, 242, 254, 0.2)', // Cyan fill
                    borderWidth: 2,
                    tension: 0.3, // Slightly curved lines
                    pointBackgroundColor: 'rgba(194, 0, 251, 0.8)', // Purple points
                    pointRadius: 4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, // Allow flexible height
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Time (seconds)',
                            color: '#e0e0e0'
                        },
                        ticks: { color: '#b0b0b0' } ,
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    x: {
                         ticks: { color: '#b0b0b0' },
                         grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                },
                plugins: {
                    legend: { display: false },
                     tooltip: {
                         backgroundColor: 'rgba(0, 0, 0, 0.8)',
                         titleColor: '#00f2fe',
                         bodyColor: '#e0e0e0',
                     }
                }
            }
        });
    }

    function getChartData() {
        const labels = [];
        const data = [];
        taskItems.forEach(item => {
            const taskId = item.dataset.taskId;
            const taskName = item.dataset.taskName || taskId; // Use name, fallback to ID
            labels.push(taskName);
            data.push(Math.round((taskElapsedTimes[taskId] || 0) / 1000)); // Convert ms to seconds
        });
        return { labels, data };
    }

    function updateChart() {
        if (!timeChart) return; // Don't update if chart not initialized
        const chartData = getChartData();
        timeChart.data.labels = chartData.labels;
        timeChart.data.datasets[0].data = chartData.data;
        timeChart.update();
    }

    // --- Mouse Follower ---
    if (mouseFollower && window.matchMedia('(pointer: fine)').matches) { // Only for devices with fine pointer (mouse)
        window.addEventListener('mousemove', (e) => {
            mouseFollower.style.left = `${e.clientX}px`;
            mouseFollower.style.top = `${e.clientY}px`;
        });
    } else if (mouseFollower) {
        mouseFollower.style.display = 'none'; // Hide on touch devices
    }

    // --- Progress Calculation ---
    function updateProgress() {
        // Overall Progress
        const checkedCount = document.querySelectorAll('.task-checkbox:checked').length;
        const totalTasks = allCheckboxes.length;
        const overallPercentage = totalTasks === 0 ? 0 : Math.round((checkedCount / totalTasks) * 100);
        overallProgressFill.style.width = `${overallPercentage}%`;
        overallProgressText.textContent = `${overallPercentage}% (${checkedCount}/${totalTasks})`;

        // Group Progress
        const taskGroups = document.querySelectorAll('.task-group');
        taskGroups.forEach(group => {
            const groupId = group.id;
            const groupCheckboxes = group.querySelectorAll('.task-checkbox');
            const groupCheckedCount = group.querySelectorAll('.task-checkbox:checked').length;
            const groupTotalTasks = groupCheckboxes.length;
            const groupPercentage = groupTotalTasks === 0 ? 0 : Math.round((groupCheckedCount / groupTotalTasks) * 100);

            const groupFill = document.getElementById(`${groupId}-progress-fill`);
            const groupText = document.getElementById(`${groupId}-progress-text`);
            if (groupFill && groupText) {
                groupFill.style.width = `${groupPercentage}%`;
                groupText.textContent = `${groupPercentage}%`;
            }
        });
    }

    // --- Timer Logic ---
    function formatTime(ms) {
        if (ms < 0) ms = 0;
        const totalSeconds = Math.floor(ms / 1000);
        const seconds = totalSeconds % 60;
        const totalMinutes = Math.floor(totalSeconds / 60);
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);

        if (hours > 0) return `${hours}h ${minutes}m ${seconds}s`;
        if (minutes > 0) return `${minutes}m ${seconds}s`;
        return `${seconds}s`;
    }

    function updateTimerDisplay(taskItem, taskId) {
        const timeDisplay = taskItem.querySelector('.time-spent');
        const startTime = taskStartTimes[taskId];
        const accumulatedTime = taskElapsedTimes[taskId] || 0;

        if (startTime && timeDisplay) { // Timer is running
            const currentTime = Date.now();
            const elapsedSinceStart = currentTime - startTime;
            timeDisplay.textContent = formatTime(accumulatedTime + elapsedSinceStart);
        } else if (timeDisplay) { // Timer is stopped
            timeDisplay.textContent = formatTime(accumulatedTime);
        }
    }

    function saveElapsedTimes() {
        localStorage.setItem('taskElapsedTimes', JSON.stringify(taskElapsedTimes));
    }

    function loadElapsedTimes() {
       const savedTimes = localStorage.getItem('taskElapsedTimes');
       return savedTimes ? JSON.parse(savedTimes) : {};
    }

    function handleTimerButtonClick(event) {
        const button = event.target;
        const taskItem = button.closest('.task-item');
        const taskId = taskItem.dataset.taskId;
        const startBtn = taskItem.querySelector('.start-btn');
        const finishBtn = taskItem.querySelector('.finish-btn');

        if (button.classList.contains('start-btn')) {
            // Start Timer
            if (!taskStartTimes[taskId]) { // Prevent starting if already running
                taskStartTimes[taskId] = Date.now();
                taskTimers[taskId] = setInterval(() => updateTimerDisplay(taskItem, taskId), 1000); // Update display every second
                startBtn.disabled = true;
                finishBtn.disabled = false;
                startBtn.classList.add('running'); // Add pulsing animation
                 updateTimerDisplay(taskItem, taskId); // Immediate update
            }
        } else if (button.classList.contains('finish-btn')) {
            // Finish Timer
            if (taskStartTimes[taskId]) {
                 clearInterval(taskTimers[taskId]);
                 const endTime = Date.now();
                 const elapsed = endTime - taskStartTimes[taskId];
                 taskElapsedTimes[taskId] = (taskElapsedTimes[taskId] || 0) + elapsed;

                 delete taskStartTimes[taskId];
                 delete taskTimers[taskId];

                 startBtn.disabled = false;
                 finishBtn.disabled = true;
                 startBtn.classList.remove('running'); // Remove pulsing animation
                 updateTimerDisplay(taskItem, taskId); // Final update
                 saveElapsedTimes(); // Persist time
                 updateChart(); // Update graph
            }
        }
    }

    // --- Event Listeners ---
    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });

    document.querySelectorAll('.timer-btn').forEach(button => {
        button.addEventListener('click', handleTimerButtonClick);
    });

    // --- Initial Setup ---
    taskItems.forEach(item => { // Initialize display for saved times
        const taskId = item.dataset.taskId;
        updateTimerDisplay(item, taskId);
    });
    updateProgress(); // Initial progress calculation
    initializeChart(); // Create the chart on load
    updateChart(); // Populate chart with initial/loaded data

}); // End DOMContentLoaded