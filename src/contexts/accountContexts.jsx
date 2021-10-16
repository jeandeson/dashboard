import  {createContext, useContext, useState, useEffect} from 'react';
import  Navigation  from "../components/shared/navigation/Navigation"
import {useHistory} from 'react-router-dom'

const AccountContext = createContext({

})

const AccountProvider = ({children}) => {

  const [account, setAccount] = useState(undefined)

  useEffect(() =>{
    async function isValidUser(){
      const isLogged = JSON.parse(localStorage.getItem("account"))
      alert(isLogged)
      if(isLogged){
        setAccount(isLogged)

      }
    }
    isValidUser()
  }, [])

  return(
    <AccountContext.Provider value={{account, setAccount}}>
      {children}
    </AccountContext.Provider>
  )
}

const useAccountContext = () => useContext(AccountContext)

export { useAccountContext, AccountProvider };