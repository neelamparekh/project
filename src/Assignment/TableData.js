import React from 'react';


function TableData(props) {

    return <div>
        <table id="fruitsVeg">
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>QTY</th>
                <th>PRICE</th>
            </tr>
            {
                props.data.map(function (fruitsVeg) {
                    return <tr>
                        <th>{fruitsVeg.id}</th>
                        <th>{fruitsVeg.name}</th>
                        <th>{fruitsVeg.qty}</th>
                        <th>${fruitsVeg.price}</th>
                    </tr>;
                })
            }
        </table>
    </div >

}
export default TableData;