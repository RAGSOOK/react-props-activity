import React, { Component } from 'react';

class EnterNumber extends Component{
    constructor(props){
        super(props);
        this.state = {
            number: undefined,
        };
    }

    handleChangeNum = (event) => {
        this.setState({
            number: event.target.value,
        });
    }

    handleDown = () => {
        this.props.performOperation( this.state.number, 'down');
    }

    handleUp = () => {
        this.props.performOperation( this.state.number, 'up');
    }

    render(){
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