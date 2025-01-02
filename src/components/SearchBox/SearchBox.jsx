import { useId } from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ search, setSearch }) => {
  const contactsId = useId();
  return (
    <>
      <div className={s.container}>
        <label className={s.labelSearch} htmlFor={contactsId}>
          Find contacts by name
        </label>
        <input
          className={s.inputSearch}
          type="text"
          id={contactsId}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </>
  );
};
export default SearchBox;