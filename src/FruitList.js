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

    tableData = () => {

        return this.state.fruits.map((fruit, index) => {

            //const { id, name, qty, price } = fruits //destructuring
            return (

                <tr key={fruit.id}>
                    <td>{fruit.id}</td>
                    <td>{fruit.name}</td>
                    <td>{fruit.qty}</td>
                    <td>${fruit.price}</td>
                </tr>
            )
        })
    }
    // selectedFruit = (e) => {
    //     this.setState({
    //         selectedFruit: e.target.value
    //     })
    //     // console.log(e.target.value);
    // }

    // buy = () => {
    //     let tempFruits = this.state.fruits;
    //     let res = tempFruits.map((fruit) => {
    //         if (fruit.name === this.state.selectedFruit) {
    //             fruit.qty = fruit.qty + 1;
    //         }
    //         return fruit;
    //     })
    //     console.log(res);
    //     this.setState({
    //         fruits: res
    //     })

    // }

    // sell = () => {
    //     this.setState((data) => ({
    //         qty: data.qty - 1
    //     }));
    // }


    render() {
        // const { fruits } = this.state;

        return (
            <div>
                <h1>{this.state.heading}</h1>

                {/* <table id='fruits'>
                    <tbody>
                        <tr>
                            <th>NO.</th>
                            <th>FRUITS</th>
                            <th>QTY</th>
                            <th>PRICE</th>
                        </tr>
                        {this.tableData()}
                    </tbody>
                </table> */}
                {/* <select onChange={this.selectedFruit}>Select Fruits {fruits.map((item, i) => {
                    return (
                        <option key={i} value={item.name}>{item.name}</option>
                    )
                })} </select>
                <button onClick={this.buy}>BUY</button>
                <button onClick={this.sell}>SELL</button> */}


            </div>
        );
    }
}

export default FruitList;