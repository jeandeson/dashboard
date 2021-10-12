import React from 'react';
import './table.css'
import Order from "./Order.jsx";

const Table = ({orders}) => {
  return ( 
    <div className="flex-container">
    <table className="dash">
        <thead>
          <tr>
            <th  className="table-title">Recent Orders</th>
          </tr>
        </thead>
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th>Payment</th>
          <th>Status</th>
        </thead>
        <tbody>
          { orders.map(order => <Order key={order.id} order={order}/>)}
        </tbody>
    </table>
    </div>
    
   );
}
 
export default Table;
