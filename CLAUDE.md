# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The **Game Play Randomiser** is a web-based card drawing simulator for tabletop gaming. It replaces physical playing cards with a digital deck that maintains state between gaming sessions.

🌐 **Live Site**: https://gameplay.hultberg.org
📝 **Repository**: https://github.com/mannepanne/game-play-randomiser
⚡ **Status**: Phase One completed and deployed

## How It Works (Quick Start for Developers)

**Core Concept**: Simulate drawing cards from 4 separate piles (Hearts, Diamonds, Spades, Clubs) for tabletop games that require randomized card values.

**Key Files**:
- `index.html` - Main application interface
- `game.js` - Core game logic (`GamePlayRandomiser` class)
- `worker.js` - CloudFlare Workers deployment wrapper
- `wrangler.toml` - Deployment configuration

**Architecture**: Simple vanilla JavaScript with class-based state management, localStorage persistence, and CloudFlare Workers hosting.

## Game Mechanics

1. **Setup**: 54-card deck (52 + 2 jokers) split into 4 suit-based piles
2. **Gameplay**: Draw one card from each pile per round (4 cards total)
3. **Persistence**: Game state saved to localStorage, survives browser restarts
4. **Reset**: Manual reset or automatic when piles are empty

## Development Workflow

**Quick Start**:
```bash
# Local development
wrangler dev --local
open http://localhost:8787

# Deploy changes
wrangler deploy
```

**Code Structure**:
- `GamePlayRandomiser` class handles all game logic
- Card data structure: `{suit, rank, isJoker}`
- State persistence via `saveGameState()` and `loadGameState()`
- UI updates through `updateDisplay()` method

## Adding New Features

**Common Extension Points**:
1. **New Game Types**: Extend `GamePlayRandomiser` class or create new classes
2. **UI Enhancements**: Modify `index.html` and CSS, update `updateDisplay()`
3. **Storage**: Add new fields to game state object in `saveGameState()`
4. **Game Rules**: Modify card creation in `createDeck()` or pile logic in `splitDeckIntoPiles()`

**Best Practices**:
- Keep game logic in `game.js`, UI in `index.html`
- Maintain state persistence for any new features
- Test locally before deploying
- Update both `index.html` and `public/index.html` (Workers copy)

## Project Structure

```
/
├── index.html, game.js        # Main application
├── public/                    # CloudFlare Workers assets (copies)
├── worker.js, wrangler.toml   # Deployment configuration
├── SPECIFICATIONS/            # Requirements and technical docs
│   ├── PhaseOneRequirements.md # Phase 1 details and implementation
│   └── [Future phase files]   # To be added for new phases
└── README.md                  # User-facing documentation
```

## Current Status & Future Phases

**Phase One** ✅ **COMPLETED**: Basic card drawing functionality
**Future Phases**: See `SPECIFICATIONS/PhaseOneRequirements.md` for enhancement opportunities (dice, tarot cards, configurable decks)

For detailed technical implementation, deployment commands, and Phase One requirements, see `SPECIFICATIONS/PhaseOneRequirements.md`.