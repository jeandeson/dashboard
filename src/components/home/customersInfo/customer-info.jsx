import React from 'react';
import './customerInfo.css'
import InfoCard from './InfoCard'

const CutomersInfo = ({ infos, handleShowModal }) => {
  return (
    <div className="customer-info-container">
      <table>
        <thead>
          <th className="table-title">Recent Changes</th>
        </thead>
        <tbody>
          <tr>
            {infos?.map(info => <InfoCard key={info?.id} info={info} handleShowModal={handleShowModal} />)}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CutomersInfo;