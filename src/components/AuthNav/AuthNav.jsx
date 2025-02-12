import { NavLink } from "react-router-dom";
/*import styles from "./AuthNav.module.css";*/


const AuthNav = () => {

  return (
    <nav>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default AuthNav;
  
   /*return (
     <nav className={styles.authNav}>
      <NavLink to="/register" className={styles.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.link}>
        Login
      </NavLink>
    </nav>
  );
};


export default AuthNav;*/
