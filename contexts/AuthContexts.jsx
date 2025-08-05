// we are using this component to store the user data for re use or implementation of other features like profile, settings etc.

import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    // This is the state for user
    // If not null users would be redirected to the home page if so welcome page
    const [user,setUser] = useState(null)

    // use the set the session for user to redirect them to the home page 
    const setAuth = (authUser) => {
        setUser(authUser)
    }

    // same as setAuth but for user data
    const setUserData = (userData) => {
        // setUser(...userData)
        setUser({...userData})
    }

    return (
        <AuthContext.Provider value={{user, setAuth, setUserData}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
