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
      game: false
    }

    this.handleGame = this.handleGame.bind(this);
    this.managePlayersTurn = this.managePlayersTurn.bind(this);
  }

  handleGame() {
    this.setState(prevState => ({
      game: !prevState.game,
      playersTurn: !prevState.playersTurn
    }))
  }

  managePlayersTurn() {
    this.setState(prevState => ({
      playersTurn: !prevState.playersTurn
    }))
  }


  render() {   
    console.log(this.state.game) 
    return (
      <>
        <PlayersHand
        game={this.state.game}
        playersTurn={this.state.playersTurn}
        handleGame={this.handleGame}
        managePlayersTurn={this.managePlayersTurn}
        />
        <ComputersHand/>
      </>
    )
  }
}

export default App;