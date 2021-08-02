import React from 'react';
import './PlayersHand.css';
import { currentGameDeck, playerOneHand } from '../Logic/game_logic';
import PlayingCard from '../PlayingCard/PlayingCard';



class PlayersHand extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: playerOneHand,
      setOne: [],
      setTwo: [],
      setThree: []
    }
    this.draw = this.draw.bind(this);
    //this.discard = this.discard.bind(this);
    this.readCard = this.readCard.bind(this);
  }

  draw() {
    let newCard = currentGameDeck.shift();
    this.setState({ cards: [...this.state.cards, newCard] })
  }

  readCard(e) {
    let currentArray = [...this.state.cards]
    console.log(currentArray);
    let discardedCard = e.target;
    console.log(discardedCard.id)
    currentArray.splice(currentArray.findIndex(card => card.id == discardedCard.id), 1)
    console.log(currentArray)
    this.setState(
      { cards: [...currentArray] }
    )
  }

  /*
readCard(e) {
    let currentArray = [...this.state.cards]
    console.log(currentArray);
    let discardedCard = e.target;
    console.log(discardedCard.id)
    let readyToToss = currentArray.filter(card => {
      return card.id == discardedCard.id
    })
    console.log(readyToToss)
  }
  */

  /* discard() {
    let currentArray = [...this.state.cards]
    let discardedCard = currentArray.pop();
    let newArray = currentArray.filter(card => {
      return card !== discardedCard
    })
    this.setState({ cards: [...newArray] })
  } */

  render() {
    let handOfCards = this.state.cards.map((card, i) =>
    <PlayingCard
    card={card}
    key={`card_'${card.id}`}
    readCard={this.readCard}
    />
    )
    
    return(
      <>
        <div className="handful-of-cards">
          {handOfCards}
        </div>

        <h2>Your current hand of cards!</h2>

        <div className="card-play-options">
          <button
          onClick={this.draw}
          >
            Draw Card
          </button>
          <button
          onClick={this.discard}
          >
            Discard Card
          </button>
        </div>
        <div className="sets-row">
          <section className="first-set">

          </section>
          <section className="second-set">

          </section>
          <section className="third-set">

          </section>
        </div>
      </>
    )
  }
}

export default PlayersHand;