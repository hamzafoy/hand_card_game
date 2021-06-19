import { createDeck } from './playingCards.js'
import { shuffleTheDeck, dealTheHand } from './dealingLogic.js'

//Hand is traditionally played with two full deck of cards which `createDeck` prepares.
let gameDeck = createDeck();

//This shuffles each of the two produced decks from `./playingCards.js` & merges them into one whole deck of 104 cards.
let currentGameDeck = shuffleTheDeck(gameDeck);

//This variable stores the resulting two hands given to each player.
let gameHands = dealTheHand(currentGameDeck);
let playerOneHand = gameHands.playerOneHand;
let playerTwoHand = gameHands.playerTwoHand;

class Player {
    constructor(name) {
        this.name = name;
        this._gameCards = playerOneHand;
    }

    drawCard() {
        this._gameCards.push(currentGameDeck.shift())
    }

    discardCard(id) {
        let newDeck = this._gameCards.filter(card => card.id !== id);
        this._gameCards = newDeck;
    }
}

/*---
    Console Log Dashboard to help with tracking progress with game logic.
    As this project progresses, the game logic may be further modularized and put into separate folders
    per SEPARATION OF CONCERNS
---*/

//console.log(playerTwoHand)
//console.log(playerOneHand)
//console.log(currentGameDeck);

let hamzaFoy = new Player('Hamza Foy');
console.log(hamzaFoy)