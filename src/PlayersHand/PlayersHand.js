import React from 'react';
import './PlayersHand.css';
import { playerOneHand } from '../Logic/game_logic';
import PlayingCard from '../PlayingCard/PlayingCard';


class PlayersHand extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //cards: The player's current hand
      cards: playerOneHand,
      //setOne, setOneValue: Where the player stores his/her cards needed to meet the win requirement.
      setOne: [],
      setOneValue: 0,
      //discardPile, discardPileValue: The cards that the player has to discard.
      discardPile: [],
      discardPileValue: 0,
      landingModal: true,
      discardErrorModal: false,
      dragToSetErrorModal: false,
      endTurnErrorModal: false
    }
    this.startGame = this.startGame.bind(this);
    this.draw = this.draw.bind(this);
    this.manageTurn = this.manageTurn.bind(this);
    this.discardACard = this.discardACard.bind(this);
    this.moveACard = this.moveACard.bind(this);
    this.vanishStartModal = this.vanishStartModal.bind(this);
    this.vanishDiscardModal = this.vanishDiscardModal.bind(this);
    this.vanishSetModal = this.vanishSetModal.bind(this);
    this.vanishEndTurnModal = this.vanishEndTurnModal.bind(this);
  }

  /*--
  This method passes data back to the App/Parent, through the callback `.handleGame()`
  which starts the turn counter and switches the boolean btwn player & computer turns.
  --*/
  startGame() {
    this.props.handleGame()
    setTimeout(this.draw, 1500);
  }

  /*--
  This method draws a card from the deck held in the App/Parent component's state and
  adds it to the player's current hand.
  --*/
  draw() {
    let currentArray = [...this.props.deck]
    let newCard = currentArray.shift();
    this.setState({ 
      cards: [...this.state.cards, newCard]
    })
  }

  /*--
  This method, using conditional logic, ensures that the player does not end his/her turn
  without having discarded a card. If the player has at least discarded a card, then another
  callback function is executed which switches the boolean values to indicate to the program
  that the player's turn is over and the computer's turn will begin.
  --*/
  manageTurn() {
    let currentTurnCount = Number(this.props.turnCount);
    if(this.state.discardPile.length < currentTurnCount) {
      /* alert(`You must discard a card before ending your turn!`) */
      this.setState(prevState => ({
        endTurnErrorModal: !prevState.endTurnErrorModal
      }))
      return;
    }
    if(this.props.playersTurn === true) {
    this.props.managePlayersTurn()
    setTimeout(this.draw, 1600);
    } else {
      alert(`Your turn is already over!`)
    }
  }

  /*--
  This method will discard a card that is double-clicked by the player. This method also, with
  conditional statements, helps regulate the amount of cards a player can discard per turn.
  --*/
  discardACard(e) {
    let currentArray = [...this.state.cards]
    let currentValueOfDiscards = Number(this.state.discardPileValue);
    let currentTurnCount = Number(this.props.turnCount);
    let discardPileSize = Number(this.state.discardPile.length + 1);
    if(discardPileSize > currentTurnCount) {
      /* alert(`You cannot discard more than one card!`) */
      this.setState(prevState => ({
        discardErrorModal: !prevState.discardErrorModal
      }))
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

  /*--
  This method will move a card to the player's set, a necessity to meet the winning condition,
  by dragging the card with the mouse. The application will read the value of the card and add it
  to the setOneValue. The use of conditional statements regulates the player's ability to add more
  than one card to his/her set.
  --*/
  moveACard(e) {
    let currentArray = [...this.state.cards];
    let currentValueOfSetOne = Number(this.state.setOneValue);
    let currentTurnCount = Number(this.props.turnCount);
    let setOnePileSize = Number(this.state.setOne.length + 1);
    if(setOnePileSize > currentTurnCount) {
      /* alert(`You cannot move more than one card to your set!`) */
      this.setState(prevState => ({
        dragToSetErrorModal: !prevState.dragToSetErrorModal
      }))
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

  vanishStartModal() {
    this.setState(prevState => ({
      landingModal: !prevState.landingModal
    }))
  }

  vanishDiscardModal() {
    this.setState(prevState => ({
      discardErrorModal: !prevState.discardErrorModal
    }))
  }

  vanishSetModal() {
    this.setState(prevState => ({
      dragToSetErrorModal: !prevState.dragToSetErrorModal
    }))
  }

  vanishEndTurnModal() {
    this.setState(prevState => ({
      endTurnErrorModal: !prevState.endTurnErrorModal
    }))
  }


  
  render() {
    /* Card Renderings */
    let handOfCards = this.state.cards.map((card, i) =>
    <PlayingCard
    card={card}
    key={`card_${card.suit}_${card.id}`}
    discardACard={this.discardACard}
    moveACard={this.moveACard}
    />
    );
    let handOfDiscarded = this.state.discardPile.map(function(image) {
      return (<img alt="playing cards" className="discarded-card" src={image.src}/>)
    });
    let handOfMovedCards = this.state.setOne.map(function(image) {
      return (<img alt="playing cards" className="moved-card" src={image.src}/>)
    });

    /* Button & Modal Renderings */
    let buttons = (
      <>
        <button className="buttons-row__button" onClick={this.startGame}>
          Start Game!
        </button>
      </>
    )
    let modals = {
      endTurnModal: (
        <div className="error-modal" onClick={this.vanishEndTurnModal}>
          <h1 className="error-modal__heading">You must discard a card before ending your turn!</h1>
          <caption className="error-modal__caption">Click anywhere in the modal to continue to the game. . .</caption>
        </div>
      ),
      discardModal: (
        <div className="error-modal" onClick={this.vanishDiscardModal}>
          <h1 className="error-modal__heading">You cannot discard more than one card!</h1>
          <caption className="error-modal__caption">Click anywhere in the modal to continue to the game. . .</caption>
        </div>
      ),
      setModal: (
        <div className="error-modal" onClick={this.vanishSetModal}>
          <h1 className="error-modal__heading">You cannot move more than one card to your set!</h1>
          <caption className="error-modal__caption">Click anywhere in the modal to continue to the game. . .</caption>
        </div>
      ),
      startModal: (
        <div className="landing-page-modal" onClick={this.vanishStartModal}>
            <h1 className="landing-page-modal__heading">Welcome to the Hand Card Game</h1>
            <p className="landing-page-modal__text">
              This card game is a very simplified version of Hand, a Jordanian variant similar to
              Rummy. The objective of the game, played between you &amp; the computer, is to reach
              51 points in your set first. You can only add 1 card to your set &amp; discard 1 card
              to the discard pile per turn.
              <br/>
              <br/>
              Card values are as follows: 2-10 are worth 2-10 points respectively. J, Q, K are worth
              10 points &amp; A is worth 11 points.
            </p>
            <caption className="landing-page-modal__caption">Click anywhere in the modal to continue to the game. . .</caption>
          </div>
      )
    }

    

    /* Ternary Operators */
    let endTurnModalConditional = (this.state.endTurnErrorModal) ? modals.endTurnModal : <></>
    let discardModalConditional = (this.state.discardErrorModal) ? modals.discardModal : <></>
    let setModalConditional = (this.state.dragToSetErrorModal) ? modals.setModal : <></>
    let startModalConditional = (this.state.landingModal) ? modals.startModal : <></>
    let startButtonConditional = (this.props.game) ? <></> : buttons;
    let handOfCardsDisplay = (this.props.game) ? handOfCards : `Click 'Start Game' to begin!`;
    let gameInSession = (this.props.playersTurn) ? `Play your turn!` : `It is not your turn.`;
    

  
    /* Win Condition for Player */
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
          {startButtonConditional}
          <button className="buttons-row__button" onClick={this.manageTurn}>
          End Turn!
        </button>
        </div>

        {startModalConditional}
        {discardModalConditional}
        {setModalConditional}
        {endTurnModalConditional}
      </>
    )
  }
}

export default PlayersHand;