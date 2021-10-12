import React from 'react';
import { useState, useEffect, memo} from 'react';
import axios from "../../plugins/axios"

const Reply = ({reply, background}) => {
  const [handleReply, setHandleReply] = useState()

  useEffect(()=>{
    let isMounted = true
      const findManager = (id) => {
        axios.get(`managers/${id}`).then(response =>{
          setHandleReply(response.data)
        })

      }
      findManager(reply.managerID)
  }, [])
  
  return ( 
    <li className={`${background} comment user-comment reply`}>
          {/* <div className={`${background} info`}>
            <a href="#">{customer.name}</a> 
            
            <div>
            <span clasname="date">{comment.date}</span>
            {customer.type && (<span clasname="adm-svg"><FaCrown class="adm-svg"/></span>)}
            </div>
          </div>

          <a className="avatar" href="#">
            <img
              src={customer?.image}
              width="35"
              alt="Profile Avatar"
              title={customer?.name}
            />
          </a> */}

          <p className={background}>
            <span className={background}>{reply?.content}</span>

          </p>
          <a className="avatar" href="#">
            <img
              src={handleReply?.image}
              width="35"
              alt="Profile Avatar"
              title={handleReply?.name}
            />
          </a>
        </li>
   );
}

export default memo(Reply)