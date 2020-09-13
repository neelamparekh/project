import React, { Component } from 'react';


class FruitList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: " FRUITS & VEGETABLE SHOP ",
            fruits: [
                { id: 1, name: 'Apples', qty: 21, price: 1.00 },
                { id: 2, name: 'Mangoes', qty: 19, price: 2.00 },
                { id: 3, name: 'Bananas', qty: 16, price: 3.00 },
                { id: 4, name: 'Oranges', qty: 25, price: 4.00 }
            ],

        }
    }

    tableData() {

        return this.state.fruits.map((fruits, index) => {

            const { id, name, qty, price } = fruits //destructuring
            return (

                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{qty}</td>
                    <td>${price}</td>
                </tr>
            )
        })
    }

    buy() {
        this.setState((data) => ({
            qty: data.qty + 1
        }));
    }

    sell() {
        this.setState((data) => ({
            qty: data.qty - 1
        }));
    }


    render() {

        const { fruits } = this.state;

        let frList = fruits.length > 0
            && fruits.map((item, i) => {
                return (
                    <option key={i} value={item.id}>{item.name}</option>
                )
            }, this);

        return (
            <div>
                <h1>{this.state.heading}</h1>


                <table id='fruits'>
                    <tbody>
                        <tr>
                            <th>NO.</th>
                            <th>FRUITS</th>
                            <th>QTY</th>
                            <th>PRICE</th>
                        </tr>
                        {this.tableData()}
                    </tbody>
                </table>
                <select>Select Fruits {frList}</select>
                <button onClick={this.buy}>BUY</button>
                <button onClick={this.sell}>SELL</button>


            </div>
        );
    }
}

export default FruitList;