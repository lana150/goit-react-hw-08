import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Contact Book!</h1>
      <p className={styles.subtitle}>Save and manage your contacts easily.</p>
    </div>
  );
};

export default HomePage;
