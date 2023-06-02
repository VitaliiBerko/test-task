import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.scss";

export const AuthNav = () => {
  return (
    <ul className={styles.wrapper}>
      <li>
        <NavLink
          to="/"
        
          className={({isActive}) => (isActive ? styles.active : styles.link)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tweets"
          
          className={({isActive}) => (isActive ? styles.active : styles.link)}
        >
          Tweets
        </NavLink>
      </li>
    </ul>
  );
};
