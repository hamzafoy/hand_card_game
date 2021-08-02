import React from 'react';
import './PlayingCard.css';



class PlayingCard extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <img
            src={`./cards/${this.props.card.desc}.png`}
            alt={`${this.props.card.suit} ${this.props.card.number}`}
            number={this.props.card.number}
            suit={this.props.card.suit}
            value={this.props.card.value}
            id={this.props.card.id}
            className="card"
            onClick={this.props.readCard}
            />
        )
    }
  }
  
  export default PlayingCard;