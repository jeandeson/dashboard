import React from 'react';
import Input from '../../shared/Input/Input'
import {CgMenu} from "react-icons/cg"
import {CgProfile} from "react-icons/cg"
import './header.css'

const Header = ({handleTranslate}) => {
  return ( 
    <div className="header">
      <CgMenu className="svg-header" onClick={handleTranslate}></CgMenu>
      <Input/>
      <CgProfile className="svg-header"/>
    </div>
   );
}
 
export default Header;