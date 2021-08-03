import React from 'react';
import './App.css';
import PlayersHand from './PlayersHand/PlayersHand'
import ComputersHand from './ComputersHand/ComputersHand'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playersTurn: false,
      computersTurn: false,
      game: false,
      turnCount: 0
    }

    this.handleGame = this.handleGame.bind(this);
    this.managePlayersTurn = this.managePlayersTurn.bind(this);
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
    this.setState(prevState => ({
      playersTurn: !prevState.playersTurn,
      computersTurn: !prevState.computersTurn
    }))
    if(this.state.playersTurn == true) {
      let currentTurnCount = Number(this.state.turnCount);
      currentTurnCount++
      this.setState({
        turnCount: currentTurnCount
      })
    }
  }

  endGame() {
    this.render();
  }


  render() {   

    
    
    return (
      <>
        <PlayersHand
        game={this.state.game}
        playersTurn={this.state.playersTurn}
        computersTurn={this.state.computersTurn}
        handleGame={this.handleGame}
        managePlayersTurn={this.managePlayersTurn}
        turnCount={this.state.turnCount}
        endGame={this.endGame}
        />
        <ComputersHand
        playersTurn={this.state.playersTurn}
        computersTurn={this.state.computersTurn}
        managePlayersTurn={this.managePlayersTurn}
        endGame={this.endGame}
        />
      </>
    )
  }
}

export default App;