import { createDeck } from './playingCards.js'

let gameDeck = createDeck();

//CREDIT to Javascript.info for introducing the Fisher-Yates algorithm. More can be learned about this algorithm at bost.ocks.org/mike/shuffle
const shuffleTheDeck = deck => {
    for(let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }
    return deck
}

const dealTheHand = deck => {
    let playerOneHand = [];
    let playerTwoHand = [];
    for (let i = 0; i < 15; i++) {
        playerOneHand.push(deck.splice(i, 1)[0])
    }
    for (let i = 0; i < 15; i++) {
        playerTwoHand.push(deck.splice(i, 1)[0])
    }
    return {playerOneHand, playerTwoHand}
}

let newlyShuffledDeck = shuffleTheDeck(gameDeck);

let gameHands = dealTheHand(newlyShuffledDeck);
let playerOneHand = gameHands.playerOneHand;
let playerTwoHand = gameHands.playerTwoHand;
console.log(playerOneHand.length);
console.log(playerOneHand);
console.log(playerTwoHand.length);
console.log(playerTwoHand)
console.log(gameDeck.length);
console.log(gameDeck);