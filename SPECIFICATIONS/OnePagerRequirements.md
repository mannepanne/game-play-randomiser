# Game Play Randomiser

## Why are we building the Game Play randomiser?

I am playing a game that uses a standard deck of playing cards to introduce an element of chance. Drawing from a shuffled deck, I get a card containing a suit and rank which is then cross-referenced to a table to look up a corresponding value. This value is then used to guide the game.

## Problem statement

I do not have a physical deck of cards easily available to me when and where I want to play my game. However, I can easily access online tools on my mobile phone.

## Technology choices

It would be great if this was a really simple web page, leveraging local browser storage for any kind of data that needs to be remembered. There is no need for any kind of user management or login functionality. If we in the future want to make this a more advanced web app we can consider more advanced options then.

See @.claude/CLAUDE.md for details on preferred technologies.

# Game play description

## Setting up the cards at the beginning of the game

A standard deck of cards has four suits (Hearts, Diamonds, Clubs, Spades), each with thirteen ranks, giving a total of fifty-two cards. In my game, the joker cards are included, of which there are two, bringing the total cards to fifty-four.

For the initial set up, the deck is split by suit into four piles with one joker randomly assigned to either the Hearts or Diamonds pile, and the other joker randomly assigned to either the Clubs or Spades pile. The four piles are shuffled and placed face down next to each other in the order: Hearts, Diamonds, Spades, Clubs.

## Using the cards during the game

In each round, I draw one card from the top of each pile to obtain four card face values.

These card face values should be displayed while I play my round.

At the end of the round, the four cards are placed into a discard pile.

In my next round, I draw another four cards and the process continues until I end my game or there are no more cards to draw in any one of the four piles.

At that point, I will reset the cards to the initial set up position again. I can also choose to reset the cards to the initial set up position at any time during the game.

A round can last for a period of time ranging from minutes to days so the cards drawn, discarded, and remaining in the piles should be remembered until I choose to reset the cards to the initial set up position.

## Enhancement opportunities

For each new game, there could be the option to specify:

- whether the jokers are included in the deck, and if so, whether there are one, two, three, four or more jokers
- whether the deck is split into smaller decks, and if so:
-- whether the split is by suit or by number of cards
-- which deck or decks the jokers will go into

## Future possible development

I also play other games that require dice, or a deck of tarot cards. In the future we might consider adding functionality to support such games as well.
