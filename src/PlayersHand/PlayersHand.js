import React from 'react';
import './PlayersHand.css';
import { currentGameDeck, playerOneHand } from '../Logic/game_logic';
import PlayingCard from '../PlayingCard/PlayingCard';


class PlayersHand extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: playerOneHand,
      setOne: [],
      setOneValue: 0,
      discardPile: [],
      discardPileValue: 0,
      deck: currentGameDeck
    }
    this.startGame = this.startGame.bind(this);
    this.draw = this.draw.bind(this);
    this.manageTurn = this.manageTurn.bind(this);
    this.discardACard = this.discardACard.bind(this);
    this.moveACard = this.moveACard.bind(this);
  }

  startGame() {
    this.props.handleGame()
    setTimeout(this.draw, 3000);
  }

  draw() {
    let currentArray = [...this.state.deck]
    let newCard = currentArray.shift();
    this.setState({ 
      cards: [...this.state.cards, newCard],
      deck: [...currentArray], 
    })
    
  }

  manageTurn() {
    let currentTurnCount = Number(this.props.turnCount);
    if(this.props.playersTurn == true) {

      if(this.state.discardPile.length < currentTurnCount) {
        alert(`You must discard a card before ending your turn!`)
      } else {
        this.props.managePlayersTurn()
      }

    } else {
      alert(`Your turn is already over!`)
    }
  }

  discardACard(e) {
    let currentArray = [...this.state.cards]
    let currentValueOfDiscards = Number(this.state.discardPileValue);
    let currentTurnCount = Number(this.props.turnCount);
    let discardPileSize = Number(this.state.discardPile.length + 1)
    if(discardPileSize > currentTurnCount) {
      alert(`You cannot discard more than one card!`)
    } else {
      let discardedCard = e.target;
      let discardedCardAlt = e.nativeEvent.srcElement.alt;
      let dissectedCardData = discardedCardAlt.split(" ")
      let numToUpdateDiscardValue = Number(dissectedCardData[2])
      let newValueOfDiscards = (currentValueOfDiscards + numToUpdateDiscardValue);
      currentArray.splice(currentArray.findIndex(card => card.id == discardedCard.id), 1)
      this.setState(
        { 
        cards: [...currentArray],
        discardPile: [...this.state.discardPile, discardedCard],
        discardPileValue: newValueOfDiscards
      }
      )
    }
  }

  moveACard(e) {
    let currentArray = [...this.state.cards];
    let currentValueOfSetOne = Number(this.state.setOneValue);
    let movedCard = e.target;
    let movedCardAlt = e.nativeEvent.srcElement.alt;
    let dissectedCardData = movedCardAlt.split(" ")
    let numToUpdateSetOneValue = Number(dissectedCardData[2])
    let newValueOfSetOne = (currentValueOfSetOne + numToUpdateSetOneValue);
    currentArray.splice(currentArray.findIndex(card => card.id == movedCard.id), 1)
    this.setState(
      {
        cards: [...currentArray],
        setOne: [...this.state.setOne, movedCard],
        setOneValue: newValueOfSetOne
      }
    )
  }

  
  render() {
    let handOfCards = this.state.cards.map((card, i) =>
    <PlayingCard
    card={card}
    key={`card_${card.suit}_${card.id}`}
    discardACard={this.discardACard}
    moveACard={this.moveACard}
    />
    );

    let handOfDiscarded = this.state.discardPile.map(function(image) {
      return (<img className="card" src={image.src}/>)
    });

    let handOfMovedCards = this.state.setOne.map(function(image) {
      return (<img className="card" src={image.src}/>)
    });

    let handOfCardsDisplay = (this.props.game) ? handOfCards : `Click 'Start Game' to begin!`

    let gameInSession = (this.props.playersTurn) ? `Play your turn!` : `It is not your turn.`; 

    let setOneValue = this.state.setOneValue;

    if (setOneValue >= 51) {
      alert('You win! Reload to restart the game.')
   }

    return(
      <>
        <div className="card-table">
          <div className="handful-of-discarded-cards">
            {handOfDiscarded}
          </div>
        </div>

        <div className="handful-of-cards">
          {handOfCardsDisplay}
        </div>

        <h2>Your current hand of cards! You have played {this.props.turnCount} turn(s)!</h2>

        <div className="sets-row">
          Value of your set: {setOneValue}

          <section className="first-set">
            {handOfMovedCards}
          </section>

        </div>

        <div className="buttons-row">

          <button onClick={this.startGame}>
            Start Game!
          </button>

          <section className="turn-display">
            {gameInSession}
          </section>

          <button onClick={this.manageTurn}>
            End Turn!
          </button>

        </div>
      </>
    )
  }
}

export default PlayersHand;