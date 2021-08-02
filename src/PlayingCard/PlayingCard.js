import React from 'react';
import './PlayingCard.css';



class PlayingCard extends React.Component {

    render() {
        return(
            <img
            src={`./cards/${this.props.card.desc}.png`}
            alt={`${this.props.card.suit} ${this.props.card.number} ${this.props.card.value}`}
            number={this.props.card.number}
            suit={this.props.card.suit}
            value={this.props.card.value}
            id={this.props.card.id}
            className="card"
            onDoubleClick={this.props.discardACard}
            onDragStart={this.props.moveACard}
            />
        )
    }
  }
  
  export default PlayingCard;