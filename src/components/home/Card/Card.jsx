import React from 'react';
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaRegComments} from 'react-icons/fa'
import {GiMoneyStack} from 'react-icons/gi'
import ToCurrency from '../../../composables/ToCurrency';
import './Card.css'

const Card = () => {
  return ( 
    <div className="container-card">
        <div className="card">
          <div className="card-item">
              <span>1,504</span>
              <AiOutlineEye/>
          </div>
            <span className="card-info">Dayle views</span>
        </div>
        <div className="card">
          <div className="card-item">
                <span>1,504</span>
                <AiOutlineShoppingCart/>
            </div>
            <span className="card-info">Sales</span>
        </div>
        <div className="card">
          <div className="card-item">
                <span>1650</span>
                <FaRegComments/>
            </div>
            <span className="card-info">Comments</span>
        </div>
        <div className="card">
          <div className="card-item">
                <span>{ToCurrency(150,4)}</span>
                <GiMoneyStack/>
            </div>
            <span className="card-info">Earnings</span>
        </div>
    </div>
   );
}
 
export default Card;