import React, { Component } from 'react';

class CurrentTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
        };
    }

    render(){
        return(
            <div>
                <h1>{this.state.total}</h1>
                <button>Save</button>
            </div>
        )
    }
}

export default CurrentTotal;