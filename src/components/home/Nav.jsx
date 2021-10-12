import React from 'react';
import './Nav.css'
import {CgHome, CgUserList} from "react-icons/cg"
import {BiMessageSquare} from "react-icons/bi"
import {IoMdHelp} from "react-icons/io"
import {FiSettings} from "react-icons/fi"
import {RiLockPasswordLine} from "react-icons/ri"
import {VscSignOut} from "react-icons/vsc"
import {AiFillApple} from "react-icons/ai"

const Nav = props => {
  const {translate, handleTranslate} = props

  return ( 
    <div className="nav-container">
      <div className={`${translate} nav`}>
        <div  onClick={handleTranslate}  className="nav-item-container header">
            <AiFillApple className="icon menu"/>
            <h2 className="title">Brand Name</h2>
        </div>
        <div className="nav-item-container">
            <CgHome className="icon"/>
            <span><strong>Home</strong></span>
        </div>
        <div className="nav-item-container">
            <CgUserList className="icon"/>
            <span><strong>Customers</strong></span>
        </div>
        <div className="nav-item-container">
            <BiMessageSquare className="icon"/>
            <span><strong>Messages</strong></span>
        </div>
        <div className="nav-item-container">
            <IoMdHelp className="icon"/>
            <span><strong>Help</strong></span>
        </div>
        <div className="nav-item-container">
            <FiSettings className="icon"/>
            <span><strong>Settings</strong></span>
        </div>
        <div className="nav-item-container">
            <RiLockPasswordLine className="icon"/>
            <span><strong>Password</strong></span>
        </div>
        <div onClick={localStorage.removeItem("account")} className="nav-item-container">
            <VscSignOut className="icon"/>
            <span><strong>Signout</strong></span>
        </div>
      </div>
    </div>
   );
}
 
export default Nav;