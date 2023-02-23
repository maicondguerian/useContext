import {useState, useRef} from 'react'
import Login from './Components/Login'
import { Profile } from './Components/Profile'
import { LoginContext } from './Context/LoginContext'

function App() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState(false)
  const [error, setError] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState();
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [buttonText, setButtonText] = useState('Entrar');

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
  
    if (user === "") {
      setError("Por favor, preencha o campo Usuário.");
      inputFocus("username");
    } else if (password === "") {
      setError("Por favor, preencha o campo Senha.");
      inputFocus("password");
    } else if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      inputFocus("password");
    } else {
      setButtonText('Entrando...');
      setTimeout(() => {
        setLogin(true);
        setIsLoggedIn(true); // define isLoggedIn como true quando o login for bem-sucedido
        setButtonText('Entrar');
      }, 3000);
    }
  };
  
  const inputFocus = (fieldName) => {
    if (fieldName === "username" && usernameInputRef.current) {
      setUsernameValid(false);
      usernameInputRef.current.focus();
      usernameInputRef.current.style.border = "1px solid #d63a59";
      passwordInputRef.current.style.border = "1px solid #ccc";
    } else if (fieldName === "password" && passwordInputRef.current) {
      setPasswordValid(false);
      passwordInputRef.current.focus();
      passwordInputRef.current.style.border = "1px solid #d63a59";
      usernameInputRef.current.style.border = "1px solid #ccc";
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setUser(value);
      setUsernameValid(!!value);
      usernameInputRef.current.style.border = "1px solid #ccc";
    } else if (name === "password") {
      setPassword(value);
      setPasswordValid(value.length >= 6);
      passwordInputRef.current.style.border = "1px solid #ccc";
    }
  };


  return (
    <div>
      <LoginContext.Provider value={{ 
        user,
        setUser,
        setPassword,
        password,
        error,
        login,
        setLogin,
        usernameValid,
        passwordValid,
        usernameInputRef,
        passwordInputRef,
        handleInputChange,
        handleSubmit,
        isLoggedIn,
        setIsLoggedIn,
        buttonText
        
        }}>
       {isLoggedIn ? <Profile/> : <Login/> } 
      </LoginContext.Provider>
    </div>
  )
}

export default App