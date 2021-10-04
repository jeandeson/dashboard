import React from 'react';
import ReactLoading from "react-loading";
import "./loading.css"

const Loading = ({type, color}) => {
  return ( 
    <div className="loading-container">
      <ReactLoading type={type} color={color}/>
    </div>
   );
}
 
export default Loading;