import React, { Component } from 'react';

class History extends Component {
    render() {
        // Holds famous people inside of <li> tags
        const historyList = [];
        for(let num of this.props.history) {
            let historyListItem = (<li>{num}</li>);
            historyList.push(historyListItem);
        }
        return (
            <div>
                <h2>History List</h2>
                <ul>
                    {historyList}
                </ul>
            </div>
        );
    }
}

export default History;