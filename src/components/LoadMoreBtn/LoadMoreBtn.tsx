import { FC } from "react";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";
import style from "./LoadMoreBtn.module.css";

export const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={style.btn} onClick={onClick}>
      Load more
    </button>
  );
};
