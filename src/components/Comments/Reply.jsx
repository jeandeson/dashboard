import React from 'react';
import { useState, useEffect, memo} from 'react';
import axios from "../../plugins/axios"
import Loading from "../loading/Loading"

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
    <>
    {handleReply ? (
      <li className={`${background} comment user-comment reply`}>
      <p className={background}>
        <span className={background}>{reply?.content}</span>
      </p>
      <a className="avatar" href="#">
        <img
          src={handleReply?.image ?? <Loading type={`spin`} color={`var(--blue)`}/> }
          width="35"
          alt="Profile Avatar"
          title={handleReply?.name}
        />
      </a>
    </li>
    ): <Loading type={`spin`} color={`var(--blue)`}/>}
    </>
   );
}

export default memo(Reply)