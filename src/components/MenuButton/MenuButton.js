import s from "./menuButton.module.css";

export default function MenuButton({ onClick, children }) {
  return (
    <button type="button" onClick={onClick} className={s.button}>
      {children}
    </button>
  );
}
