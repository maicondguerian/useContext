import {useState} from 'react'
import Login from './Components/Login'
import { Profile } from './Components/Profile'
import { LoginContext } from './Context/LoginContext'

function App() {
  const [user, setUser] = useState('')
  const [login, setLogin] = useState(false)

  return (
    <div>
      <LoginContext.Provider value={{ 
        setUser,
        user,
        setLogin
        }}>
       {login ? <Profile/> : <Login/> } 
      </LoginContext.Provider>
    </div>
  )
}

export default App