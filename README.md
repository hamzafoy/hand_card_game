## Table of Contents
1. [What is this app?](#id-section1)
2. [Checklist towards Completion](#id-section2)
3. [How to run the app](#id-section3)

<hr>

<div id='id-section1'/>

### What is this app?

*Hand* is a variant of the card game *Rummy* that my father-in-law taught me. In ode to his Palestinian & Jordanian roots, I decided to develop this app
to demonstrate my ability both with JavaScript logic & with working with the React library.

**My intention** with this application is to serve a multiplayer version of Hand that will hopefully allow up to 4 players to play at the same time.

<hr>

<div id='id-section2'/>

### Scratchpad regarding game logic

In *Hand*, each player is given **14 cards** with one player (this alternates) given an extra card.
The player who received the extra card **must discard a card only to start the game**.
After the game starts, each turn **must consist** of. . .

1. Drawing one card
2. Organizing their hand into sets
3. Playing a full hand* or laying down cards equivalent to **51** points
*a hand consists of all sets in addition to the card that they must discard to end their turn.
4. Lastly, discarding one card

#### A set can be composed as follows. . .
- 3 or more cards, of the same suit, in order*
*Ex: A, 2, 3 - 3, 4, 5, 6 - 10, J, Q, K, A
- 3 or more cards, of different suits, of the same number or symbol

#### A wildcard is. . .
The `A` of a pre-determined suit in the beginning of the game. This wildcard can be used in place of any card you may not have*
*Ex: You have a 6 [&spades;] & a 8 [&spades;] & a wildcard. That wildcard can be used as a 7 [&spades;] to complete a set.