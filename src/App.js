import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import EnterNumber from './components/EnterNumber.js';
import CurrentTotal from './components/CurrentTotal.js';
import History from './components/History.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      history: [],
      total: 0,
    }
  }

  performOperation = (number, direction) => {

    let cTotal = this.state.total;

    if(direction === 'up'){//begin logic 1

      if( (cTotal += parseInt(number)) > 10 ){//begin logic 2
        alert('We do not allow numbers greater than 10 here.');
      }else{
        this.setState({
          total: this.state.total += parseInt(number),
          history: [...this.state.history, this.state.total],
        });
      }//end logic 2 

    }else if(direction === 'down'){

      if( (cTotal -= parseInt(number)) < 0 ){//begin logic 3
        alert('We do not allow numbers less than 0 here.');
      }else{
        this.setState({
          total: this.state.total -= parseInt(number),
          history: [...this.state.history, this.state.total],
        });
      }//end logic 3

    }else{
      alert('There was a problem in App.js method performOperation');
    }//end logic 1

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
        <History history={this.state.history}/>
      </div>
    );
  }
}

export default App;
