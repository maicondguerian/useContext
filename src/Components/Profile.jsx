import {useContext} from 'react'
import { LoginContext } from '../Context/LoginContext'

export const Profile = () => {
  const { user, setLogin }= useContext(LoginContext)
  return (
    <>
        <h1>Profile </h1>
        <p> user: {user} </p>
        <button onClick={() => setLogin(false)}>sair </button>

    </>
  )
}
