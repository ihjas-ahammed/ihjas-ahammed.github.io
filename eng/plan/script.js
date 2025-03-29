document.addEventListener('DOMContentLoaded', () => {
    const dayButtons = document.querySelectorAll('.day-btn');
    const dayPlans = document.querySelectorAll('.day-plan');
    const taskCheckboxes = document.querySelectorAll('.task-item input[type="checkbox"]');
    const resetButton = document.getElementById('reset-progress');
    const mouseGlow = document.getElementById('mouse-glow');

    const STORAGE_KEY = 'aethelStudyProgress_v1'; // Unique key for localStorage

    // --- State Management (Loading/Saving Progress) ---

    function loadProgress() {
        const savedProgress = localStorage.getItem(STORAGE_KEY);
        if (savedProgress) {
            try {
                const progress = JSON.parse(savedProgress);
                taskCheckboxes.forEach(checkbox => {
                    const taskId = checkbox.dataset.taskid;
                    if (progress[taskId]) {
                        checkbox.checked = true;
                        updateTaskAppearance(checkbox); // Update visual style on load
                    } else {
                        checkbox.checked = false;
                        updateTaskAppearance(checkbox);
                    }
                });
                console.log("Progress loaded.");
            } catch (e) {
                console.error("Error parsing saved progress:", e);
                localStorage.removeItem(STORAGE_KEY); // Clear corrupted data
            }
        } else {
            console.log("No saved progress found.");
            // Ensure all checkboxes are visually unchecked initially if no save data
             taskCheckboxes.forEach(checkbox => {
                 checkbox.checked = false;
                 updateTaskAppearance(checkbox);
             });
        }
    }

    function saveProgress() {
        const progress = {};
        taskCheckboxes.forEach(checkbox => {
            progress[checkbox.dataset.taskid] = checkbox.checked;
        });
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
            // console.log("Progress saved."); // Optional: for debugging
        } catch (e) {
            console.error("Error saving progress to localStorage:", e);
             // Potentially notify user if storage is full or unavailable
        }
    }

    // --- Event Handlers ---

    function handleDayNavClick(event) {
        if (!event.target.classList.contains('day-btn')) return; // Ignore clicks outside buttons

        const selectedDay = event.target.dataset.day;

        // Update button styles
        dayButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.day === selectedDay);
        });

        // Update displayed plan
        dayPlans.forEach(plan => {
            plan.classList.toggle('active', plan.id === `day-${selectedDay}`);
        });
    }

    function handleCheckboxChange(event) {
        const checkbox = event.target;
        updateTaskAppearance(checkbox); // Update visual style on change
        saveProgress(); // Save progress whenever a checkbox is changed
    }

    function updateTaskAppearance(checkbox) {
         const label = checkbox.closest('label'); // Find the parent label
         if (label) {
            // Use class for styling completed state for robustness
            label.classList.toggle('completed', checkbox.checked);
         }
         // Optionally update parent li opacity directly if needed,
         // but class on label is generally preferred for CSS targeting.
         // const listItem = checkbox.closest('.task-item');
         // if(listItem) {
         //    listItem.style.opacity = checkbox.checked ? '0.6' : '1';
         // }
    }

    function handleResetClick() {
        // Confirmation dialog
        if (confirm("Are you sure you want to reset all your progress? This cannot be undone.")) {
            localStorage.removeItem(STORAGE_KEY);
            taskCheckboxes.forEach(checkbox => {
                checkbox.checked = false;
                updateTaskAppearance(checkbox); // Reset visual style
            });
            console.log("Progress reset.");
            // Optionally, switch back to Day 1 view or refresh page
             // showDayPlan('1'); // Assuming showDayPlan function exists or implement it
             // Or simply: location.reload();
        }
    }

     // --- Mouse Glow Effect ---
     function handleMouseMove(event) {
        // Check if the glow element exists to prevent errors
        if (mouseGlow) {
             // Use clientX/clientY for position relative to viewport
             mouseGlow.style.left = `${event.clientX}px`;
             mouseGlow.style.top = `${event.clientY}px`;
        }
     }


    // --- Initial Setup ---

    // Add event listeners
    document.getElementById('day-navigation').addEventListener('click', handleDayNavClick);
    taskCheckboxes.forEach(checkbox => checkbox.addEventListener('change', handleCheckboxChange));
    resetButton.addEventListener('click', handleResetClick);
    document.addEventListener('mousemove', handleMouseMove); // Add mousemove listener to the whole document


    // Load initial progress
    loadProgress();

    // Ensure Day 1 is visible by default (if no other logic sets it)
    // This might already be handled by the initial 'active' class in HTML,
    // but good to be sure.
    const initialActiveDay = document.querySelector('#day-navigation .day-btn.active');
    const initialDayId = initialActiveDay ? initialActiveDay.dataset.day : '1';
    document.querySelectorAll('.day-plan').forEach(plan => {
        plan.classList.toggle('active', plan.id === `day-${initialDayId}`);
    });


    console.log("Study Flow Initialized.");

}); // End DOMContentLoaded