//CREDIT to Javascript.info for introducing the Fisher-Yates algorithm. More can be learned about this algorithm at bost.ocks.org/mike/shuffle
//This function shuffles each deck out of numerical order & into a random deck.
export const shuffleTheDeck = deck => {
    for(let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }
    return deck
}

//This function takes cards from the deck and deals them into each player's hand which is returned as an object for destructuring.
export const dealTheHand = deck => {
    let playerOneHand = [];
    let playerTwoHand = [];
    for (let i = 0; i < 14; i++) {
        playerOneHand.push(deck.splice(i, 1)[0])
    }
    for (let i = 0; i < 14; i++) {
        playerTwoHand.push(deck.splice(i, 1)[0])
    }
    return {playerOneHand, playerTwoHand}
}