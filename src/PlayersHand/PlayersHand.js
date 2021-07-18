import React from 'react';
import { hamzaFoy } from '../Logic/game_logic';
import * as playingCards from './cards/index.js';


let cards = hamzaFoy.getCardInfo();

let currentCards = cards.map(card =>
<img src={playingCards.switchStatementForCards(card)} key={card.id} alt={card.suit + card.number} height="200px" width="125px"/>
);

class PlayersHand extends React.Component {

  render() {
    return(
      <>
        Your current hand of cards!
        <div>
          {currentCards}
        </div>
      </>
    )
  }
}

export default PlayersHand;