import React, { Component } from 'react';

class EnterNumber extends Component{
    constructor(props){
        super(props);
        this.state = {
            number: undefined,
            direction: '',
        };
    }

    handleChangeNum = (event) => {
        this.setState({
            number: event.target.value,
        });
    }

    handleDown = () => {
        this.setState({
            direction: 'down',
        });
        this.props.performOperation( this.state.number, this.state.direction);
    }

    handleUp = () => {
        this.setState({
            direction: 'up',
        });
        this.props.performOperation( this.state.number, this.state.direction);
    }

    render(){
        console.log(this.state.number);
        console.log(this.state.direction);
        return(
            <div>
                <button onClick={this.handleUp}>Up</button>
                <input onChange={this.handleChangeNum} 
                        type="number" placeholder="Enter Number" />
                <button onClick={this.handleDown}>Down</button>
            </div>
        );
    }
}

export default EnterNumber;