import React from 'react';
import './ComputersHand.css';
import { currentGameDeck, playerTwoHand } from '../Logic/game_logic';
import PlayingCard from '../PlayingCard/PlayingCard';



class ComputersHand extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        cards: playerTwoHand,
        setOne: [],
        setOneValue: 0,
        discardPile: [],
        discardPileValue: 0,
        deck: currentGameDeck,
        game: false,
        computerTurn: false,
        turnCount: 0
      }
      this.startGame = this.startGame.bind(this);
      this.draw = this.draw.bind(this);
      this.manageTurn = this.manageTurn.bind(this);
      this.discardACard = this.discardACard.bind(this);
      this.moveACard = this.moveACard.bind(this);
    }
  
    startGame() {
      let currentTurnCount = Number(this.state.turnCount);
      console.log(currentTurnCount)
      console.log(this.state.turn)
      currentTurnCount++
      console.log(currentTurnCount)
      this.setState(prevState => ({
        game: !prevState.game,
        turn: !prevState.turn,
        turnCount: currentTurnCount
      }))
      setTimeout(this.draw, 5000);
    }
  
    draw() {
      let currentArray = [...this.state.deck]
      let newCard = currentArray.shift();
      console.log(this.state.turn)
      this.setState({ 
        cards: [...this.state.cards, newCard],
        deck: [...currentArray], 
      })
      
    }
  
    manageTurn() {
      let currentTurnCount = Number(this.state.turnCount);
      console.log(currentTurnCount)
      console.log(this.state.turn)
      if(this.state.turn == true) {
  
        if(this.state.discardPile.length < currentTurnCount) {
          alert(`You must discard a card before ending your turn!`)
        } else {
          currentTurnCount++
          this.setState(prevState => (
            {
              turn: !prevState.turn,
              turnCount: currentTurnCount
            }
          ))
        }
  
      } else {
        alert(`Your turn is already over!`)
      }
    }
  
    discardACard(e) {
      let currentArray = [...this.state.cards]
      let currentValueOfDiscards = Number(this.state.discardPileValue);
      let currentTurnCount = Number(this.state.turnCount);
      let discardPileSize = Number(this.state.discardPile.length + 1)
      console.log(currentTurnCount)
      console.log(discardPileSize)
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
  
      let handOfCardsDisplay = (this.state.game) ? handOfCards : `Click 'Start Game' to begin!`
  
      let gameInSession = (this.state.turn) ? `Play your turn!` : `It is not your turn.`; 
  
      let setOneValue = this.state.setOneValue;
  
      if (setOneValue >= 51) {
        alert('You win!')
        this.state.game = false;
      }
  
      return(
        <div className="computer">
          <div className="card-table">
            <div className="handful-of-discarded-cards">
              {handOfDiscarded}
            </div>
          </div>
  
          <div className="handful-of-cards">
            {handOfCardsDisplay}
          </div>
  
          <h2>Your current hand of cards!</h2>
  
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
        </div>
      )
    }
  }
  
  export default ComputersHand;