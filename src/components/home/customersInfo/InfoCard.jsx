import React from 'react';
import './customerInfo.css'

const InfoCard = ({customer, handleShowModal}) => {
  return ( 
    <td onClick={() => handleShowModal(customer)} className="info">
      <div className="img-box">
        <img src={customer?.image} alt="" />
      </div>
      <div>
        <span>{customer?.name}</span>
      </div>
    </td>
   );
}
 
export default InfoCard;