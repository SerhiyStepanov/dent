import { useEffect } from "react";
import s from "./modal.module.css";

export default function Modal({ closeModal, card }) {
  const { url, alt, name, title, descr } = card;
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  };

  const clickOnBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={s.backdrop} onClick={clickOnBackdrop}>
      <div className={s.modal}>
        <div className={s.thumb}>
          <img src={url} alt={alt} className={s.photo} />
          <p className={s.name}>{name}</p>
          <p className={s.title}>{title}</p>
          <p className={s.descr}>{descr}</p>
        </div>
      </div>
    </div>
  );
}
