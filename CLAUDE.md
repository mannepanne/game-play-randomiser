# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Game Play Randomiser** project - a simple web application that simulates drawing cards from a deck for tabletop gaming.

**Current Status**: Project initialization phase - no code implemented yet

**Key Requirements** (from SPECIFICATIONS/OnePagerRequirements.md):
- Replace physical playing cards with a digital alternative
- Simulate standard 52-card deck + 2 jokers (54 cards total)
- Split deck into 4 piles by suit: Hearts, Diamonds, Spades, Clubs
- Jokers randomly assigned to red/black piles
- Draw one card from each pile per round (4 cards total)
- Maintain game state between rounds using local browser storage
- Simple web page implementation - no user management needed

## Technology Stack

Based on project requirements and collaboration preferences:
- **Frontend**: Simple HTML/CSS/JavaScript or Next.js (React) with TypeScript
- **Storage**: Local browser storage (localStorage/sessionStorage)
- **Styling**: TailwindCSS with shadcn/ui components
- **Hosting**: CloudFlare Workers(preferred for web apps)

## Project Structure

Currently only documentation exists:
```
/
├── .claude/CLAUDE.md          # Collaboration guidelines (don't edit)
├── SPECIFICATIONS/
│   └── OnePagerRequirements.md # Project requirements
└── CLAUDE.md                  # This file - project-specific guidance
```

## Core Game Logic Requirements

**Initial Setup:**
1. Create 54-card deck (52 standard + 2 jokers)
2. Split into 4 piles by suit
3. Randomly assign jokers to red (Hearts/Diamonds) and black (Spades/Clubs) piles
4. Shuffle each pile independently

**Game Play:**
1. Draw top card from each of the 4 piles
2. Display the 4 cards to user
3. Move drawn cards to discard pile
4. Repeat until any pile is empty or user resets
5. Persist game state in browser storage

**Reset Functionality:**
- Allow manual reset at any time
- Auto-reset when any pile becomes empty

## Development Commands

*Note: No build system implemented yet. Commands will be added as project develops.*

## Future Enhancement Opportunities

From requirements document:
- Configurable number of jokers (1-4+)
- Alternative deck splitting (by card count vs suit)
- Support for dice rolling
- Support for tarot cards
