import React from 'react'

const ProtectedRoute = ({ isAuth, children }) => {

    if (!isAuth) {

        <Navigate to='/login' />

        retrun({ children })
    }

    return (
        <div>Login</div>
    )
}

export default ProtectedRoute