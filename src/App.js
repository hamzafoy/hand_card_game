import React from 'react';
import './App.css';
import PlayersHand from './PlayersHand/PlayersHand'
import { currentGameDeck, playerTwoHand } from './Logic/game_logic';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playersTurn: false,
      computersTurn: false,
      game: false,
      turnCount: 0,
      playerActionCount: 0,
      cards: playerTwoHand,
      setTwo: [],
      setTwoValue: 0,
      discardPile: [],
      deck: currentGameDeck
    }

    this.handleGame = this.handleGame.bind(this);
    this.managePlayersTurn = this.managePlayersTurn.bind(this);
    this.manageComputersTurn = this.manageComputersTurn.bind(this);
  }

  handleGame() {
    let currentTurnCount = Number(this.state.turnCount);
    currentTurnCount++
    this.setState(prevState => ({
      game: !prevState.game,
      playersTurn: !prevState.playersTurn,
      turnCount: currentTurnCount
    }))
  }

  managePlayersTurn() {
    if(this.state.playersTurn === true) {
      this.setState(prevState => ({
        playersTurn: !prevState.playersTurn,
        computersTurn: !prevState.computersTurn
      }))
      setTimeout(this.manageComputersTurn, 1500)
    }
  }

  manageComputersTurn() {
    let currentValueOfSetTwo = Number(this.state.setTwoValue);
    let deckArray = [...this.state.deck];
    let newCard = deckArray.shift();
    let newHand = [...this.state.cards];
    let cardToSet = newHand.pop();
    let cardToSetValue = cardToSet.value;
    let cardToDiscard = newHand.shift();
    let newValueOfSetTwo = (currentValueOfSetTwo + cardToSetValue);
    let currentTurnCount = Number(this.state.turnCount);
    currentTurnCount++
    this.setState(prevState => ({
      cards: [...newHand, newCard],
      deck: [...deckArray],
      setTwo: [...this.state.setTwo, cardToSet],
      setTwoValue: newValueOfSetTwo,
      discardPile: [...this.state.discardPile, cardToDiscard],
      playersTurn: !prevState.playersTurn,
      computersTurn: !prevState.computersTurn,
      turnCount: currentTurnCount
    }))
    
  }


  render() {   

    let setOneValue = this.state.setOneValue;

    if (setOneValue >= 51) {
      alert('The computer wins! Reload to restart the game.')
      
    }

    return (
      <>
        <PlayersHand
        game={this.state.game}
        playersTurn={this.state.playersTurn}
        computersTurn={this.state.computersTurn}
        handleGame={this.handleGame}
        managePlayersTurn={this.managePlayersTurn}
        turnCount={this.state.turnCount}
        deck={this.state.deck}
        />
      </>
    )
  }
}

export default App;