import { useId } from "react";
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

export default SearchBox;
