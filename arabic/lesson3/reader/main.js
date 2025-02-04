// State management
let currentLessonIndex = 0;
let lessonData = [];

// DOM Elements
const arabicText = document.getElementById('arabicText');
const englishText = document.getElementById('englishText');
const wordTableBody = document.getElementById('wordTableBody');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Fetch lesson data
async function fetchLessonData() {
    try {
        const response = await fetch('lesson.json');
        lessonData = await response.json();
        updateProgressText();
        displayLesson(currentLessonIndex);
        updateNavigationButtons();
    } catch (error) {
        console.error('Error loading lesson data:', error);
        document.querySelector('.lesson-content').innerHTML = 
            '<p class="error">Error loading lesson data. Please try again later.</p>';
    }
}

// Display current lesson
function displayLesson(index) {
    const lesson = lessonData[index];
    if (!lesson) return;

    // Add fade out effect
    const content = document.querySelector('.lesson-content');
    content.classList.add('fade');

    // Update content after brief animation
    setTimeout(() => {
        // Update Arabic and English text
        arabicText.textContent = lesson.sentence;
        englishText.textContent = lesson.meaning;

        // Clear and update word table
        wordTableBody.innerHTML = '';
        lesson.words.forEach(word => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td dir="rtl">${word.word}</td>
                <td>${word.meaning}</td>
            `;
            wordTableBody.appendChild(row);
        });

        // Update progress
        updateProgress();
        
        // Remove fade effect
        content.classList.remove('fade');
    }, 300);
}

// Update progress bar and text
function updateProgress() {
    const progress = ((currentLessonIndex + 1) / lessonData.length) * 100;
    progressBar.style.width = `${progress}%`;
    updateProgressText();
}

// Update progress text
function updateProgressText() {
    progressText.textContent = `${currentLessonIndex + 1}/${lessonData.length}`;
}

// Navigate to previous lesson
function previousLesson() {
    if (currentLessonIndex > 0) {
        currentLessonIndex--;
        displayLesson(currentLessonIndex);
        updateNavigationButtons();
    }
}

// Navigate to next lesson
function nextLesson() {
    if (currentLessonIndex < lessonData.length - 1) {
        currentLessonIndex++;
        displayLesson(currentLessonIndex);
        updateNavigationButtons();
    }
}

// Update navigation button states
function updateNavigationButtons() {
    prevBtn.disabled = currentLessonIndex === 0;
    nextBtn.disabled = currentLessonIndex === lessonData.length - 1;
}

// Event Listeners
prevBtn.addEventListener('click', previousLesson);
nextBtn.addEventListener('click', nextLesson);

// Keyboard navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        previousLesson();
    } else if (event.key === 'ArrowRight') {
        nextLesson();
    }
});

// Touch swipe navigation
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeLength = touchEndX - touchStartX;

    if (Math.abs(swipeLength) > swipeThreshold) {
        if (swipeLength > 0) {
            previousLesson();
        } else {
            nextLesson();
        }
    }
}

// Add auto-resize functionality for Arabic text
function adjustArabicTextSize() {
    const container = document.querySelector('.lesson-content');
    const arabicText = document.getElementById('arabicText');
    
    if (arabicText.scrollHeight > container.clientHeight * 0.4) {
        let fontSize = parseInt(window.getComputedStyle(arabicText).fontSize);
        while (arabicText.scrollHeight > container.clientHeight * 0.4 && fontSize > 16) {
            fontSize--;
            arabicText.style.fontSize = `${fontSize}px`;
        }
    }
}

// Observer for dynamic content changes
const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        if (entry.target === document.getElementById('arabicText')) {
            adjustArabicTextSize();
        }
    }
});

resizeObserver.observe(document.getElementById('arabicText'));

// Initialize lesson
window.addEventListener('load', () => {
    fetchLessonData();
});

// Add error handling for failed image/resource loading
window.addEventListener('error', (event) => {
    if (event.target.tagName === 'IMG') {
        event.target.style.display = 'none';
        const errorText = document.createElement('span');
        errorText.className = 'error-text';
        errorText.textContent = 'Image failed to load';
        event.target.parentNode.appendChild(errorText);
    }
}, true);

// Add local storage for lesson progress
function saveProgress() {
    localStorage.setItem('lessonProgress', currentLessonIndex);
}

function loadProgress() {
    const savedProgress = localStorage.getItem('lessonProgress');
    if (savedProgress !== null) {
        currentLessonIndex = parseInt(savedProgress);
        displayLesson(currentLessonIndex);
        updateNavigationButtons();
    }
}

// Save progress when leaving page
window.addEventListener('beforeunload', saveProgress);

// Load saved progress on initial load
window.addEventListener('load', loadProgress);