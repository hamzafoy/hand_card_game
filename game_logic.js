import { createDeck } from './playingCards.js'
import { shuffleTheDeck, dealTheHand } from './dealingLogic.js'

//This will draw a card from the top of the shuffled game deck and place it in the user's hand.
const drawACard = deck => {
    playerOneHand.push(currentGameDeck.shift())
}

//Hand is traditionally played with two full deck of cards.
let gameDeck = createDeck();
let gameDeckTwo = createDeck();

//This shuffles each of the two produced decks from `./playingCards.js` & merges them into one whole deck of 104 cards.
let newlyShuffledDeck = shuffleTheDeck(gameDeck);
let newlyShuffledSecondDeck = shuffleTheDeck(gameDeckTwo);
let currentGameDeck = newlyShuffledSecondDeck.concat(newlyShuffledDeck);

//This variable stores the resulting two hands given to each player.
let gameHands = dealTheHand(currentGameDeck);
let playerOneHand = gameHands.playerOneHand;
let playerTwoHand = gameHands.playerTwoHand;

console.log(playerTwoHand)
console.log(playerOneHand)