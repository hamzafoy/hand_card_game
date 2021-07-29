import React from 'react';
import './PlayersHand.css';
//import { currentGameDeck } from '../Logic/game_logic';
import PlayingCard from '../PlayingCard/PlayingCard';



//Dummy hand of cards for testing as game logic continues to develop
let dummyHand = [
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
]


class PlayersHand extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: dummyHand
    }
  }


  render() {
    
    return(
      <>
        <div className="handful-of-cards">
          {this.state.cards.map((card, i) => <PlayingCard card={card} key={'card_' + i}/>)}
        </div>
        <h2>Your current hand of cards!</h2>
        <button
        onClick={this.handleDraw}
        >
          Draw Card
        </button>
      </>
    )
  }
}

export default PlayersHand;