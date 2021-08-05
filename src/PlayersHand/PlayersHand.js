import React from 'react';
import './PlayersHand.css';
import { playerOneHand } from '../Logic/game_logic';
import PlayingCard from '../PlayingCard/PlayingCard';


class PlayersHand extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: playerOneHand,
      setOne: [],
      setOneValue: 0,
      discardPile: [],
      discardPileValue: 0
    }
    this.startGame = this.startGame.bind(this);
    this.draw = this.draw.bind(this);
    this.manageTurn = this.manageTurn.bind(this);
    this.discardACard = this.discardACard.bind(this);
    this.moveACard = this.moveACard.bind(this);
  }

  startGame() {
    this.props.handleGame()
    setTimeout(this.draw, 1500);
  }

  draw() {
    let currentArray = [...this.props.deck]
    let newCard = currentArray.shift();
    this.setState({ 
      cards: [...this.state.cards, newCard],
      deck: [...currentArray], 
    })
    
  }

  manageTurn() {
    let currentTurnCount = Number(this.props.turnCount);
    if(this.state.discardPile.length < currentTurnCount) {
      alert(`You must discard a card before ending your turn!`)
      return;
    }
    if(this.props.playersTurn === true) {
    this.props.managePlayersTurn()
    setTimeout(this.draw, 1600);
    } else {
      alert(`Your turn is already over!`)
    }
  }

  discardACard(e) {
    let currentArray = [...this.state.cards]
    let currentValueOfDiscards = Number(this.state.discardPileValue);
    let currentTurnCount = Number(this.props.turnCount);
    let discardPileSize = Number(this.state.discardPile.length + 1);
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
    let currentTurnCount = Number(this.props.turnCount);
    let setOnePileSize = Number(this.state.setOne.length + 1);
    if(setOnePileSize > currentTurnCount) {
      alert(`You cannot move more than one card to your set!`)
    } else {
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

    //let startButtonConditional = 

    let handOfDiscarded = this.state.discardPile.map(function(image) {
      return (<img alt="playing cards" className="discarded-card" src={image.src}/>)
    });

    let handOfMovedCards = this.state.setOne.map(function(image) {
      return (<img alt="playing cards" className="card" src={image.src}/>)
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
          <span className="card-table__identifier">Discard Table</span>
          <span className="card-table__shadow"></span>
          <div className="card-table__discard-pile">
            {handOfDiscarded}
          </div>
        </div>

        <div className="game-display">
          <section className="game-display__current-hand">
            {handOfCardsDisplay}
          </section>
          <h2 className="game-display__text">Your current hand of cards! You have played {this.props.turnCount} turn(s)! {gameInSession}</h2>
        </div>

        <div className="sets-row">
          <section className="game-explanation">
            <h2 className="game-explanation__header">How to Play</h2>
            <ol className="game-explanation__bullets">
              <li>Click 'Start Game' when you are ready to start a new game.</li>
              <li>'Drag' a card to add it to your set, 'double-click' a card to discard.</li>
              <li>You must add 1 card to your set &amp; discard 1 card per turn.</li>
              <li>To end your turn, click 'End Turn!'.</li>
              <li>Wait until your turn to repeat steps #1-4.</li>
              <li>Between you &amp; the computer, first to 51 points in their set wins!</li>
            </ol>
          </section>

          <section className="set-display">
            <h2 className="set-display__score">Your Set - Value of your set: {setOneValue}</h2>
            <section className="set-display__moved-cards">
              {handOfMovedCards}
            </section>
          </section>

        </div>

        <div className="buttons-row">
          <button className="buttons-row__button" onClick={this.startGame}>
            Start Game!
          </button>
          <button className="buttons-row__button" onClick={this.manageTurn}>
            End Turn!
          </button>
        </div>
      </>
    )
  }
}

export default PlayersHand;