import { createPortal } from "react-dom";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./buttonCall.module.css";

const btnCall = document.querySelector("#buttonCall");

export default function ButtonCall() {
  return createPortal(
    <div className={s.thumb}>
      <a href="tel:+380676700770" className={s.link}>
        <FaPhoneAlt className={s.icon} />
      </a>
    </div>,
    btnCall
  );
}
