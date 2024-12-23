import React, {createContext, useState , useEffect} from 'react'
import { getLocalStorage } from '../utility/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
      const {employee, admin} = getLocalStorage()
      setUserData({employee,admin})
    }, [])
    

  return (
    <div>
        <AuthContext.Provider value={"Aryan"}>
            {children}
        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
