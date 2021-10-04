import React from 'react';
import CutomersInfo from '../customersInfo/customer-info';
import Table from '../Table/Table'

import './infos.css'
const Infos = ({customers, orders, handleShowModal}) => {
  return ( 
    <div className="infos-container">
      <Table  orders={orders} />
      <CutomersInfo handleShowModal={handleShowModal} customers={customers}/>
    </div>
   );
}
 
export default Infos;