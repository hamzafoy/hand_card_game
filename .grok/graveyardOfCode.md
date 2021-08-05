Belongs to `PlayersHand.js`

<!--
class PlayersHand extends React.Component {

  render() {
    let cards = hamzaFoy.getCardInfo();
    let currentCards = cards.map(card =>
    <img src={playingCards.switchStatementForCards(card)} key={card.id} alt={card.suit + card.number} height="125px" width="75px"/>
    );

    return(
      <>
        <div className="handful-of-cards">
          {currentCards}
        </div>
        <h2>Your current hand of cards!</h2>
        <button className="button">
          Draw Card!
        </button>
      </>
    )
  }
}
-->


Belongs to `PlayingCard.js`

<!-- let cards = hamzaFoy.getCardInfo();
      let currentCards = cards.map(card =>
      <img src={playingCards.switchStatementForCards(card)} key={card.id} alt={card.suit + card.number} height="125px" width="75px"/>
      );



      class PlayingCard extends React.Component {
    render() {
        let cards = hamzaFoy.getCardInfo();
        let currentCards = cards.map(card =>
            <img src={playingCards.switchStatementForCards(card)} key={card.id} alt={card.suit + card.number} className="card"/>
        ); 
        return(
        <>
            <div className="handful-of-cards">
            {currentCards}
            </div>
        </>
      )
    }
  } -->


  Belongs to `game_logic.js`

<!-- //Dummy hand of cards for testing as game logic continues to develop
/* let dummyHand = [
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
  ] */ -->

  
  Belongs to `PlayersHand.js`

  <!-- 
    /*
readCard(e) {
    let currentArray = [...this.state.cards]
    console.log(currentArray);
    let discardedCard = e.target;
    console.log(discardedCard.id)
    let readyToToss = currentArray.filter(card => {
      return card.id == discardedCard.id
    })
    console.log(readyToToss)
  }
  */

  /* discard() {
    let currentArray = [...this.state.cards]
    let discardedCard = currentArray.pop();
    let newArray = currentArray.filter(card => {
      return card !== discardedCard
    })
    this.setState({ cards: [...newArray] })
  } */
  -->

  
  Belongs to `game_logic.js`

  <!--
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
  -->

  Belongs to `App.js`

<!-- managePlayersTurn() {
  this.setState(prevState => ({
    playersTurn: !prevState.playersTurn,
    computersTurn: !prevState.computersTurn
  }))
  if(this.state.playersTurn == true) {
    /* let currentTurnCount = Number(this.state.turnCount);
    currentTurnCount++
    this.setState({
      turnCount: currentTurnCount
    }) */
    setTimeout(this.manageComputersTurn, 1500)
  }
} -->