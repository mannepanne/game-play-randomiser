# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Game Play Randomiser** project - a simple web application that simulates drawing cards from a deck for tabletop gaming.

**Current Status**: ✅ **COMPLETED AND DEPLOYED**
- **Live Site**: https://gameplay.hultberg.org
- **Repository**: https://github.com/mannepanne/game-play-randomiser
- **Deployment**: CloudFlare Workers with custom domain

**Key Requirements** (✅ ALL COMPLETED):
- ✅ Replace physical playing cards with a digital alternative
- ✅ Simulate standard 52-card deck + 2 jokers (54 cards total)
- ✅ Split deck into 4 piles by suit: Hearts, Diamonds, Spades, Clubs
- ✅ Jokers randomly assigned to red/black piles
- ✅ Draw one card from each pile per round (4 cards total)
- ✅ Maintain game state between rounds using local browser storage
- ✅ Simple web page implementation - no user management needed
- ✅ Mobile-responsive design
- ✅ Production deployment with custom domain

## Technology Stack (IMPLEMENTED)

✅ **Actual Implementation**:
- **Frontend**: Vanilla HTML/CSS/JavaScript (single page application)
- **Storage**: Local browser storage (localStorage for game state persistence)
- **Styling**: Custom CSS with mobile-responsive design
- **Hosting**: CloudFlare Workers with Assets API
- **Domain**: Custom domain gameplay.hultberg.org with SSL

## Project Structure

✅ **Complete Implementation**:
```
/
├── .claude/CLAUDE.md          # Collaboration guidelines (don't edit)
├── .gitignore                 # Git ignore rules
├── SPECIFICATIONS/
│   └── OnePagerRequirements.md # Project requirements (updated with completion status)
├── public/                    # CloudFlare Workers assets
│   ├── index.html            # Main application (copy for Workers)
│   └── game.js               # Game logic (copy for Workers)
├── CLAUDE.md                  # This file - project-specific guidance
├── README.md                  # Project overview and usage instructions
├── index.html                 # Main application interface
├── game.js                    # Core game logic and state management
├── worker.js                  # CloudFlare Workers entry point
└── wrangler.toml             # CloudFlare Workers configuration
```

## Core Game Logic (✅ ALL IMPLEMENTED)

**Initial Setup:**
1. ✅ Create 54-card deck (52 standard + 2 jokers)
2. ✅ Split into 4 piles by suit
3. ✅ Randomly assign jokers to red (Hearts/Diamonds) and black (Spades/Clubs) piles
4. ✅ Shuffle each pile independently

**Game Play:**
1. ✅ Draw top card from each of the 4 piles
2. ✅ Display the 4 cards to user with proper suit colors and symbols
3. ✅ Move drawn cards to discard pile
4. ✅ Repeat until any pile is empty or user resets
5. ✅ Persist game state in browser storage

**Reset Functionality:**
- ✅ Allow manual reset at any time
- ✅ Auto-detection and messaging when any pile becomes empty
- ✅ Game state restoration on page reload

**Additional Features Implemented:**
- ✅ Real-time pile count display
- ✅ Visual card representation with suit colors
- ✅ Special styling for jokers
- ✅ Mobile-responsive interface
- ✅ Error handling and user feedback

## Development Commands

**Local Development:**
```bash
# Test worker locally
wrangler dev --local

# View worker in browser at http://localhost:8787
```

**Deployment:**
```bash
# Deploy to CloudFlare Workers
wrangler deploy

# Deploy with custom domain (configured in wrangler.toml)
# Deploys to: https://gameplay.hultberg.org
```

**Git Operations:**
```bash
# Standard development workflow
git add .
git commit -m "Description of changes"
git push

# The repository is at: https://github.com/mannepanne/game-play-randomiser
```

## Future Enhancement Opportunities

From requirements document:
- Configurable number of jokers (1-4+)
- Alternative deck splitting (by card count vs suit)
- Support for dice rolling
- Support for tarot cards
