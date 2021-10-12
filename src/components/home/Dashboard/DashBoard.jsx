import React from 'react';
import Card from "../Card/Card"
import Infos from "../infos/Infos"

import './dashBoard.css'


const Dashboard = ({customers, orders, handleShowModal, statitcs}) => {
  return ( 
    
    <div className="container">
        <Card statitcs={statitcs}/>
        <Infos handleShowModal={handleShowModal} orders={orders} customers={customers}/>
    </div>

   );
}
 
export default Dashboard;