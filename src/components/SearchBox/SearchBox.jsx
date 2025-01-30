import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const contactsId = useId();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value)); 
  };

  return (
    <div className={s.container}>
      <label className={s.labelSearch} htmlFor={contactsId}>
        Find contacts by name
      </label>
      <input
        className={s.inputSearch}
        type="text"
        id={contactsId}
        value={filter} // Додаємо зв'язок із Redux
        onChange={handleChange} 
      />
    </div>
  );
};

export default SearchBox;





/*import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import { selectFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css"; // Імпортуємо модульні стилі

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={styles.searchBox}>
      <label className={styles.searchLabel}>
        Пошук контактів:
        <input
          type="text"
          className={styles.searchInput}
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
          placeholder="Введіть ім'я..."
        />
      </label>
    </div>
  );
};

export default SearchBox;*/




/*import { useId } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const contactsId = useId();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value)); 
  };

  return (
    <div className={s.container}>
      <label className={s.labelSearch} htmlFor={contactsId}>
        Find contacts by name
      </label>
      <input
        className={s.inputSearch}
        type="text"
        id={contactsId}
        onChange={handleChange} 
      />
    </div>
  );
};

export default SearchBox;*/
