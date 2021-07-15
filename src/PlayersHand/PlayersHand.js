import React from 'react';
import { hamzaFoy } from '../Logic/game_logic'

let cards = hamzaFoy.getCardInfo();
let currentCards = cards.map(card =>
<li>{card}</li>
);

class PlayersHand extends React.Component {

  render() {
    
    return(
      <>
        Your current hand of cards!
        <ul>
          {currentCards}
        </ul>
      </>
    )
  }
}

export default PlayersHand;