let currentLevel = 1;
let currentQuestion = 0;
let score = 0;
let lives = 3;
let progress = 0;
let answeredQuestions = new Set();
let levels = {};

// Fetch levels data from JSON file
async function fetchLevels() {
    try {
        const response = await fetch('js/levels.json');
        levels = await response.json();
        initializeLevelSelect();
    } catch (error) {
        console.error('Error loading levels:', error);
    }
}

// Load progress from localStorage
function loadProgress() {
    const savedProgress = localStorage.getItem('arabicLiteratureProgress');
    if (savedProgress) {
        return JSON.parse(savedProgress);
    }
    return {
        levelProgress: {},
        totalScore: 0
    };
}

// Save progress to localStorage
function saveProgress() {
    const progressData = {
        levelProgress: {},
        totalScore: score
    };

    Object.keys(levels).forEach(level => {
        progressData.levelProgress[level] = {
            completed: answeredQuestions.size === levels[level].length,
            progress: (answeredQuestions.size / levels[level].length) * 100
        };
    });

    localStorage.setItem('arabicLiteratureProgress', JSON.stringify(progressData));
}

// Initialize level select screen
function initializeLevelSelect() {
    const levelSelect = document.querySelector('.level-select');
    const progress = loadProgress();

    levelSelect.innerHTML = Object.keys(levels).map(level => `
        <div class="level-card" onclick="startLevel(${level})">
            <div class="level-icon">📚</div>
            <h3>Level ${level}</h3>
            <p>${getLevelDescription(level)}</p>
            <div class="level-progress" style="width: ${progress.levelProgress[level]?.progress || 0}%"></div>
        </div>
    `).join('');
}

function getLevelDescription(level) {
    const descriptions = {
        1: "Introduction to Taha Hussein",
        2: "Arabic Vocabulary",
        3: "Literary Themes",
        4: "Advanced Analysis"
    };
    return descriptions[level] || `Level ${level}`;
}

function startLevel(level) {
    currentLevel = level;
    currentQuestion = 0;
    answeredQuestions.clear();
    lives = 3;
    progress = 0;
    updateUI();
    showQuestion();
}

function updateUI() {
    document.querySelector('.level-select').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    document.querySelector('.score').textContent = score;
    document.querySelector('.progress-fill').style.width = `${progress}%`;
    updateLives();
    updateNavButtons();
}

function showQuestion() {
    const question = levels[currentLevel][currentQuestion];
    const questionContainer = document.querySelector('.question');
    const optionsContainer = document.querySelector('.options');

    questionContainer.innerHTML = question.arabic ?
        `<div class="arabic-text">${question.arabic}</div>${question.question}` :
        question.question;

    optionsContainer.innerHTML = question.options
        .map((option, index) => `
            <div class="option ${answeredQuestions.has(currentQuestion) ?
                (index === question.correct ? 'correct' : '') : ''}" 
                onclick="checkAnswer(${index})">
                ${option}
            </div>
        `).join('');

    updateNavButtons();
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = currentQuestion === levels[currentLevel].length - 1 &&
        answeredQuestions.has(currentQuestion);
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < levels[currentLevel].length - 1) {
        currentQuestion++;
        showQuestion();
    }
}

function checkAnswer(selectedIndex) {
    if (answeredQuestions.has(currentQuestion)) return;

    const question = levels[currentLevel][currentQuestion];
    const options = document.querySelectorAll('.option');

    if (selectedIndex === question.correct) {
        options[selectedIndex].classList.add('correct');
        score += 10;
        progress = ((answeredQuestions.size + 1) / levels[currentLevel].length) * 100;
    } else {
        options[selectedIndex].classList.add('wrong');
        options[question.correct].classList.add('correct');
        lives--;
        updateLives();
    }

    answeredQuestions.add(currentQuestion);
    updateUI();
    saveProgress();
}

function updateLives() {
    const heartsContainer = document.querySelector('.lives');
    heartsContainer.innerHTML = '❤️'.repeat(lives);

    if (lives === 0) {
        gameOver();
    }
}

function restartLevel() {
    if (confirm('Are you sure you want to restart this level? Your progress will be reset.')) {
        startLevel(currentLevel);
    }
}

function returnToMainMenu() {
    document.querySelector('.level-select').style.display = 'grid';
    document.getElementById('question-container').style.display = 'none';
    initializeLevelSelect();
}

function gameOver() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="question-container">
            <div class="question">
                <h2>Game Over!</h2>
                <p>Final Score: ${score}</p>
                <div class="nav-buttons">
                    <button class="nav-btn" onclick="restartLevel()">Try Again</button>
                    <button class="nav-btn" onclick="returnToMainMenu()">Main Menu</button>
                </div>
            </div>
        </div>
    `;
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', fetchLevels);
