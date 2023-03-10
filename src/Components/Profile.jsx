import {useContext} from 'react'
import { LoginContext } from '../Context/LoginContext'
import Login from './Login'

export const Profile = () => {
  const { user, setLogin, setUser, setPassword, password, isLoggedIn, setIsLoggedIn} = useContext(LoginContext)

  const handleLogOut = () =>{
    setLogin(false);
    setUser('');
    setPassword('');
    setIsLoggedIn(false); // define isLoggedIn como false ao fazer logout
  }
  return (
    <>
     { isLoggedIn ? (
        <>
        <h1>Profile</h1>
        <p>user: {user}</p>
        <p>password: {password} </p>
        <button onClick={handleLogOut}>Sair</button>
        </>
     ): (<Login/>)}
       
    </>
  )
}
