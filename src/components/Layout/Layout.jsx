import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import styles from "./Layout.module.css";


const Layout = () => {
   return (
    <div className={styles.layoutContainer}>
      <AppBar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};
  
export default Layout;
