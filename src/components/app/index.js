import React, { Component } from 'react';
import './index.css';
import { Header, GameList, StreamList } from '../index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGame: ''
    };
  }

  selectGame = data => {
    this.setState({
      selectedGame: data
    });
  };

  render() {

    return (
      <div className="App">
        <Header/>
        <div className="container">
          <GameList handleClick={this.selectGame}/>
          <StreamList selectedGame={this.state.selectedGame}/>
        </div>
      </div>
    );
  }
}

export default App;
