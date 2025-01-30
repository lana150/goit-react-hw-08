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
        value={filter} 
        onChange={handleChange} 
      />
    </div>
  );
};

export default SearchBox;