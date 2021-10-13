import React, { useEffect, useState, memo } from 'react';
import Reply from "./Reply"
import { useAccountContext } from '../../contexts/accountContexts';
import { useCommentsContext } from '../../contexts/commentsContexts';
import axios from "../../plugins/axios"
const Comment = ({comment, position, customer}) => {

  const [background, setBackgrond] = useState("")
  const [replyComment, setReplyComment] = useState("")
  const {account} = useAccountContext()
  const {comments, setComments} = useCommentsContext()

  const handleReplyComment = (e) => {
    setReplyComment(e.target.value)
  }

  const FinishComment = async () => {
    const body = {
      managerID: account.id,
      content: replyComment
    }
    comment.replies.push(body)
    setComments([...comments, comment])
    await axios.put(`posts/${comment.id}`, comment)
  }

  useEffect(() => {
    const getPosition = ()=>{
      if(position % 2 === 0){
        setBackgrond("variant")
      }
    }
    getPosition()
  }, [])

return ( 
  <>
       <li className={`${background} comment user-comment`}>
          <div className={`${background} info`}>
            <a href="#">{customer.name}</a> 
            
            <div>
            <span clasname="date">{comment.date}</span>
            </div>
          </div>

          <a className="avatar" href="#">
            <img
              src={customer?.image}
              width="35"
              alt="Profile Avatar"
              title={customer?.name}
              />
              {/* {customer.type && (<span clasname="adm-svg"><FaCrown class="adm-svg"/></span>)} */}
          </a>

          <p className={background}>
            <span className={background}>{comment?.content}</span>
          </p>
        </li>
        {comment?.replies?.map((reply) => <Reply background={background} reply={reply} key={reply.id}/>)}
      <div className="replies">
        <button onClick={FinishComment}>responder</button>
        <input value={replyComment} onChange={handleReplyComment} placeholder="Escreva um comentário..."/>
      </div>
    </>
   );
}
 
export default memo(Comment);