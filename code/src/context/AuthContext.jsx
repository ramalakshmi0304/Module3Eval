import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState("")
    const navigate= useNavigate();

    user=[{email,password}]

    const login=()=>{

         if(email==="admin@gmail.com" && password=="admin1234"){
            navigate(/admin/dashboard)
         } else if(email==="customer@gmail.com" && password=="customer1234"){

         }else{"alert incorrect email and password"

         }
    }
   const logout=()=>{
    setUser(null)
   }

return (
    <div>
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>

    </div>
)
}

export default AuthContext;