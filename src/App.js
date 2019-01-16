import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import EnterNumber from './components/EnterNumber';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <EnterNumber />
      </div>
    );
  }
}

export default App;
