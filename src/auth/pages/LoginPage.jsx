import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import styles from "./LoginPage.module.css";
import loginLogo from "../../assets/loginLogo.png"

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Return") {
      handleLogin();
    }
  };

  const handleLogin = () => {
    // ! VERIFICACION DE NOMBRE
    if (username.trim().length < 3) {
      // El campo de entrada está vacío, no se realiza el inicio de sesión
      return;
    }

    const lastPath = localStorage.getItem("lastPath") || "/";

    login(username);

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className={styles.main}>
      <div id={styles.container}>
        <img
          className={styles.logo}
          src={loginLogo}
        />
        <h1>Henry Games</h1>
        <section className={styles.welcome}>
          <ul className={styles.buttons}>
            <li>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                onKeyDown={handleKeyDown} // Agrega esta línea
                required={true}
                autoComplete="off"
                placeholder="Ingresa tu nombre"
              />
              <a
                className={`${styles.primary} ${
                  username.trim().length < 3 ? styles.disabled : ""
                }`}
                href="#"
                onClick={handleLogin}
              >
                Entrar
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
