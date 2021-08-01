import React from 'react';
import './App.css';
import PlayersHand from './PlayersHand/PlayersHand'
import CardTable from './CardTable/CardTable'

class App extends React.Component {

  render() {
    
    return (
      <>
        <CardTable/>
        <PlayersHand/>
      </>
    )
  }
}

export default App;