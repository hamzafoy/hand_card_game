import React from 'react';
import { hamzaFoy } from '../Logic/game_logic';
import {
  TwoC,
  TwoD,
  TwoH,
  TwoS,
  ThreeC,
  ThreeD,
  ThreeH,
  ThreeS,
  FourC,
  FourD,
  FourH,
  FourS,
  FiveC,
  FiveD,
  FiveH,
  FiveS,
  SixC,
  SixD,
  SixH,
  SixS,
  SevenC,
  SevenD,
  SevenH,
  SevenS
} from './cards/index.js';

function switchStatementForCards(param) {
  switch(param) {
    case 'heart':
      return FiveH;
    case 'spade':
      return ThreeS;
    case 'club':
      return SevenC;
    case 'diamond':
      return SixD;
    default:
      return FourC;
  }
}

let cards = hamzaFoy.getCardInfo();

let currentCards = cards.map(card =>
<img src={switchStatementForCards(card.suit)} key={card.id} height="200px" width="125px"/>
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