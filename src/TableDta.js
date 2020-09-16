import React from 'react';


function TableDta(props) {
    return <div>
        <ol>
            {props.data.map(function (item) {
                return <li key={item}>{item}</li>;

            })}
        </ol>
        <table>
            <tr>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>

            </tr>

        </table>
    </div>

}
export default TableDta;