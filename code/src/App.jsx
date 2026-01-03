import React from 'react'

const App = () => {

  const [isAuth, setIsAuth] = useState(false)

  return (


    <div>
      <BrowserRoute>
        <routes>
          <route path='/' element={admi}


        </routes>
      </BrowserRoute>

    </div>
  )
}

export default App