//This `class` structure is being kept in case of needing it with React.js
/* export class Card {
    constructor(number, suit) {
        this.number = number;
        this.suit = suit;
    }
} */

//Factory Function set to produce card `object`s
const cardMaker = (number, suit) => {
    return {
        number,
        suit
    }
}

//This function will produce a full deck of 52 cards, 13 of each suit.
export const createDeck = () => {
    let deck = [];
    let cardSelection = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    for (let i = 0; i < 13; i++) {
        deck.push(cardMaker(cardSelection[i], 'heart'))
    }
    for (let i = 0; i < 13; i++) {
        deck.push(cardMaker(cardSelection[i], 'club'))
    }
    for (let i = 0; i < 13; i++) {
        deck.push(cardMaker(cardSelection[i], 'spade'))
    }
    for (let i = 0; i < 13; i++) {
        deck.push(cardMaker(cardSelection[i], 'diamond'))
    }
    console.log(deck.length);
    return deck;
}