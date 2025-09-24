// ABOUT: Game Play Randomiser - Core game logic for card drawing simulation
// ABOUT: Manages card deck, pile splitting, drawing mechanics, and state persistence

class GamePlayRandomiser {
    constructor() {
        this.suits = ['hearts', 'diamonds', 'spades', 'clubs'];
        this.ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.piles = {
            hearts: [],
            diamonds: [],
            spades: [],
            clubs: []
        };
        this.discardPile = [];
        this.currentDraw = [];

        // Don't auto-initialize - let the page load handler decide
    }

    // Create and shuffle the initial deck with jokers
    createDeck() {
        const deck = [];

        // Add standard 52 cards
        for (const suit of this.suits) {
            for (const rank of this.ranks) {
                deck.push({ suit, rank, isJoker: false });
            }
        }

        // Add 2 jokers
        deck.push({ suit: 'joker', rank: 'Joker', isJoker: true });
        deck.push({ suit: 'joker', rank: 'Joker', isJoker: true });

        return this.shuffleArray(deck);
    }

    // Fisher-Yates shuffle algorithm
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Split deck into piles and assign jokers
    splitDeckIntoPiles(deck) {
        // Reset piles
        this.piles = {
            hearts: [],
            diamonds: [],
            spades: [],
            clubs: []
        };

        const jokers = [];

        // Separate jokers and regular cards
        for (const card of deck) {
            if (card.isJoker) {
                jokers.push(card);
            } else {
                this.piles[card.suit].push(card);
            }
        }

        // Randomly assign jokers to red/black piles
        if (jokers.length >= 1) {
            const redPiles = ['hearts', 'diamonds'];
            const randomRedPile = redPiles[Math.floor(Math.random() * 2)];
            this.piles[randomRedPile].push(jokers[0]);
        }

        if (jokers.length >= 2) {
            const blackPiles = ['spades', 'clubs'];
            const randomBlackPile = blackPiles[Math.floor(Math.random() * 2)];
            this.piles[randomBlackPile].push(jokers[1]);
        }

        // Shuffle each pile
        for (const suit of this.suits) {
            this.piles[suit] = this.shuffleArray(this.piles[suit]);
        }
    }

    // Initialize or reset the game
    initializeGame() {
        const deck = this.createDeck();
        this.splitDeckIntoPiles(deck);
        this.discardPile = [];
        this.currentDraw = [];
        this.saveGameState();
        this.updateDisplay();
    }

    // Draw one card from each pile
    drawCards() {
        // Check if any pile is empty
        const emptyPiles = this.suits.filter(suit => this.piles[suit].length === 0);
        if (emptyPiles.length > 0) {
            this.showMessage("Game complete! Some piles are empty. Please reset to continue.");
            return false;
        }

        // Draw one card from each pile
        this.currentDraw = [];
        for (const suit of this.suits) {
            if (this.piles[suit].length > 0) {
                const drawnCard = this.piles[suit].pop();
                this.currentDraw.push(drawnCard);
                this.discardPile.push(drawnCard);
            }
        }

        this.saveGameState();
        this.updateDisplay();
        this.showMessage("");
        return true;
    }

    // Reset game to initial state
    resetGame() {
        this.initializeGame();
        this.showMessage("Game reset! New deck shuffled and ready.");
    }

    // Save game state to localStorage
    saveGameState() {
        const gameState = {
            piles: this.piles,
            discardPile: this.discardPile,
            currentDraw: this.currentDraw,
            timestamp: Date.now()
        };
        localStorage.setItem('gamePlayRandomiser', JSON.stringify(gameState));
    }

    // Load game state from localStorage
    loadGameState() {
        try {
            const saved = localStorage.getItem('gamePlayRandomiser');
            if (saved) {
                const gameState = JSON.parse(saved);
                this.piles = gameState.piles || this.piles;
                this.discardPile = gameState.discardPile || [];
                this.currentDraw = gameState.currentDraw || [];
                return true;
            }
        } catch (error) {
            console.error('Error loading game state:', error);
        }
        return false;
    }

    // Update the display with current game state
    updateDisplay() {
        // Update pile counts
        for (const suit of this.suits) {
            const countElement = document.getElementById(`${suit}-count`);
            if (countElement) {
                countElement.textContent = this.piles[suit].length;
            }
        }

        // Update drawn cards display
        const cardsDisplay = document.getElementById('cards-display');
        const noCardsMessage = document.getElementById('no-cards-message');

        if (this.currentDraw.length === 0) {
            cardsDisplay.innerHTML = '<div class="message" id="no-cards-message">Click "Draw Cards" to start your round</div>';
        } else {
            cardsDisplay.innerHTML = '';

            for (const card of this.currentDraw) {
                const cardElement = document.createElement('div');
                cardElement.className = `card ${card.isJoker ? 'joker' : card.suit}`;

                if (card.isJoker) {
                    cardElement.textContent = 'Joker';
                } else {
                    const suitSymbol = this.getSuitSymbol(card.suit);
                    cardElement.textContent = `${card.rank}${suitSymbol}`;
                }

                cardsDisplay.appendChild(cardElement);
            }
        }

        // Update draw button state
        const drawBtn = document.getElementById('draw-btn');
        const emptyPiles = this.suits.filter(suit => this.piles[suit].length === 0);
        if (drawBtn) {
            drawBtn.disabled = emptyPiles.length > 0;
        }
    }

    // Get suit symbol for display
    getSuitSymbol(suit) {
        const symbols = {
            hearts: '♥️',
            diamonds: '♦️',
            spades: '♠️',
            clubs: '♣️'
        };
        return symbols[suit] || '';
    }

    // Show message to user
    showMessage(message) {
        const messageElement = document.getElementById('game-message');
        if (messageElement) {
            messageElement.textContent = message;
        }
    }
}

// Global game instance
let game;

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', function() {
    game = new GamePlayRandomiser();

    // Try to load saved game state
    if (game.loadGameState()) {
        game.updateDisplay();
        game.showMessage("Welcome back! Your game has been restored.");
    } else {
        // Only initialize new game if no saved state exists
        game.initializeGame();
        game.showMessage("New game started! Click 'Draw Cards' to begin.");
    }
});

// Global functions called by buttons
function drawCards() {
    if (game) {
        game.drawCards();
    }
}

function resetGame() {
    if (game) {
        game.resetGame();
    }
}