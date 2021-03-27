import s from "./menuButton.module.css";

export default function MenuButton({ onClick, onMouseOver, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseOver={onMouseOver}
      className={s.button}
    >
      {children}
    </button>
  );
}
