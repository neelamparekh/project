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
            total: 100
        }
    }

    tableData1() {

        return this.state.vegetables.map((vegetables, index) => {

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

        const { vegetables } = this.state;

        let VgList = vegetables.length > 0
            && vegetables.map((item, i) => {
                return (
                    <option key={i} value={item.id}>{item.name}</option>
                )
            }, this);

        return (
            <div>

                <table id='vegetables'>
                    <tbody>
                        <tr>
                            <th>NO.</th>
                            <th>VEGETABLES</th>
                            <th>QTY</th>
                            <th>PRICE</th>
                        </tr>
                        {this.tableData1()}
                    </tbody>
                </table>
                <select>Select Vegetables {VgList}</select>
                <button>BUY</button>
                <button>SELL</button>
                <CashBox total={this.state.total} />

            </div>
        );
    }
}

export default VegetableList;