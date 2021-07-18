import React from 'react';
import './PlayersHand.css'
import { hamzaFoy } from '../Logic/game_logic';
import * as playingCards from './cards/index.js';


let cards = hamzaFoy.getCardInfo();

let currentCards = cards.map(card =>
<img src={playingCards.switchStatementForCards(card)} key={card.id} alt={card.suit + card.number} height="125px" width="75px"/>
);

class PlayersHand extends React.Component {

  render() {
    return(
      <>
        <div className="handful-of-cards">
          {currentCards}
        </div>
        <h2>Your current hand of cards!</h2>
      </>
    )
  }
}

export default PlayersHand;