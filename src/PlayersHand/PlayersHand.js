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
      setOneValue: 0,
      discardPile: [],
      discardPileValue: 0,
      deck: currentGameDeck
    }
    //this.draw = this.draw.bind(this);
    this.discardACard = this.discardACard.bind(this);
    this.moveACard = this.moveACard.bind(this);
  }

  /* draw() {
    let newCard = currentGameDeck.shift();
    this.setState({ cards: [...this.state.cards, newCard] })
  } */

  discardACard(e) {
    let currentArray = [...this.state.cards]
    let currentValueOfDiscards = Number(this.state.discardPileValue);
    //console.log(currentArray);
    let discardedCard = e.target;
    let discardedCardAlt = e.nativeEvent.srcElement.alt;
    let dissectedCardData = discardedCardAlt.split(" ")
    let numToUpdateDiscardValue = Number(dissectedCardData[2])
    let newValueOfDiscards = (currentValueOfDiscards + numToUpdateDiscardValue);
    //console.log(newValueOfDiscards)
    //console.log(dissectedCardData[2])
    currentArray.splice(currentArray.findIndex(card => card.id == discardedCard.id), 1)
    //console.log(currentArray)
    this.setState(
      { 
      cards: [...currentArray],
      discardPile: [...this.state.discardPile, discardedCard],
      discardPileValue: newValueOfDiscards
    }
    )
  }

  moveACard(e) {
    let currentArray = [...this.state.cards];
    let currentValueOfSetOne = Number(this.state.setOneValue);
    let movedCard = e.target;
    let movedCardAlt = e.nativeEvent.srcElement.alt;
    let dissectedCardData = movedCardAlt.split(" ")
    let numToUpdateSetOneValue = Number(dissectedCardData[2])
    let newValueOfSetOne = (currentValueOfSetOne + numToUpdateSetOneValue);
    //console.log(movedCardAlt)
    currentArray.splice(currentArray.findIndex(card => card.id == movedCard.id), 1)
    this.setState(
      {
        cards: [...currentArray],
        setOne: [...this.state.setOne, movedCard],
        setOneValue: newValueOfSetOne
      }
    )
  }

  

  render() {
    let handOfCards = this.state.cards.map((card, i) =>
    <PlayingCard
    card={card}
    key={`card_${card.suit}_${card.id}`}
    discardACard={this.discardACard}
    moveACard={this.moveACard}
    />
    )

    let setOneValue = this.state.setOneValue;

    if (setOneValue >= 51) {
      alert('You win!')
    }
    
    let handOfDiscarded = this.state.discardPile.map(function(image) {
      return (<img className="card" src={image.src}/>)
    });

    let handOfMovedCards = this.state.setOne.map(function(image) {
      return (<img className="card" src={image.src}/>)
    });

    
    
    return(
      <>
        <div className="card-table">
          <div className="handful-of-discarded-cards">
            {handOfDiscarded}
          </div>
        </div>

        <div className="handful-of-cards">
          {handOfCards}
        </div>

        <h2>Your current hand of cards!</h2>

        <div className="card-play-options">

          {/* <button
          onClick={this.draw}
          >
            Draw Card
          </button> */}

        </div>

        <div className="sets-row">
          {setOneValue}
          <section className="first-set">
            {handOfMovedCards}
          </section>
        </div>
      </>
    )
  }
}

export default PlayersHand;