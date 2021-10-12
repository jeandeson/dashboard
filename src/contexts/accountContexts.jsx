import  {createContext, useContext, useState, useEffect} from 'react';
// import ManagerService from '../services/ManagerService'

const AccountContext = createContext({

})

const AccountProvider = ({children}) => {
  const [account, setAccount] = useState(undefined)

  useEffect(() =>{
    async function isValidUser(){
      const isLogged = JSON.parse(localStorage.getItem("account"))
      if(isLogged){
        setAccount(isLogged)
        console.log("deu certo", isLogged)
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