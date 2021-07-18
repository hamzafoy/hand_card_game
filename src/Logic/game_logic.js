import { gameDeck } from './playingCards.js'
import { shuffleTheDeck, dealTheHand } from './dealingLogic.js'

//This shuffles each of the two produced decks from `./playingCards.js` & merges them into one whole deck of 104 cards.
let currentGameDeck = shuffleTheDeck(gameDeck);

//This variable stores the resulting two hands given to each player.
let gameHands = dealTheHand(currentGameDeck);
//let playerOneHand = gameHands.playerOneHand;
//let playerTwoHand = gameHands.playerTwoHand;

//Dummy hand of cards for testing as game logic continues to develop
let dummyHand = [
    { number: 'A', suit: 'club', value: 11, id: 78, desc:"A_c"},   
    { number: 'K', suit: 'diamond', value: 10, id: 51, desc:"K_d"},
    { number: '5', suit: 'heart', value: 5, id: 56, desc:"5_h"},   
    { number: 'K', suit: 'heart', value: 10, id: 64, desc:"K_h"},  
    { number: '7', suit: 'spade', value: 7, id: 32, desc:"7_s"},   
    { number: 'A', suit: 'spade', value: 11, id: 39, desc:"A_s"},  
    { number: '5', suit: 'heart', value: 5, id: 4, desc:"5_h"},    
    { number: 'K', suit: 'heart', value: 10, id: 12, desc:"K_h"},  
    { number: '8', suit: 'club', value: 8, id: 72, desc:"8_c"},    
    { number: 'Q', suit: 'diamond', value: 10, id: 50, desc:"Q_d"},
    { number: '3', suit: 'diamond', value: 3, id: 41, desc:"3_d"}, 
    { number: 'J', suit: 'heart', value: 10, id: 10, desc:"3_h"},  
    { number: '4', suit: 'heart', value: 4, id: 55, desc:"4_h"},   
    { number: '2', suit: 'heart', value: 2, id: 53, desc:"2_h"}    
  ]

class Player {
    constructor(name) {
        this.name = name;
        this._gameCards = dummyHand;
        this._set = [];
    }

    getCardInfo() {
        /* let cardList = [];
        for(let i = this._gameCards.length-1; i >= 0; i--) {
            console.log(`You have the ${this._gameCards[i].number} of ${this._gameCards[i].suit}`)
            cardList.push(`You have the ${this._gameCards[i].number} of ${this._gameCards[i].suit}`)
            
        }
        return cardList; */
        return this._gameCards;
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

export let hamzaFoy = new Player('Hamza Foy');
//hamzaFoy.getCardInfo();
//console.log(hamzaFoy)