import toast from "react-hot-toast";
import { MdOutlineImageSearch } from "react-icons/md";
import style from "./SearchBar.module.css";
import { FC, FormEvent } from "react";
import { SearchBarProps } from "./SearchBar.types";

export const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const value = (event.target as HTMLFormElement).searchText.value.trim();

    if (value === "") {
      toast.error("Please enter text to search for images");
      return;
    }
    onSubmit(value);

    (event.target as HTMLFormElement).searchText.value = "";
  };

  return (
    <header className={style.header}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          className={style.input}
          name="searchText"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={style.btn} type="submit">
          <MdOutlineImageSearch size={35} />
        </button>
      </form>
    </header>
  );
};
