// scripts/game-ui.js - User interface and interaction handling for Semiconductor Saga

/**
 * Handles all UI interactions, displays, and event listeners
 * Works with the GameEngine to create a complete game experience
 */
document.addEventListener('DOMContentLoaded', () => {
    // Game instance
    const game = new GameEngine();
    
    // Cache DOM elements
    const screens = {
        start: document.getElementById('start-screen'),
        levels: document.getElementById('level-select'),
        game: document.getElementById('game-screen'),
        tutorial: document.getElementById('tutorial-screen'),
        complete: document.getElementById('level-complete'),
        menu: document.getElementById('game-menu-screen')
    };
    
    const elements = {
        gameBoard: document.getElementById('game-board'),
        atomPalette: document.getElementById('atom-palette'),
        temperatureSlider: document.getElementById('temperature-slider'),
        temperatureValue: document.getElementById('temperature-value'),
        currentLevel: document.getElementById('current-level'),
        currentScore: document.getElementById('current-score'),
        finalScore: document.getElementById('final-score'),
        efficiencyRating: document.getElementById('efficiency-rating'),
        levelsGrid: document.getElementById('levels-grid')
    };
    
    const buttons = {
        start: document.getElementById('start-btn'),
        tutorial: document.getElementById('tutorial-btn'),
        backToStart: document.getElementById('back-to-start'),
        resetLevel: document.getElementById('reset-level'),
        testCircuit: document.getElementById('test-circuit'),
        gameMenu: document.getElementById('game-menu'),
        nextLevel: document.getElementById('next-level'),
        replayLevel: document.getElementById('replay-level'),
        levelSelectBtn: document.getElementById('level-select-btn'),
        resumeGame: document.getElementById('resume-game'),
        restartLevel: document.getElementById('restart-level'),
        goToLevelSelect: document.getElementById('go-to-level-select'),
        goToTutorial: document.getElementById('go-to-tutorial'),
        quitGame: document.getElementById('quit-game'),
        prevSlide: document.getElementById('prev-slide'),
        nextSlide: document.getElementById('next-slide'),
        exitTutorial: document.getElementById('exit-tutorial')
    };
    
    // Tutorial state
    let currentTutorialSlide = 0;
    const tutorialSlides = document.querySelectorAll('.tutorial-slide');
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize UI
    initializeUI();
    
    /**
     * Initialize the game UI components
     */
    function initializeUI() {
        // Set initial screen
        showScreen('start');
        
        // Generate level selection grid
        generateLevelGrid();
        
        // Set up temperature slider
        elements.temperatureSlider.value = game.temperature;
        updateTemperatureDisplay();
        
        // Set up atom palette
        setupAtomPalette();
    }
    
    /**
     * Set up all event listeners for game controls
     */
    function setupEventListeners() {
        // Start screen buttons
        buttons.start.addEventListener('click', () => showScreen('levels'));
        buttons.tutorial.addEventListener('click', () => {
            showScreen('tutorial');
            showTutorialSlide(0);
        });
        
        // Level selection
        buttons.backToStart.addEventListener('click', () => showScreen('start'));
        
        // Game screen buttons
        buttons.resetLevel.addEventListener('click', resetCurrentLevel);
        buttons.testCircuit.addEventListener('click', testCircuit);
        buttons.gameMenu.addEventListener('click', () => showScreen('menu'));
        
        // Level complete buttons
        buttons.nextLevel.addEventListener('click', goToNextLevel);
        buttons.replayLevel.addEventListener('click', resetCurrentLevel);
        buttons.levelSelectBtn.addEventListener('click', () => showScreen('levels'));
        
        // Game menu buttons
        buttons.resumeGame.addEventListener('click', () => showScreen('game'));
        buttons.restartLevel.addEventListener('click', () => {
            resetCurrentLevel();
            showScreen('game');
        });
        buttons.goToLevelSelect.addEventListener('click', () => showScreen('levels'));
        buttons.goToTutorial.addEventListener('click', () => {
            showScreen('tutorial');
            showTutorialSlide(0);
        });
        buttons.quitGame.addEventListener('click', () => showScreen('start'));
        
        // Tutorial buttons
        buttons.prevSlide.addEventListener('click', () => showTutorialSlide(currentTutorialSlide - 1));
        buttons.nextSlide.addEventListener('click', () => showTutorialSlide(currentTutorialSlide + 1));
        buttons.exitTutorial.addEventListener('click', () => showScreen('start'));
        
        // Temperature slider
        elements.temperatureSlider.addEventListener('input', (e) => {
            game.temperature = parseInt(e.target.value);
            updateTemperatureDisplay();
            applyTemperatureEffects();
        });
        
        // Atom palette selection
        elements.atomPalette.querySelectorAll('.atom-item').forEach(item => {
            item.addEventListener('click', (e) => {
                selectAtom(e.currentTarget.dataset.type);
            });
        });
        
        // Touch and mouse events for game board
        setupBoardInteraction();
    }
    
    /**
     * Set up touch and mouse interactions for the game board
     */
    function setupBoardInteraction() {
        // Variables to track touch/drag operations
        let isDragging = false;
        let lastCell = null;
        
        // Helper function to handle both touch and mouse events
        function handleBoardInteraction(e) {
            e.preventDefault();
            
            if (!game.selectedAtom) return;
            
            // Get position from either mouse or touch event
            const clientX = e.clientX || (e.touches && e.touches[0].clientX);
            const clientY = e.clientY || (e.touches && e.touches[0].clientY);
            
            // Find the cell element under the pointer
            const element = document.elementFromPoint(clientX, clientY);
            const cell = element ? element.closest('.grid-cell') : null;
            
            if (cell && cell !== lastCell) {
                lastCell = cell;
                const row = parseInt(cell.dataset.row);
                const col = parseInt(cell.dataset.col);
                placeAtom(row, col);
            }
        }
        
        // Mouse events
        elements.gameBoard.addEventListener('mousedown', (e) => {
            isDragging = true;
            handleBoardInteraction(e);
        });
        
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                handleBoardInteraction(e);
            }
        });
        
        document.addEventListener('mouseup', () => {
            isDragging = false;
            lastCell = null;
        });
        
        // Touch events
        elements.gameBoard.addEventListener('touchstart', (e) => {
            isDragging = true;
            handleBoardInteraction(e);
        });
        
        document.addEventListener('touchmove', (e) => {
            if (isDragging) {
                handleBoardInteraction(e);
            }
        });
        
        document.addEventListener('touchend', () => {
            isDragging = false;
            lastCell = null;
        });
    }
    
    /**
     * Switch between different game screens
     * @param {string} screenId - The ID of the screen to show
     */
    function showScreen(screenId) {
        // Hide all screens
        Object.values(screens).forEach(screen => {
            screen.classList.add('hidden');
        });
        
        // Show the requested screen
        screens[screenId].classList.remove('hidden');
        
        // Perform any necessary actions when switching to a specific screen
        if (screenId === 'game') {
            updateGameUI();
        } else if (screenId === 'levels') {
            updateLevelSelectUI();
        } else if (screenId === 'complete') {
            updateLevelCompleteStats();
        }
    }
    
    /**
     * Generate the level selection grid
     */
    function generateLevelGrid() {
        elements.levelsGrid.innerHTML = '';
        
        for (let i = 1; i <= game.maxLevel; i++) {
            const levelItem = document.createElement('div');
            levelItem.className = 'level-item';
            if (i > game.unlockedLevels) {
                levelItem.classList.add('locked');
            }
            
            const levelNumber = document.createElement('div');
            levelNumber.className = 'level-number';
            levelNumber.textContent = i;
            
            const levelStars = document.createElement('div');
            levelStars.className = 'level-stars';
            
            // Add stars based on achievement
            const starsEarned = game.levelStars[i] || 0;
            for (let s = 0; s < 3; s++) {
                const star = document.createElement('span');
                star.className = 'level-star';
                star.textContent = s < starsEarned ? '★' : '☆';
                levelStars.appendChild(star);
            }
            
            levelItem.appendChild(levelNumber);
            levelItem.appendChild(levelStars);
            
            // Add click event only for unlocked levels
            if (i <= game.unlockedLevels) {
                levelItem.addEventListener('click', () => {
                    game.currentLevel = i;
                    loadLevel(i);
                    showScreen('game');
                });
            }
            
            elements.levelsGrid.appendChild(levelItem);
        }
    }
    
    /**
     * Show a specific tutorial slide
     * @param {number} index - Index of the slide to show
     */
    function showTutorialSlide(index) {
        if (index < 0 || index >= tutorialSlides.length) return;
        
        // Hide all slides
        tutorialSlides.forEach(slide => slide.classList.add('hidden'));
        
        // Show the requested slide
        tutorialSlides[index].classList.remove('hidden');
        currentTutorialSlide = index;
        
        // Update navigation buttons
        buttons.prevSlide.disabled = index === 0;
        buttons.nextSlide.disabled = index === tutorialSlides.length - 1;
    }
    
    /**
     * Set up the atom palette for selection
     */
    function setupAtomPalette() {
        elements.atomPalette.querySelectorAll('.atom-item').forEach(item => {
            item.classList.remove('selected');
        });
    }
    
    /**
     * Select an atom type for placement
     * @param {string} atomType - Type of atom to select
     */
    function selectAtom(atomType) {
        game.selectedAtom = atomType;
        
        // Update UI to show selection
        elements.atomPalette.querySelectorAll('.atom-item').forEach(item => {
            item.classList.remove('selected');
            if (item.dataset.type === atomType) {
                item.classList.add('selected');
            }
        });
    }
    
    /**
     * Place an atom on the game board
     * @param {number} row - Row index
     * @param {number} col - Column index
     */
    function placeAtom(row, col) {
        if (!game.selectedAtom || game.isCircuitTesting) return;
        
        const result = game.placeAtom(row, col);
        
        if (result.success) {
            updateGameBoard();
            updateScore();
        } else {
            // Show invalid placement feedback
            const cell = elements.gameBoard.querySelector(`[data-row="${row}"][data-col="${col}"]`);
            cell.classList.add('invalid-placement');
            setTimeout(() => {
                cell.classList.remove('invalid-placement');
            }, 300);
        }
    }
    
    /**
     * Update the game board display
     */
    function updateGameBoard() {
        elements.gameBoard.innerHTML = '';
        
        // Create cells for the game board
        for (let row = 0; row < game.boardSize; row++) {
            for (let col = 0; col < game.boardSize; col++) {
                const cell = document.createElement('div');
                cell.className = 'grid-cell';
                cell.dataset.row = row;
                cell.dataset.col = col;
                
                const atom = game.gameBoard[row][col];
                if (atom) {
                    const atomElement = document.createElement('div');
                    atomElement.className = `atom ${atom.type}`;
                    atomElement.textContent = getAtomSymbol(atom.type);
                    cell.appendChild(atomElement);
                }
                
                elements.gameBoard.appendChild(cell);
            }
        }
        
        // Add bonds between atoms
        renderBonds();
    }
    
    /**
     * Render bonds between atoms
     */
    function renderBonds() {
        // Clear existing bonds
        elements.gameBoard.querySelectorAll('.bond').forEach(bond => bond.remove());
        
        // Generate new bonds
        for (let row = 0; row < game.boardSize; row++) {
            for (let col = 0; col < game.boardSize; col++) {
                const atom = game.gameBoard[row][col];
                if (atom) {
                    // Check for bonds with adjacent atoms
                    const adjacentPositions = [
                        { row: row-1, col: col },  // Up
                        { row: row+1, col: col },  // Down
                        { row: row, col: col-1 },  // Left
                        { row: row, col: col+1 }   // Right
                    ];
                    
                    adjacentPositions.forEach(pos => {
                        if (pos.row >= 0 && pos.row < game.boardSize && 
                            pos.col >= 0 && pos.col < game.boardSize &&
                            game.gameBoard[pos.row][pos.col]) {
                            
                            // Don't create duplicate bonds
                            if (pos.row > row || (pos.row === row && pos.col > col)) {
                                createBond(row, col, pos.row, pos.col);
                            }
                        }
                    });
                }
            }
        }
    }
    
    /**
     * Create a visual bond between two atoms
     */
    function createBond(row1, col1, row2, col2) {
        const sourceCell = elements.gameBoard.querySelector(`[data-row="${row1}"][data-col="${col1}"]`);
        const targetCell = elements.gameBoard.querySelector(`[data-row="${row2}"][data-col="${col2}"]`);
        
        if (!sourceCell || !targetCell) return;
        
        const sourceBounds = sourceCell.getBoundingClientRect();
        const targetBounds = targetCell.getBoundingClientRect();
        
        const bond = document.createElement('div');
        bond.className = 'bond';
        
        // Calculate bond position and rotation
        const dx = targetBounds.left - sourceBounds.left;
        const dy = targetBounds.top - sourceBounds.top;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        
        // Position the bond
        bond.style.width = `${length}px`;
        bond.style.transformOrigin = 'center left';
        bond.style.transform = `rotate(${angle}deg)`;
        
        // Position the bond at the center of the source cell
        bond.style.left = '50%';
        bond.style.top = '50%';
        
        sourceCell.appendChild(bond);
    }
    
    /**
     * Update temperature display
     */
    /**
     * Update temperature display
     */
    function updateTemperatureDisplay() {
        elements.temperatureValue.textContent = `${game.temperature}°C`;
        
        // Change color based on temperature
        if (game.temperature > 50) {
            elements.temperatureValue.style.color = '#ff6464'; // Red for hot
        } else if (game.temperature < 20) {
            elements.temperatureValue.style.color = '#64c8ff'; // Blue for cold
        } else {
            elements.temperatureValue.style.color = ''; // Default
        }
    }
    
    /**
     * Apply visual effects based on temperature
     */
    function applyTemperatureEffects() {
        // Remove existing effects
        elements.gameBoard.querySelectorAll('.atom').forEach(atom => {
            atom.classList.remove('hot-effect', 'cold-effect');
        });
        
        // Apply new effects based on temperature
        if (game.temperature > 60) {
            elements.gameBoard.querySelectorAll('.atom').forEach(atom => {
                atom.classList.add('hot-effect');
            });
        } else if (game.temperature < 10) {
            elements.gameBoard.querySelectorAll('.atom').forEach(atom => {
                atom.classList.add('cold-effect');
            });
        }
        
        // Update game state with new temperature
        game.updateConductivity();
    }
    
    /**
     * Update the score display
     */
    function updateScore() {
        elements.currentScore.textContent = game.score;
    }
    
    /**
     * Update all game UI elements
     */
    function updateGameUI() {
        elements.currentLevel.textContent = game.currentLevel;
        updateScore();
        updateGameBoard();
    }
    
    /**
     * Update the level selection UI
     */
    function updateLevelSelectUI() {
        // Highlight unlocked levels and update stars
        elements.levelsGrid.querySelectorAll('.level-item').forEach((item, index) => {
            const level = index + 1;
            
            if (level <= game.unlockedLevels) {
                item.classList.remove('locked');
            } else {
                item.classList.add('locked');
            }
            
            // Update stars
            const starsEarned = game.levelStars[level] || 0;
            const starElements = item.querySelectorAll('.level-star');
            
            starElements.forEach((star, starIndex) => {
                star.textContent = starIndex < starsEarned ? '★' : '☆';
            });
        });
    }
    
    /**
     * Update level complete statistics
     */
    function updateLevelCompleteStats() {
        elements.finalScore.textContent = game.score;
        
        // Calculate efficiency rating (example calculation)
        const efficiency = Math.floor(game.calculateEfficiency() * 100);
        elements.efficiencyRating.textContent = `${efficiency}%`;
    }
    
    /**
     * Load a specific level
     * @param {number} levelNumber - The level to load
     */
    function loadLevel(levelNumber) {
        game.loadLevel(levelNumber);
        updateGameUI();
        
        // Reset atom selection
        game.selectedAtom = null;
        setupAtomPalette();
    }
    
    /**
     * Reset the current level
     */
    function resetCurrentLevel() {
        game.resetLevel();
        updateGameUI();
        
        // Reset temperature to default
        game.temperature = 25;
        elements.temperatureSlider.value = 25;
        updateTemperatureDisplay();
        
        // Reset atom selection
        game.selectedAtom = null;
        setupAtomPalette();
    }
    
    /**
     * Test the current circuit setup
     */
    function testCircuit() {
        if (game.isCircuitTesting) return;
        
        game.isCircuitTesting = true;
        buttons.testCircuit.disabled = true;
        
        // Simulate circuit testing with visual feedback
        const result = game.testCircuit();
        
        // Show visual feedback of electron flow
        showElectronFlow(result.conductionPath);
        
        // Update UI based on circuit test results
        setTimeout(() => {
            game.isCircuitTesting = false;
            buttons.testCircuit.disabled = false;
            
            if (result.success) {
                // Level completed
                const stars = game.calculateStars();
                game.levelStars[game.currentLevel] = Math.max(stars, game.levelStars[game.currentLevel] || 0);
                
                // Unlock next level if this is the first time completing
                if (game.currentLevel === game.unlockedLevels) {
                    game.unlockedLevels = Math.min(game.currentLevel + 1, game.maxLevel);
                }
                
                // Save progress
                game.saveProgress();
                
                // Show level complete screen
                showScreen('complete');
            } else {
                // Show feedback message
                showMessage(result.message || 'Try another configuration');
            }
        }, 3000);
    }
    
    /**
     * Go to the next level
     */
    function goToNextLevel() {
        if (game.currentLevel < game.maxLevel) {
            game.currentLevel++;
            loadLevel(game.currentLevel);
            showScreen('game');
        } else {
            // Show game complete or return to level select
            showScreen('levels');
        }
    }
    
    /**
     * Show electron flow animation along a conduction path
     * @param {Array} path - Array of {row, col} positions forming the conduction path
     */
    function showElectronFlow(path) {
        if (!path || path.length < 2) return;
        
        // Add conducting class to cells in the path
        path.forEach(pos => {
            const cell = elements.gameBoard.querySelector(`[data-row="${pos.row}"][data-col="${pos.col}"]`);
            if (cell) {
                cell.classList.add('conducting');
                
                // Add atom glow if there's an atom
                const atomEl = cell.querySelector('.atom');
                if (atomEl) {
                    atomEl.classList.add('conducting');
                }
            }
        });
        
        // Create electron animation
        let electronIndex = 0;
        const electronInterval = setInterval(() => {
            if (electronIndex >= path.length) {
                electronIndex = 0;
            }
            
            // Add electron at current path position
            const pos = path[electronIndex];
            const cell = elements.gameBoard.querySelector(`[data-row="${pos.row}"][data-col="${pos.col}"]`);
            
            if (cell) {
                const electron = document.createElement('div');
                electron.className = 'electron';
                cell.appendChild(electron);
                
                // Remove electron after animation
                setTimeout(() => {
                    electron.remove();
                }, 500);
            }
            
            electronIndex++;
        }, 200);
        
        // Stop animation after a few seconds
        setTimeout(() => {
            clearInterval(electronInterval);
            
            // Remove conducting class
            elements.gameBoard.querySelectorAll('.conducting').forEach(el => {
                el.classList.remove('conducting');
            });
        }, 3000);
    }
    
    /**
     * Show a temporary message to the user
     * @param {string} text - Message text
     */
    function showMessage(text) {
        // Create message element if it doesn't exist
        let messageEl = document.getElementById('game-message');
        if (!messageEl) {
            messageEl = document.createElement('div');
            messageEl.id = 'game-message';
            messageEl.style.position = 'absolute';
            messageEl.style.top = '50%';
            messageEl.style.left = '50%';
            messageEl.style.transform = 'translate(-50%, -50%)';
            messageEl.style.background = 'rgba(0, 0, 0, 0.8)';
            messageEl.style.color = 'white';
            messageEl.style.padding = '15px 20px';
            messageEl.style.borderRadius = '5px';
            messageEl.style.zIndex = '100';
            messageEl.style.textAlign = 'center';
            screens.game.appendChild(messageEl);
        }
        
        // Set message text and show
        messageEl.textContent = text;
        messageEl.style.display = 'block';
        
        // Hide after delay
        setTimeout(() => {
            messageEl.style.display = 'none';
        }, 2000);
    }
    
    /**
     * Get atom symbol for display
     * @param {string} atomType - Type of atom
     * @return {string} - Symbol for the atom
     */
    function getAtomSymbol(atomType) {
        switch(atomType) {
            case 'germanium': return 'Ge';
            case 'silicon': return 'Si';
            case 'arsenic': return 'As';
            case 'gallium': return 'Ga';
            default: return '';
        }
    }
    
    // Initialize the game on load
    initializeUI();
});