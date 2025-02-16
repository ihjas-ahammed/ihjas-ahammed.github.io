'use strict';

let currentLevel = 1;
let currentQuestion = 0;
let score = 0;
let lives = 3;
let progress = {}; // progress per level, e.g. {1: 50, 2: 100, ...}
let answeredQuestions = new Set();
let levels = {};     // English levels
let currentQuestionShuffledData = {};

const storageKey = `${window.location.pathname}_arabicLiteratureProgress`;

async function fetchLevels() {
    try {
        const englishResponse = await fetch('js/levels.json');
        levels = await englishResponse.json();

        Object.keys(levels).forEach(level => {
            shuffleArray(levels[level]);
        });

        initializeLevelSelect();
        updateBackButton();
    } catch (error) {
        console.error('Error loading levels:', error);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateBackButton() {
    const backButton = document.getElementById('backButton');
    const isHome = document.querySelector('.level-select').style.display !== 'none';
    backButton.disabled = isHome;
    backButton.style.opacity = isHome ? '0.5' : '1';
    backButton.onclick = isHome ? null : returnToMainMenu;
}

function loadProgress() {
    const savedProgress = localStorage.getItem(storageKey);
    return savedProgress ? JSON.parse(savedProgress) : {
        levelProgress: {},
        totalScore: 0
    };
}

function saveProgress() {
    const progressData = {
        levelProgress: {},
        totalScore: score
    };

    Object.keys(levels).forEach(level => {
        progressData.levelProgress[level] = {
            completed: answeredQuestions.size === levels[level]?.length,
            progress: progress[level] || 0
        };
    });

    localStorage.setItem(storageKey, JSON.stringify(progressData));
}

function initializeLevelSelect() {
    const container = document.querySelector('.level-select');
    const savedProgress = loadProgress();
    
    container.innerHTML = Object.keys(levels).map(level => `
        <div class="level-card" onclick="startLevel(${level})">
            <div class="level-icon">📚</div>
            <h3>Part ${level}</h3>
            <p>${getLevelDescription(level)}</p>
            <div class="level-progress" style="width: ${savedProgress.levelProgress[level]?.progress || 0}%"></div>
        </div>
    `).join('');
}

function getLevelDescription(level) {
    const descriptions = {
        1: "Page 0-10",
        2: "Page 10-20",
        3: "Inference and Deeper Understanding",
        4: "Advanced Vocabulary and Literary Analysis"
    };
    return descriptions[level] || `Level ${level}`;
}

function shuffleQuestions() {
    shuffleArray(levels[currentLevel]);
    currentQuestion = 0;
    showCurrentQuestion();
}

function startLevel(level) {
    currentLevel = level;
    currentQuestion = 0;
    answeredQuestions.clear();
    lives = 3;
    progress[level] = 0;
    currentQuestionShuffledData = {};
    
    document.querySelector('.level-select').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    
    shuffleQuestions();
    updateUI();
    updateBackButton();
}

function restartLevel() {
    startLevel(currentLevel);
}

function updateUI() {
    document.querySelector('.score').textContent = score;
    const progressFill = document.querySelector('.progress-fill');
    progressFill.style.width = `${progress[currentLevel] || 0}%`;
    progressFill.setAttribute('data-level', currentLevel);
    updateLives();
    updateNavButtons();
}

function updateLives() {
    const heartsContainer = document.querySelector('.lives');
    heartsContainer.innerHTML = '❤️'.repeat(lives);
}

function showCurrentQuestion() {
    const currentQuestions = levels[currentLevel];
    const question = currentQuestions[currentQuestion];
    const container = document.getElementById('question-container');
    const questionElement = container.querySelector('.question');
    const optionsContainer = container.querySelector('.options');

    questionElement.innerHTML = question.question;

    if (!currentQuestionShuffledData[currentQuestion]) {
        const shuffledOptions = shuffleArray([...question.options]);
        const newCorrectIndex = shuffledOptions.indexOf(question.options[question.correct]);
        currentQuestionShuffledData[currentQuestion] = { options: shuffledOptions, correct: newCorrectIndex };
    }
    const shuffledData = currentQuestionShuffledData[currentQuestion];

    optionsContainer.innerHTML = shuffledData.options.map((option, index) => `
        <div class="option ${answeredQuestions.has(currentQuestion) && index === shuffledData.correct ? 'correct' : ''}" 
             onclick="checkAnswer(${index})">
            ${option}
        </div>
    `).join('');
    updateNavButtons();
}

function updateNavButtons() {
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').disabled = currentQuestion === levels[currentLevel].length - 1;
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showCurrentQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < levels[currentLevel].length - 1) {
        currentQuestion++;
        showCurrentQuestion();
    }
}

function checkAnswer(selectedIndex) {
    if (answeredQuestions.has(currentQuestion)) return;

    const question = levels[currentLevel][currentQuestion];
    const container = document.getElementById('question-container');
    const options = container.querySelectorAll('.option');
    const shuffledData = currentQuestionShuffledData[currentQuestion];

    if (selectedIndex === shuffledData.correct) {
        options[selectedIndex].classList.add('correct');
        score += 10;
        answeredQuestions.add(currentQuestion);
        progress[currentLevel] = (answeredQuestions.size / levels[currentLevel].length) * 100;
    } else {
        options[selectedIndex].classList.add('wrong');
        options[shuffledData.correct].classList.add('correct');
        lives--;
        if (lives === 0) gameOver();
    }

    updateUI();
    saveProgress();
}

function returnToMainMenu() {
    document.querySelector('.level-select').style.display = 'grid';
    document.getElementById('question-container').style.display = 'none';
    initializeLevelSelect();
    updateBackButton();
}

document.addEventListener('DOMContentLoaded', fetchLevels);
