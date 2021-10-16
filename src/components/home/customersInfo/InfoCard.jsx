import React from 'react';
import './customerInfo.css'

const InfoCard = ({info}) => {
  return ( 
    <td className="info">
      <div className="img-box">
        <img src={info?.image} alt="" />
      </div>
      <div>
        <span>{info?.name}</span>
      </div>
    </td>
   );
}
 
export default InfoCard;