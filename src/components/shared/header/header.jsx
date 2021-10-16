import React from 'react';
import Input from '../../shared/Input/Input'
import {CgMenu} from "react-icons/cg"
import {useAccountContext} from "../../../contexts/accountContexts"
import './header.css'

const Header = ({handleTranslate}) => {
  const {account } = useAccountContext()
  return ( 
    <div className="header">
      <CgMenu className="svg-header" onClick={handleTranslate}></CgMenu>
      <Input/>
      <div className="account-img-container">
       <img src={account?.image} alt="" />
      </div>
    </div>
   );
}
 
export default Header;