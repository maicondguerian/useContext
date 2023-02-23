import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

export default function Login() {
  const {
    error,
    isLoggedIn,
    usernameValid,
    passwordValid,
    usernameInputRef,
    passwordInputRef,
    handleInputChange,
    handleSubmit,
  } = useContext(LoginContext);

  return (
    <form>
      {error && <p>{error}</p>}
      <div>
        <label htmlFor="username">Usuário</label>
        <input
          type="text"
          id="username"
          name="username"
          ref={usernameInputRef}
          onChange={handleInputChange}
          className={usernameValid ? "valid" : ""}
        />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          ref={passwordInputRef}
          onChange={handleInputChange}
          className={passwordValid ? "valid" : ""}
        />
      </div>
      <button onClick={handleSubmit}>{isLoggedIn ? 'Entrando' : 'Entrar'}</button>
    </form>
  );
}
