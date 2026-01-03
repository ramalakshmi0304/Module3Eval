import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'

const login = ({ user }) => {
    const { user } = useContext(AuthContext)
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    
    const sucess=(email,password)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(success)
        alert ("login success")
    }

    return (

        <div>
            <form action={handleSubmit}>
                <input type="email" placeholder='enter email' value={email} onChange={(e) => setemail(e.target.value)} />
                <input type="password" placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>

        </div>
    )
}

export default login