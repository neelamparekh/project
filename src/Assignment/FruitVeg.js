import React, { Component } from 'react';
import Cash from '../Assignment/Cash';
import TableData from './TableData';

class FruitVeg extends Component {
    constructor(props) {
        super(props);
        this.state = {

            heading: " FRUITS & VEGETABLE SHOP ",
            fruitsVeg: [
                { id: 1, name: 'Potatoes', qty: 30, price: 5.00 },
                { id: 2, name: 'Tomatoes', qty: 19, price: 3.00 },
                { id: 3, name: 'Onions', qty: 28, price: 4.00 },
                { id: 4, name: 'Broccoli', qty: 20, price: 2.00 },
                { id: 5, name: 'Apples', qty: 21, price: 1.00 },
                { id: 6, name: 'Mangoes', qty: 19, price: 2.00 },
                { id: 7, name: 'Bananas', qty: 16, price: 3.00 },
                { id: 8, name: 'Oranges', qty: 25, price: 4.00 }
            ],
            data: '',
            selectedFruit: '',
            total: 100,
        }
    }
    selectedFruitVeg = (e) => {
        this.setState({
            selectedFruitVeg: e.target.value
        })
    }
    buy = () => {
        let tempFrVg = this.state.fruitsVeg;
        let res = tempFrVg.map((item) => {
            if (item.name === this.state.selectedFruitVeg) {
                item.qty = item.qty + 1;
            }
            return item;
        })
        console.log(res);
        this.setState({
            fruitsVeg: res
        })

    }
    sell = () => {
        let tempFrVg = this.state.fruitsVeg;
        let res = tempFrVg.map((item) => {
            if (item.name === this.state.selectedFruitVeg) {
                item.qty = item.qty - 1;
            }
            return item;
        })
        console.log(res);
        this.setState({
            fruitsVeg: res
        })

    }

    render() {
        const { fruitsVeg } = this.state;

        return (
            <div>
                <h1>{this.state.heading}</h1>

                <TableData data={this.state.fruitsVeg} />

                <select onChange={this.selectedFruitVeg}>Select Item {fruitsVeg.map((item, i) => {
                    return (
                        <option key={i} value={item.name}>{item.name}</option>
                    )
                })} </select>
                <button onClick={this.buy}>BUY</button>
                <button onClick={this.sell}>SELL</button>
                <br />

                <Cash total={this.state.total} />

            </div>
        );
    }
}

export default FruitVeg;
