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
      total: 0,
    }
  }

  performOperation = (number, direction) => {
    if(direction == 'up'){
      this.setState({
        total: this.state.total += parseInt(number),
      });
    }
    else if(direction == 'down'){
      this.setState({
        total: this.state.total -= parseInt(number),
    });
    }
    else{
      alert('There was a problem in App.js method performOperation');
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <EnterNumber performOperation={this.performOperation}/>
        <br />
        <CurrentTotal total={this.state.total}/>
      </div>
    );
  }
}

export default App;
