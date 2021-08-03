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
      this.computerPlay = this.computerPlay.bind(this);
    }

    computerPlay() {
      let currentValueOfSetOne = Number(this.state.setOneValue);
      let deckArray = [...this.state.deck];
      let newCard = deckArray.shift();
      let newHand = [...this.state.cards];
      let cardToSet = newHand.pop();
      let cardToSetValue = cardToSet.value;
      //console.log(cardToSetValue);
      let cardToDiscard = newHand.shift();
      let newValueOfSetOne = (currentValueOfSetOne + cardToSetValue);
      this.setState({
        cards: [...newHand, newCard],
        deck: [...deckArray],
        setOne: [...this.state.setOne, cardToSet],
        setOneValue: newValueOfSetOne,
        discardPile: [...this.state.discardPile, cardToDiscard]
      })
      this.props.managePlayersTurn();
    }
    
    render() {
      let setOneValue = this.state.setOneValue;

      if (setOneValue >= 51) {
        alert('The computer wins!')
        this.props.endGame()
      }
  
      return(
        <div className="computer">
          <button onClick={this.computerPlay}>
            Computer's Turn
          </button>
        </div>
      )
    }
  }
  
  export default ComputersHand;