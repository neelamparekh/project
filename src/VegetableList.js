import React, { Component } from 'react';
import CashBox from './CashBox';

class VegetableList extends Component {
    constructor(props) {
        super(props);
        this.state = {

            vegetables: [
                { id: 1, name: 'Potatoes', qty: 30, price: 5.00 },
                { id: 2, name: 'Tomatoes', qty: 19, price: 3.00 },
                { id: 3, name: 'Onions', qty: 28, price: 4.00 },
                { id: 4, name: 'Broccoli', qty: 20, price: 2.00 }
            ],
            fruits: [
                { id: 1, name: 'Apples', qty: 21, price: 1.00 },
                { id: 2, name: 'Mangoes', qty: 19, price: 2.00 },
                { id: 3, name: 'Bananas', qty: 16, price: 3.00 },
                { id: 4, name: 'Oranges', qty: 25, price: 4.00 }
            ],
            selectedFruit: '',
            total: 100
        }
    }

    selectedFruit = (e) => {
        this.setState({
            selectedFruit: e.target.value
        })
        // console.log(e.target.value);
    }

    selectedVeg = (e) => {
        this.setState({
            selectedVeg: e.target.value
        })
        // console.log(e.target.value);
    }

    buyFruits = () => {
        let tempFruits = this.state.fruits;
        let res = tempFruits.map((fruit) => {
            if (fruit.name === this.state.selectedFruit) {
                fruit.qty = fruit.qty + 1;
            }
            return fruit;
        })
        console.log(res);
        this.setState({
            fruits: res
        })

    }

    buyVeg = () => {
        let tempVeg = this.state.vegetables;
        let result = tempVeg.map((vegetable) => {
            if (vegetable.name === this.state.selectedVeg) {
                vegetable.qty = vegetable.qty + 1;
            }
            return vegetable;
        })
        console.log(result);
        this.setState({
            vegetables: result
        })

    }

    sell = () => {
        this.setState((data) => ({
            qty: data.qty - 1
        }));
    }


    tableData1(data) {


        return data.map((vegetables, index) => {

            const { id, name, qty, price } = vegetables //destructuring
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

    render() {
        const { fruits } = this.state;

        const { vegetables } = this.state;

        // let VgList = vegetables.length > 0
        //     && vegetables.map((item, i) => {
        //         return (
        //             <option key={i} value={item.id}>{item.name}</option>
        //         )
        //     }, this);

        return (
            <div>
                <h1>{this.state.heading}</h1>


                <table id='fruits'>
                    <tbody>
                        <tr>
                            <th>NO.</th>
                            <th>FRUITS & VEGETABLES </th>
                            <th>QTY</th>
                            <th>PRICE</th>
                        </tr>
                    </tbody>
                </table>
                <table id='vegetables'>
                    <tbody>

                        {this.tableData1(this.state.fruits)}
                        {this.tableData1(this.state.vegetables)}
                    </tbody>
                </table>

                <select onChange={this.selectedFruit}>Select Fruits {fruits.map((item, i) => {
                    return (
                        <option key={i} value={item.name}>{item.name}</option>
                    )
                })} </select>
                <button onClick={this.buyFruits}>BUY</button>
                <button onClick={this.sell}>SELL</button>
                <br />
                <select onChange={this.selectedVeg}>Select Vegetables {vegetables.map((item, i) => {
                    return (
                        <option key={i} value={item.name}>{item.name}</option>
                    )
                })} </select>
                <button onClick={this.buyVeg}>BUY</button>
                <button>SELL</button>
                <CashBox total={this.state.total} />

            </div>
        );
    }
}

export default VegetableList;