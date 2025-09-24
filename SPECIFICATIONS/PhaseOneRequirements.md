# Game Play Randomiser

✅ **PROJECT COMPLETED AND DEPLOYED**
- **Live Site**: https://gameplay.hultberg.org
- **Repository**: https://github.com/mannepanne/game-play-randomiser
- **Status**: All core requirements implemented and deployed to production

---

## Why are we building the Game Play randomiser?

I am playing a game that uses a standard deck of playing cards to introduce an element of chance. Drawing from a shuffled deck, I get a card containing a suit and rank which is then cross-referenced to a table to look up a corresponding value. This value is then used to guide the game.

## Problem statement

✅ **SOLVED**: I do not have a physical deck of cards easily available to me when and where I want to play my game. However, I can easily access online tools on my mobile phone.

**Solution Implemented**: Web-based card randomiser accessible from any device with internet connection, including mobile phones.

## Technology choices

✅ **IMPLEMENTED AS REQUESTED**: It would be great if this was a really simple web page, leveraging local browser storage for any kind of data that needs to be remembered. There is no need for any kind of user management or login functionality.

**Technology Stack Used**:
- ✅ Simple web page (single HTML file with vanilla JavaScript)
- ✅ Local browser storage (localStorage for game state persistence)
- ✅ No user management or login functionality
- ✅ Mobile-responsive design
- ✅ Deployed on CloudFlare Workers for global accessibility

See @.claude/CLAUDE.md for details on preferred technologies.

# Game play description ✅ FULLY IMPLEMENTED

## Setting up the cards at the beginning of the game

✅ **IMPLEMENTED**: A standard deck of cards has four suits (Hearts, Diamonds, Clubs, Spades), each with thirteen ranks, giving a total of fifty-two cards. In my game, the joker cards are included, of which there are two, bringing the total cards to fifty-four.

✅ **IMPLEMENTED**: For the initial set up, the deck is split by suit into four piles with one joker randomly assigned to either the Hearts or Diamonds pile, and the other joker randomly assigned to either the Clubs or Spades pile. The four piles are shuffled and placed face down next to each other in the order: Hearts, Diamonds, Spades, Clubs.

**Implementation Details**:
- Uses Fisher-Yates shuffle algorithm for proper randomization
- Real-time display of cards remaining in each pile
- Visual pile status indicators

## Using the cards during the game

✅ **IMPLEMENTED**: In each round, I draw one card from the top of each pile to obtain four card face values.

✅ **IMPLEMENTED**: These card face values should be displayed while I play my round.

✅ **IMPLEMENTED**: At the end of the round, the four cards are placed into a discard pile.

✅ **IMPLEMENTED**: In my next round, I draw another four cards and the process continues until I end my game or there are no more cards to draw in any one of the four piles.

✅ **IMPLEMENTED**: At that point, I will reset the cards to the initial set up position again. I can also choose to reset the cards to the initial set up position at any time during the game.

✅ **IMPLEMENTED**: A round can last for a period of time ranging from minutes to days so the cards drawn, discarded, and remaining in the piles should be remembered until I choose to reset the cards to the initial set up position.

**Implementation Features**:
- Visual card display with proper suit colors (red for Hearts/Diamonds, black for Spades/Clubs)
- Special golden styling for jokers
- "Draw Cards" button that draws one from each pile
- "Reset Game" button for manual reset
- Automatic game completion detection when piles are empty
- Persistent game state using localStorage (survives browser restarts)
- Mobile-responsive interface for phone usage

## Enhancement opportunities

For each new game, there could be the option to specify:

- whether the jokers are included in the deck, and if so, whether there are one, two, three, four or more jokers
- whether the deck is split into smaller decks, and if so:
-- whether the split is by suit or by number of cards
-- which deck or decks the jokers will go into

## Future possible development

I also play other games that require dice, or a deck of tarot cards. In the future we might consider adding functionality to support such games as well.

---

## Technical Implementation Overview (Phase One)

### Technology Stack Used
- **Frontend**: Vanilla HTML/CSS/JavaScript (single page application)
- **Storage**: Local browser storage (localStorage for game state persistence)
- **Styling**: Custom CSS with mobile-responsive design
- **Hosting**: CloudFlare Workers with Assets API
- **Domain**: Custom domain gameplay.hultberg.org with SSL
- **Version Control**: Git with GitHub repository

### Project Structure
```
/
├── .claude/CLAUDE.md          # Collaboration guidelines (don't edit)
├── .gitignore                 # Git ignore rules
├── SPECIFICATIONS/
│   └── PhaseOneRequirements.md # This file - Phase 1 requirements
├── public/                    # CloudFlare Workers assets
│   ├── index.html            # Main application (copy for Workers)
│   └── game.js               # Game logic (copy for Workers)
├── CLAUDE.md                  # Project guidance for developers
├── README.md                  # Project overview and usage instructions
├── index.html                 # Main application interface
├── game.js                    # Core game logic and state management
├── worker.js                  # CloudFlare Workers entry point
└── wrangler.toml             # CloudFlare Workers configuration
```

### Core Game Logic Implementation
**Initial Setup:**
- ✅ Create 54-card deck (52 standard + 2 jokers) using standard ranks and suits
- ✅ Split into 4 piles by suit with Fisher-Yates shuffle algorithm
- ✅ Random joker assignment to red (Hearts/Diamonds) and black (Spades/Clubs) piles
- ✅ Independent shuffling of each pile

**Game Play Implementation:**
- ✅ Draw top card from each of 4 piles with visual display
- ✅ Card display with proper suit colors (red/black) and symbols
- ✅ Special golden styling for jokers
- ✅ Discard pile management (cards moved after drawing)
- ✅ Game state persistence using localStorage
- ✅ Auto-detection when piles are empty

**User Interface Features:**
- ✅ Real-time pile count display for each suit
- ✅ Visual card representation with suit symbols
- ✅ "Draw Cards" button (draws one from each pile)
- ✅ "Reset Game" button for manual reset
- ✅ Game status messages and user feedback
- ✅ Mobile-responsive layout for phone usage

### Development Commands
**Local Development:**
```bash
# Test worker locally
wrangler dev --local
# View at http://localhost:8787
```

**Deployment:**
```bash
# Deploy to CloudFlare Workers
wrangler deploy
# Deploys to: https://gameplay.hultberg.org
```

**Git Operations:**
```bash
# Standard development workflow
git add .
git commit -m "Description of changes"
git push
# Repository: https://github.com/mannepanne/game-play-randomiser
```

### Performance & Architecture Notes
- **State Management**: Simple JavaScript class-based architecture
- **Storage**: localStorage with JSON serialization for game state
- **Randomization**: Proper Fisher-Yates shuffle implementation
- **Error Handling**: Graceful handling of empty piles and storage errors
- **Caching**: CloudFlare Workers provides edge caching for static assets
- **SSL**: Automatic SSL certificate provisioning via CloudFlare
