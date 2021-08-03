import { gameDeck } from './playingCards.js'
import { shuffleTheDeck, dealTheHand } from './dealingLogic.js'

//This shuffles each of the two produced decks from `./playingCards.js` & merges them into one whole deck of 104 cards.
export let currentGameDeck = shuffleTheDeck(gameDeck);

//This variable stores the resulting two hands given to each player.
let gameHands = dealTheHand(currentGameDeck);
export let playerOneHand = gameHands.playerOneHand;
export let playerTwoHand = gameHands.playerTwoHand;



class Player {
    constructor(name) {
        this.name = name;
        this._gameCards = playerOneHand;
        this._set = [];
    }

    getCardInfo() {
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