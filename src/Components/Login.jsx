import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import styles from "./Login.module.css";

export default function Login() {
  const { setUser, setLogin } = useContext(LoginContext);

  return (
    <>
      <div
        className={`${styles["login-wrapper"]} ${styles["container-wrapper"]}`}
      >
        <h1>Login</h1>
        <input
          type="text"
          placeholder="User"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <input type="text" placeholder="Password" />
      </div>
      <button onClick={() => setLogin(true)}>Login</button>
    </>
  );
}
