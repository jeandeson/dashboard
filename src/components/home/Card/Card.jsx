import React from 'react';
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaRegComments} from 'react-icons/fa'
import {GiMoneyStack} from 'react-icons/gi'
import ToCurrency from '../../../composables/ToCurrency';
import {useHistory} from 'react-router-dom'
import './Card.css'


const Card = props => {
  
  const history = useHistory()
  
  const toComments = () => {
    history.push("/comments")
  }
  const {statitcs} = props
  return ( 
    <div className="container-card">
        <div className="card">
          <div className="card-item">
              <span>{statitcs[0]?.views}</span>
              <AiOutlineEye/>
          </div>
            <span className="card-info">Dayle views</span>
        </div>
        <div className="card">
          <div className="card-item">
                <span>{statitcs[0]?.sales}</span>
                <AiOutlineShoppingCart/>
            </div>
            <span className="card-info">Sales</span>
        </div>
        <div className="card">
          <div onClick={() => toComments()} className="card-item">
                <span>{statitcs[0]?.comments}</span>
                <FaRegComments/>
            </div>
            <span className="card-info">Comments</span>
        </div>
        <div className="card">
          <div className="card-item">
                <span>{ToCurrency(statitcs[0]?.earnings)}</span>
                <GiMoneyStack/>
            </div>
            <span className="card-info">Earnings</span>
        </div>
    </div>
   );
}
 
export default Card;