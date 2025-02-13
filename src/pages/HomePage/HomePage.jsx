import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homeContainer}>
      <div className={s.textBox}>
        <h1 className={s.title}>Welcome to the Phonebook App!</h1>
        <p className={s.subtitle}>Manage your contacts easily and efficiently.</p>
      </div>
    </div>
  );
};

export default HomePage;

