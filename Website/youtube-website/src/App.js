import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YoutubeVideo from './YoutubeVideo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Youtube With Friends</h1>
        </header>
        <YoutubeVideo />
      </div>
    );
  }
}

export default App;
