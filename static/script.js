// Variables globales del juego
let currentGameId = null;
let moveCount = 0;
let startTime = null;
let timerInterval = null;

// Inicialización del juego
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
    setupEventListeners();
});

function initializeGame() {
    createNewGame();
    startTimer();
}

function setupEventListeners() {
    // Botones de control
    document.getElementById('new-game-btn').addEventListener('click', createNewGame);
    document.getElementById('hint-btn').addEventListener('click', showHint);
    document.getElementById('play-again-btn').addEventListener('click', createNewGame);
    
    // Eventos de las pilas
    document.getElementById('stock').addEventListener('click', drawFromStock);
    
    // Configurar event listeners para las fundaciones y tableau
    setupPileEventListeners();
}

function setupPileEventListeners() {
    // Fundaciones
    ['hearts', 'diamonds', 'clubs', 'spades'].forEach(suit => {
        document.getElementById(`foundation-${suit}`).addEventListener('click', () => {
            // Lógica para manejar clicks en fundaciones
        });
    });
    
    // Tableau
    for (let i = 0; i < 7; i++) {
        document.getElementById(`tableau-${i}`).addEventListener('click', (e) => {
            handleTableauClick(i, e);
        });
    }
}

// Funciones del juego
async function createNewGame() {
    try {
        const response = await fetch('/new_game', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        const gameState = await response.json();
        currentGameId = gameState.game_id;
        moveCount = 0;
        resetTimer();
        
        updateGameDisplay(gameState);
        hideWinModal();
        
    } catch (error) {
        console.error('Error creating new game:', error);
        alert('Error al crear nuevo juego. Por favor, recarga la página.');
    }
}

async function drawFromStock() {
    if (!currentGameId) return;
    
    try {
        const response = await fetch('/draw_card', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                game_id: currentGameId
            })
        });
        
        const result = await response.json();
        updateStockAndWaste(result);
        incrementMoveCount();
        
    } catch (error) {
        console.error('Error drawing from stock:', error);
    }
}

async function moveCard(fromPile, toPile, cardIndex = 0) {
    if (!currentGameId) return;
    
    try {
        const response = await fetch('/move_card', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                game_id: currentGameId,
                from_pile: fromPile,
                to_pile: toPile,
                card_index: cardIndex
            })
        });
        
        const result = await response.json();
        if (result.success) {
            updateGameDisplay(result);
            incrementMoveCount();
            
            if (result.game_won) {
                showWinModal();
            }
        } else {
            // Mostrar feedback visual de movimiento inválido
            showInvalidMoveFeedback();
        }
        
    } catch (error) {
        console.error('Error moving card:', error);
    }
}

// Actualización de la interfaz
function updateGameDisplay(gameState) {
    updateTableau(gameState.tableau);
    updateFoundations(gameState.foundations);
    updateStockAndWaste(gameState);
}

function updateTableau(tableauState) {
    // Limpiar tableau
    for (let i = 0; i < 7; i++) {
        const pileElement = document.getElementById(`tableau-${i}`);
        pileElement.innerHTML = '';
    }
    
    // Actualizar cada columna del tableau
    tableauState.forEach(pile => {
        const pileElement = document.getElementById(`tableau-${pile.index}`);
        
        pile.cards.forEach((card, cardIndex) => {
            const cardElement = createCardElement(card, cardIndex);
            pileElement.appendChild(cardElement);
        });
    });
}

function updateFoundations(foundationsState) {
    Object.entries(foundationsState).forEach(([suit, foundation]) => {
        const foundationElement = document.getElementById(`foundation-${suit}`);
        foundationElement.innerHTML = '';
        
        if (foundation.top_card) {
            const cardElement = createCardElement({
                suit: foundation.top_card.suit,
                rank: foundation.top_card.rank,
                face_up: true
            }, 0);
            foundationElement.appendChild(cardElement);
        }
    });
}

function updateStockAndWaste(gameState) {
    // Actualizar stock
    const stockElement = document.getElementById('stock');
    stockElement.innerHTML = '';
    
    if (gameState.stock > 0) {
        const stockCard = document.createElement('div');
        stockCard.className = 'card back';
        stockElement.appendChild(stockCard);
    }
    
    // Actualizar waste
    const wasteElement = document.getElementById('waste');
    wasteElement.innerHTML = '';
    
    gameState.waste.forEach((card, index) => {
        const cardElement = createCardElement({
            suit: card.suit,
            rank: card.rank,
            face_up: true
        }, index);
        wasteElement.appendChild(cardElement);
    });
}

function createCardElement(card, index) {
    const cardElement = document.createElement('div');
    cardElement.className = `card ${card.face_up ? 'front' : 'back'}`;
    cardElement.style.top = `${index * 20}px`;
    
    if (card.face_up) {
        const isRed = card.suit === 'hearts' || card.suit === 'diamonds';
        cardElement.classList.add(isRed ? 'red' : 'black');
        
        cardElement.innerHTML = `
            <div class="rank">${card.rank}</div>
            <div class="suit">${getSuitSymbol(card.suit)}</div>
        `;
        
        // Agregar event listeners para cartas boca arriba
        cardElement.addEventListener('click', (e) => {
            e.stopPropagation();
            handleCardClick(card, index);
        });
    }
    
    cardElement.classList.add('dealing');
    
    return cardElement;
}

function getSuitSymbol(suit) {
    const symbols = {
        'hearts': '♥',
        'diamonds': '♦',
        'clubs': '♣',
        'spades': '♠'
    };
    return symbols[suit] || suit[0].toUpperCase();
}

// Funciones auxiliares
function handleCardClick(card, index) {
    // Implementar lógica para seleccionar y mover cartas
    console.log('Card clicked:', card, index);
}

function handleTableauClick(pileIndex, event) {
    // Implementar lógica para manejar clicks en el tableau
    console.log('Tableau pile clicked:', pileIndex, event);
}

function showHint() {
    // Implementar sistema de pistas
    alert('Función de pista no implementada aún');
}

function showInvalidMoveFeedback() {
    // Feedback visual para movimiento inválido
    document.body.style.backgroundColor = '#c0392b';
    setTimeout(() => {
        document.body.style.backgroundColor = '';
    }, 200);
}

// Sistema de temporizador y contador de movimientos
function startTimer() {
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
}

function resetTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    document.getElementById('timer').textContent = 'Tiempo: 00:00';
    startTimer();
}

function updateTimer() {
    const currentTime = new Date();
    const elapsed = Math.floor((currentTime - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60).toString().padStart(2, '0');
    const seconds = (elapsed % 60).toString().padStart(2, '0');
    document.getElementById('timer').textContent = `Tiempo: ${minutes}:${seconds}`;
}

function incrementMoveCount() {
    moveCount++;
    document.getElementById('moves-count').textContent = `Movimientos: ${moveCount}`;
}

// Modal de victoria
function showWinModal() {
    const finalTime = document.getElementById('timer').textContent;
    document.getElementById('final-stats').textContent = 
        `Movimientos: ${moveCount} | ${finalTime}`;
    document.getElementById('win-modal').classList.remove('hidden');
    
    if (timerInterval) {
        clearInterval(timerInterval);
    }
}

function hideWinModal() {
    document.getElementById('win-modal').classList.add('hidden');
}

// Función para obtener estado actual del juego
async function getCurrentGameState() {
    if (!currentGameId) return;
    
    try {
        const response = await fetch('/get_game_state', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                game_id: currentGameId
            })
        });
        
        return await response.json();
    } catch (error) {
        console.error('Error getting game state:', error);
        return null;
    }
}