import { gameDeck } from './playingCards.js'
import { shuffleTheDeck, dealTheHand } from './dealingLogic.js'

//This shuffles each of the two produced decks from `./playingCards.js` & merges them into one whole deck of 104 cards.
let currentGameDeck = shuffleTheDeck(gameDeck);

//This variable stores the resulting two hands given to each player.
let gameHands = dealTheHand(currentGameDeck);
let playerOneHand = gameHands.playerOneHand;
let playerTwoHand = gameHands.playerTwoHand;

//Dummy hand of cards for testing as game logic continues to develop
let dummyHand = [
    { number: 'A', suit: 'club', value: 11, id: 78 },   
    { number: 'K', suit: 'diamond', value: 10, id: 51 },
    { number: '5', suit: 'heart', value: 5, id: 56 },   
    { number: 'K', suit: 'heart', value: 10, id: 64 },  
    { number: '7', suit: 'spade', value: 7, id: 32 },   
    { number: 'A', suit: 'spade', value: 11, id: 39 },  
    { number: '5', suit: 'heart', value: 5, id: 4 },    
    { number: 'K', suit: 'heart', value: 10, id: 12 },  
    { number: '8', suit: 'club', value: 8, id: 72 },    
    { number: 'Q', suit: 'diamond', value: 10, id: 50 },
    { number: '3', suit: 'diamond', value: 3, id: 41 }, 
    { number: 'J', suit: 'heart', value: 10, id: 10 },  
    { number: '4', suit: 'heart', value: 4, id: 55 },   
    { number: '2', suit: 'heart', value: 2, id: 53 }    
  ]

class Player {
    constructor(name) {
        this.name = name;
        this._gameCards = dummyHand;
        this._set = [];
    }

    getCardInfo() {
        for(let i = this._gameCards.length-1; i >= 0; i--) {
            console.log(`You have the ${this._gameCards[i].number} of ${this._gameCards[i].suit}`)
        }
    }

    drawCard() {
        this._gameCards.push(currentGameDeck.shift())
    }

    discardCard(id) {
        let newDeck = this._gameCards.filter(card => card.id !== id);
        this._gameCards = newDeck;
    }

    addToSet(id) {
        let cardToBeAdded = this._gameCards.find(card => card.id === id);
        let newDeck = this._gameCards.filter(card => card.id !== id);
        this._set.push(cardToBeAdded);
        this._gameCards = newDeck;
    }

    removeFromSet(id) {
        let cardToBeRemoved = this._set.find(card => card.id === id);
        let newDeck = this._set.filter(card => card.id !== id);
        this._gameCards.push(cardToBeRemoved);
        this._set = newDeck;
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
hamzaFoy.getCardInfo();
//console.log(hamzaFoy)