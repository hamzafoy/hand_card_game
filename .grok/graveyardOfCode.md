Belongs to `PlayersHand.js`

<!--
class PlayersHand extends React.Component {

  render() {
    let cards = hamzaFoy.getCardInfo();
    let currentCards = cards.map(card =>
    <img src={playingCards.switchStatementForCards(card)} key={card.id} alt={card.suit + card.number} height="125px" width="75px"/>
    );

    return(
      <>
        <div className="handful-of-cards">
          {currentCards}
        </div>
        <h2>Your current hand of cards!</h2>
        <button className="button">
          Draw Card!
        </button>
      </>
    )
  }
}
-->


Belongs to `PlayingCard.js`

<!-- let cards = hamzaFoy.getCardInfo();
      let currentCards = cards.map(card =>
      <img src={playingCards.switchStatementForCards(card)} key={card.id} alt={card.suit + card.number} height="125px" width="75px"/>
      );



      class PlayingCard extends React.Component {
    render() {
        let cards = hamzaFoy.getCardInfo();
        let currentCards = cards.map(card =>
            <img src={playingCards.switchStatementForCards(card)} key={card.id} alt={card.suit + card.number} className="card"/>
        ); 
        return(
        <>
            <div className="handful-of-cards">
            {currentCards}
            </div>
        </>
      )
    }
  } -->