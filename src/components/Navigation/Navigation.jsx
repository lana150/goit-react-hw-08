import { NavLink } from "react-router-dom";
/*import styles from "./Navigation.module.css";*/

const Navigation = () => {

  return (
    /*<nav className={styles.nav}>
      <NavLink to="/" className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}>
        Contacts
      </NavLink>
    </nav>*/
 
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
     );
};
  


export default Navigation;
