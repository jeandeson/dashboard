import React from 'react';
import './order.css'
import ToCurrency from '../../../composables/ToCurrency';

const Order = ({order}) => {

  const toCapitalize = (string) => {
    return string[0].toUpperCase() + string.substr(1);
  }

  return ( 
    <tr>
      <td><span >{`${toCapitalize(order.name)}`}</span></td>
      <td><span>{ToCurrency(order.price)}</span></td>
      <td><span>{toCapitalize(order.payment)}</span></td>
      <td><span className={`${order.status} status`}>{toCapitalize(order.status)}</span></td>
  </tr>
   );
}
 
export default Order;