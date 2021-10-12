import React, { useState } from "react";
import Comment from "../../components/Comments/Comment"
import { useCommentsContext } from "../../contexts/commentsContexts";
import { useCustomersContext } from "../../contexts/customersContext";
import { useAccountContext } from "../../contexts/accountContexts";
import axios from "../../plugins/axios";

import "../../components/Comments/Comments.css"

const Comments = () => {

  const {comments} = useCommentsContext()
  const {account} = useAccountContext()
  const {setComments} = useCommentsContext()
  
  const {customers} = useCustomersContext()
  
  const [writte, setWritte] = useState("")

  const postComment = async () => {
    const body = {
      content: writte,
      managerID: account.id,
      date: "12 hours ago"
    }
    const {data} = await axios.post("posts", body)
    setComments([...comments, data])
  }

  const handleTextChange = (e) => {
    setWritte(e.target.value)
  }

  return (
    <>
      <ul className="comment-section">
       {comments.map((comment => 
       <Comment key={comment.id} customer={customers.find(customer => customer.id === comment.customerID) || account} 
       comment={comment} position={comments.indexOf(comment)}/>))}

        <li className="write-new">
          <form className="comment-section">
            <textarea value={writte} onChange={handleTextChange}
              placeholder="Write your comment here"
            ></textarea>

            {/* <div className="adm-img">
              <img
                src={account?.image}
                width="35"
                alt="Profile of Bradley Jones"
                title="Bradley Jones" 
              />
            </div> */}
              <button type="button" onClick={postComment}>Submit</button>
          </form>
        </li>
      </ul>
    </>
  );
};

export default Comments;
