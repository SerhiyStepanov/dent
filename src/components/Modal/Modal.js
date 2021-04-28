import { useEffect } from "react";
import s from "./modal.module.css";

export default function Modal({ closeModal, card }) {
  const { url, alt, name, title } = card;

  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      closeModal();
    }
  };

  const clickOnBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={s.backdrop} onClick={clickOnBackdrop}>
      <div className={s.modal}>
        <div className={s.thumb}>
          <img src={url} alt={alt} className={s.photo} />
          <div className={s.content}>
            <p className={s.name}>{name}</p>
            <p className={s.title}>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
