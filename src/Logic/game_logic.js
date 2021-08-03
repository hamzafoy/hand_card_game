import { gameDeck } from './playingCards.js'
import { shuffleTheDeck, dealTheHand } from './dealingLogic.js'

//This shuffles each of the two produced decks from `./playingCards.js` & merges them into one whole deck of 104 cards.
export let currentGameDeck = shuffleTheDeck(gameDeck);

//This variable stores the resulting two hands given to each player.
let gameHands = dealTheHand(currentGameDeck);
export let playerOneHand = gameHands.playerOneHand;
export let playerTwoHand = gameHands.playerTwoHand;