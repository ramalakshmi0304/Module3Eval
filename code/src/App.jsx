import React from 'react'
import ProtectedRoute from './routes/ProtectedRoute';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

const App = () => {

  const [isAuthAdmin, setIsAuthAdmin] = useState(false);

  return (

    <div>

      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}/>
          <ProtectedRoute isAuth={isAuth}>
          <Route path='/admin/dashboard' element={<Admin/>}/>
          <Route path='/customers/dashboard' element={<Customer/>}/>
          </ProtectedRoute>
          <Route path='*' Navigate to ='/login'/>
        </Routes>
      </BrowserRouter>
      </AuthProvider>

    </div>
  )
}

export default App