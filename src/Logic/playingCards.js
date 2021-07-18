//This `class` structure is being kept in case of needing it with React.js
/* export class Card {
    constructor(number, suit) {
        this.number = number;
        this.suit = suit;
    }
} */

//Factory Function set to produce card `object`s
const cardMaker = (number, suit, value, desc, id) => {
    return {
        number,
        suit,
        value,
        desc,
        id
    }
}

//This function will produce two full decks of 52*2=104 cards, 13*2=26 of each suit.
export const createDeck = () => {
    let deck = [];
    let cardSelection = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
    for (let i = 0; i < 13; i++) {
        deck.push(cardMaker(cardSelection[i], 'heart', cardValues[i], `${cardSelection[i]}_h`))
    }
    for (let i = 0; i < 13; i++) {
        deck.push(cardMaker(cardSelection[i], 'club', cardValues[i], `${cardSelection[i]}_c`))
    }
    for (let i = 0; i < 13; i++) {
        deck.push(cardMaker(cardSelection[i], 'spade', cardValues[i], `${cardSelection[i]}_s`))
    }
    for (let i = 0; i < 13; i++) {
        deck.push(cardMaker(cardSelection[i], 'diamond', cardValues[i], `${cardSelection[i]}_d`))
    }
    for (let i = 0; i < 13; i++) {
        deck.push(cardMaker(cardSelection[i], 'heart', cardValues[i], `${cardSelection[i]}_h`))
    }
    for (let i = 0; i < 13; i++) {
        deck.push(cardMaker(cardSelection[i], 'club', cardValues[i], `${cardSelection[i]}_c`))
    }
    for (let i = 0; i < 13; i++) {
        deck.push(cardMaker(cardSelection[i], 'spade', cardValues[i], `${cardSelection[i]}_s`))
    }
    for (let i = 0; i < 13; i++) {
        deck.push(cardMaker(cardSelection[i], 'diamond', cardValues[i], `${cardSelection[i]}_d`))
    }
    for (let i = 0; i < 104; i++) {
        deck[i].id = i+1;
    }
    //console.log(deck.length);
    return deck;
}

console.log(createDeck());

//Hand is traditionally played with two full deck of cards which `createDeck` prepares.
export var gameDeck = createDeck();