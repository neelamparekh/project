import React, { Component } from 'react';

class Cash extends Component {

    render() {
        return (
            <div>
                <h1>CASH BOX</h1>
                <h2> Total Cash :  $ {this.props.total}</h2>

            </div>
        );
    }
}

export default Cash;