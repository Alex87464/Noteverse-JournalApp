import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handleLogin = () => {
    if (username.trim() === '') {
      // El campo de entrada está vacío, no se realiza el inicio de sesión
      return;
    }

    const lastPath = localStorage.getItem('lastPath') || '/';

    login(username);

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required={true}
              autoComplete="off"
            />
            <label>Username</label>
          </div>
          <button
            className="login-button"
            href="#"
            onClick={handleLogin}
            disabled={username.trim() === ''}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
