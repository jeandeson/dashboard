import React from 'react';
import './customerInfo.css'
import InfoCard from './InfoCard'

const CutomersInfo = ({customers, handleShowModal}) => {
  return ( 
    <div className="customer-info-container">
     <table>
        <thead>
          <th  className="table-title">Recent Customers</th>
        </thead>
        <tbody>
          <tr>
            {customers?.map(customer => <InfoCard key={customer?.id} customer={customer}  handleShowModal={handleShowModal} />)}
          </tr>
        </tbody>
    </table>
    </div>
   );
}
 
export default CutomersInfo;