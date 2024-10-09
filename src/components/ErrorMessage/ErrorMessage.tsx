import style from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <b className={style.textError}>
      Error: Invalid request. Please check your input and try again
    </b>
  );
}
