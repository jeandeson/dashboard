import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai'

import "./input.css"

const Input = () => {
  return ( 

    <div className="input-container">
      <AiOutlineSearch/>
      <input placeholder="Search here" className="input" type="text" />
    </div>

   );
}
 
export default Input;