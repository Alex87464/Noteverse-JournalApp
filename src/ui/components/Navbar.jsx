import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import Logo from "../../assets/AOicon.png";
import styles from './Navbar.module.css';

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (

      <nav>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo Image" />
        </div>
        <div className={`${styles.hamburger} ${isOpen ? styles.toggle : ''}`} onClick={toggleMenu}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
        <ul className={`${styles["nav-links"]} ${isOpen ? styles.open : ''}`}>
          <li>
            <NavLink to="/games">Home</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
          <li>
            <NavLink to="/upload">Upload</NavLink>
          </li>
          <li>
            <span className={styles["username-button"]} href="#">
              {user?.name}
            </span>
          </li>
          <li>
            <button className={styles["join-button"]} onClick={handleLogout}>
              Sign Out
            </button>
          </li>
        </ul>
      </nav>

  );
};
