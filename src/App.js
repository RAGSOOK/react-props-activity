import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import EnterNumber from './components/EnterNumber.js';
import CurrentTotal from './components/CurrentTotal.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      history: [],
      operation: [],
    }
  }

  performOperation = (number, direction) => {

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <EnterNumber />
        <br />
        <CurrentTotal />
      </div>
    );
  }
}

export default App;
