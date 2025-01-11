let currentLevel = 1;
let currentQuestion = 0;
let score = 0;
let lives = 3;
let progress = {};
let answeredQuestions = new Set();
let levels = {};
let levelsAr = {};
let currentTab = 'english';
let questionOrder = [];
let questionOrderAr = [];

// Fetch levels data from JSON files
async function fetchLevels() {
    try {
        const [englishResponse, arabicResponse] = await Promise.all([
            fetch('js/levels.json'),
            fetch('js/levels-ar.json')
        ]);
        
        levels = await englishResponse.json();
        levelsAr = await arabicResponse.json();
        
        // Shuffle both English and Arabic questions on initial load
        Object.keys(levels).forEach(level => {
            shuffleArray(levels[level]);
        });
        
        Object.keys(levelsAr).forEach(level => {
            shuffleArray(levelsAr[level]);
        });
        
        initializeLevelSelect();
        initializeLevelSelectAr();
        updateBackButton();
    } catch (error) {
        console.error('Error loading levels:', error);
    }
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Back button functionality
function updateBackButton() {
    const backButton = document.getElementById('backButton');
    const isHome = (currentTab === 'english' && document.querySelector('.level-select').style.display !== 'none') ||
                  (currentTab === 'arabic' && document.querySelector('.level-select-ar').style.display !== 'none') ||
                  currentTab === 'reader';
    
    backButton.disabled = isHome;
    backButton.style.opacity = isHome ? '0.5' : '1';
    
    backButton.onclick = isHome ? null : () => {
        returnToMainMenu();
    };
}

// Tab switching functionality
function switchTab(tabName) {
    currentTab = tabName;
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    document.querySelector(`.nav-item[onclick="switchTab('${tabName}')"]`).classList.add('active');
    
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(`${tabName}-tab`).classList.add('active');
    updateBackButton();
}

// Load progress from localStorage
function loadProgress() {
    const savedProgress = localStorage.getItem('arabicLiteratureProgress');
    if (savedProgress) {
        return JSON.parse(savedProgress);
    }
    return {
        levelProgress: {},
        levelProgressAr: {},
        totalScore: 0
    };
}

// Save progress to localStorage
function saveProgress() {
    const progressData = {
        levelProgress: {},
        levelProgressAr: {},
        totalScore: score
    };

    Object.keys(levels).forEach(level => {
        progressData.levelProgress[level] = {
            completed: answeredQuestions.size === levels[level]?.length,
            progress: progress[level] || 0
        };
    });

    Object.keys(levelsAr).forEach(level => {
        progressData.levelProgressAr[level] = {
            completed: answeredQuestions.size === levelsAr[level]?.length,
            progress: progress[level] || 0
        };
    });

    localStorage.setItem('arabicLiteratureProgress', JSON.stringify(progressData));
}

function initializeLevelSelect() {
    const levelSelect = document.querySelector('.level-select');
    const savedProgress = loadProgress();

    levelSelect.innerHTML = Object.keys(levels).map(level => `
        <div class="level-card" onclick="startLevel(${level})">
            <div class="level-icon">📚</div>
            <h3>Level ${level}</h3>
            <p>${getLevelDescription(level)}</p>
            <div class="level-progress" style="width: ${savedProgress.levelProgress[level]?.progress || 0}%"></div>
        </div>
    `).join('');
}

function initializeLevelSelectAr() {
    const levelSelect = document.querySelector('.level-select-ar');
    const savedProgress = loadProgress();

    levelSelect.innerHTML = Object.keys(levelsAr).map(level => `
        <div class="level-card" onclick="startLevelAr(${level})">
            <div class="level-icon">📚</div>
            <h3>المستوى ${level}</h3>
            <p>${getLevelDescriptionAr(level)}</p>
            <div class="level-progress" style="width: ${savedProgress.levelProgressAr[level]?.progress || 0}%"></div>
        </div>
    `).join('');
}

// Question randomization
function shuffleQuestions() {
    const currentQuestions = currentTab === 'english' ? levels[currentLevel] : levelsAr[currentLevel];
    shuffleArray(currentQuestions);
    currentQuestion = 0;
    showCurrentQuestion();
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

function getLevelDescriptionAr(level) {
    const descriptions = {
        1: "مقدمة عن طه حسين",
        2: "المفردات العربية",
        3: "المواضيع الأدبية",
        4: "التحليل المتقدم"
    };
    return descriptions[level] || `المستوى ${level}`;
}

// Restart level function
function restartLevel() {
    const level = currentLevel;
    if (currentTab === 'english') {
        startLevel(level);
    } else {
        startLevelAr(level);
    }
}

// Level management functions
function startLevel(level) {
    currentLevel = level;
    currentQuestion = 0;
    answeredQuestions.clear();
    lives = 3;
    progress[level] = 0;
    document.querySelector('.level-select').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    shuffleQuestions();
    updateUI();
    updateBackButton();
}

function startLevelAr(level) {
    currentLevel = level;
    currentQuestion = 0;
    answeredQuestions.clear();
    lives = 3;
    progress[level] = 0;
    document.querySelector('.level-select-ar').style.display = 'none';
    document.getElementById('question-container-ar').style.display = 'block';
    shuffleQuestions();
    updateUI();
    updateBackButton();
}

function updateUI() {
    document.querySelector('.score').textContent = score;
    document.querySelector('.progress-fill').style.width = `${progress[currentLevel] || 0}%`;
    document.querySelector('.progress-fill').setAttribute('data-level', currentLevel);
    updateLives();
    updateNavButtons();
}

function showCurrentQuestion() {
    const currentQuestions = currentTab === 'english' ? levels[currentLevel] : levelsAr[currentLevel];
    const question = currentQuestions[currentQuestion];
    
    const container = document.querySelector(`#question-container${currentTab === 'english' ? '' : '-ar'}`);
    const questionElement = container.querySelector('.question');
    const optionsContainer = container.querySelector('.options');

    if (currentTab === 'english') {
        questionElement.innerHTML = question.arabic ?
            `<div class="arabic-text">${question.arabic}</div>${question.question}` :
            question.question;
    } else {
        questionElement.innerHTML = question.english ?
            `<div class="english-text">${question.english}</div>${question.question}` :
            question.question;
    }

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
    const isEnglish = currentTab === 'english';
    const prevBtn = document.getElementById(isEnglish ? 'prevBtn' : 'prevBtn-ar');
    const nextBtn = document.getElementById(isEnglish ? 'nextBtn' : 'nextBtn-ar');
    const currentQuestions = isEnglish ? levels[currentLevel] : levelsAr[currentLevel];

    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = currentQuestion === currentQuestions.length - 1;
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showCurrentQuestion();
    }
}

function nextQuestion() {
    const currentQuestions = currentTab === 'english' ? levels[currentLevel] : levelsAr[currentLevel];
    if (currentQuestion < currentQuestions.length - 1) {
        currentQuestion++;
        showCurrentQuestion();
    }
}

function checkAnswer(selectedIndex) {
    if (answeredQuestions.has(currentQuestion)) return;

    const currentQuestions = currentTab === 'english' ? levels[currentLevel] : levelsAr[currentLevel];
    const question = currentQuestions[currentQuestion];
    const container = currentTab === 'english' ? 
        document.getElementById('question-container') : 
        document.getElementById('question-container-ar');
    const options = container.querySelectorAll('.option');

    if (selectedIndex === question.correct) {
        options[selectedIndex].classList.add('correct');
        score += 10;
        answeredQuestions.add(currentQuestion);
        progress[currentLevel] = (answeredQuestions.size / currentQuestions.length) * 100;
    } else {
        options[selectedIndex].classList.add('wrong');
        options[question.correct].classList.add('correct');
        lives--;
        if (lives === 0) {
            gameOver();
            return;
        }
    }

    updateUI();
    saveProgress();
}

function updateLives() {
    const heartsContainer = document.querySelector('.lives');
    heartsContainer.innerHTML = '❤️'.repeat(lives);
}

function gameOver() {
    const container = currentTab === 'english' ? 
        document.getElementById('question-container') : 
        document.getElementById('question-container-ar');
    
    container.innerHTML = `
        <div class="game-over">
            <h2>${currentTab === 'english' ? 'Game Over!' : 'انتهت اللعبة!'}</h2>
            <p>${currentTab === 'english' ? 'Final Score: ' : 'النتيجة النهائية: '}${score}</p>
            <div class="nav-buttons">
                <button class="nav-btn" onclick="window.location = window.location">
                    ${currentTab === 'english' ? 'Main Menu' : 'القائمة الرئيسية'}
                </button>
            </div>
        </div>
    `;
    updateBackButton();
}


function returnToMainMenu() {
    if (currentTab === 'english') {
        document.querySelector('.level-select').style.display = 'grid';
        document.getElementById('question-container').style.display = 'none';
        initializeLevelSelect();
    } else {
        document.querySelector('.level-select-ar').style.display = 'grid';
        document.getElementById('question-container-ar').style.display = 'none';
        initializeLevelSelectAr();
    }
    updateBackButton();
}

function fixReaderHeight(){
    let readerTab = document.getElementById("reader-tab")
    let mainContent = document.querySelector(".main-content")

    readerTab.style.height = "100%"
    setTimeout(()=>readerTab.style.height = (mainContent.clientHeight-30)+"px",100)
}

window.addEventListener("resize", function(event) {
    fixReaderHeight()
});



// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    fetchLevels();
    switchTab('english');

    // Navigation button event listeners
    document.getElementById('prevBtn').addEventListener('click', previousQuestion);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('prevBtn-ar').addEventListener('click', previousQuestion);
    document.getElementById('nextBtn-ar').addEventListener('click', nextQuestion);
    
    // Shuffle button event listeners
    document.getElementById('shuffleBtn').addEventListener('click', shuffleQuestions);
    document.getElementById('shuffleBtn-ar').addEventListener('click', shuffleQuestions);
});

fixReaderHeight()