import React, { useEffect } from 'react';
import Nav from "../nav/Nav"
import Header from "../header/header"
import { useState } from 'react';
import {useHistory} from "react-router-dom"
import { useAccountContext } from '../../../contexts/accountContexts';

   const Navigation = () => {

  const [hideNav, setHideNav] = useState(false)

  const {account} = useAccountContext()

  const history = useHistory()
  
  const [translate, setTranslate] = useState("");

  const [istTranslate, setIstTranslate] = useState(false);

  useEffect(() => {
    const isHide = () => {
      if(history.location.pathname === "/login"){
        setHideNav(true)
      }
      else{
        setHideNav(false)
      }
    }
    isHide();
  }, [account])

  const handleTranslate = () => {
    if (istTranslate === false) {
      setTranslate("translate")
      setIstTranslate(true)
    }
    else {
      setTranslate("")
      setIstTranslate(false)
    }
  }

  return ( 
      <>
      {hideNav === false ?(
        <>
          <Nav translate={translate} handleTranslate={handleTranslate} />
          <Header translate={translate} handleTranslate={handleTranslate} />
        </>
      ): null}
      </>
   );
}
 
export default Navigation;