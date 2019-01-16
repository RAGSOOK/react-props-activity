import React, { Component } from 'react';

class CurrentTotal extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         total: 0,
    //     };
    // }

    render(){
        const total = this.props.total;
        return(
            <div>
                <h1>{total}</h1>
                <button>Save</button>
            </div>
        )
    }
}

export default CurrentTotal;