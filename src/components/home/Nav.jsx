import React from 'react';
import './Nav.css'
import {CgHome, CgUserList} from "react-icons/cg"
import {BiMessageSquare} from "react-icons/bi"
import {IoMdHelp} from "react-icons/io"
import {FiSettings} from "react-icons/fi"
import {RiLockPasswordLine} from "react-icons/ri"
import {VscSignOut} from "react-icons/vsc"
import {DiAtom} from "react-icons/di"

const Nav = props => {
  const {translate, handleTranslate} = props

  return ( 
    <div className="nav-container">
      <div className={`${translate} nav`}>
        <div  onClick={handleTranslate}  className="nav-item-container brand">
            <DiAtom className="icon"/>
        </div>
        <div className="nav-item-container">
            <CgHome className="icon"/>
            <span className={`${translate}`}><strong>Home</strong></span>
        </div>
        <div className="nav-item-container">
            <CgUserList className="icon"/>
            <span className={`${translate}`}><strong>Customers</strong></span>
        </div>
        <div className="nav-item-container">
            <BiMessageSquare className="icon"/>
            <span className={`${translate}`}><strong>Messages</strong></span>
        </div>
        <div className="nav-item-container">
            <IoMdHelp className="icon"/>
            <span className={`${translate}`}><strong>Help</strong></span>
        </div>
        <div className="nav-item-container">
            <FiSettings className="icon"/>
            <span className={`${translate}`}><strong>Settings</strong></span>
        </div>
        <div className="nav-item-container">
            <RiLockPasswordLine className="icon"/>
            <span className={`${translate}`}><strong>Password</strong></span>
        </div>
        <div onClick={localStorage.removeItem("account")} className="nav-item-container">
            <VscSignOut className="icon"/>
            <span className={`${translate}`}><strong>Signout</strong></span>
        </div>
      </div>
    </div>
   );
}
 
export default Nav;