import React from 'react';
import './CardTable.css';
import { currentGameDeck } from '../Logic/game_logic'
import PlayersHand from '../PlayersHand/PlayersHand'



class CardTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            deck: currentGameDeck,
            discardPile: []
        }
    }

    draw() {
        
    }

    render() {
        return (
            <>
            <div className="card-table">
          
            </div>
            <PlayersHand/>
            </>
        )
    }
}

export default CardTable;