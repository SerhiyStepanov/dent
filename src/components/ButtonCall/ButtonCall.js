import { FaPhoneAlt } from "react-icons/fa";
import s from "./buttonCall.module.css";

export default function ButtonCall() {
  return (
    <div className={s.thumb}>
      <a href="" className={s.link}>
        <FaPhoneAlt className={s.icon} />
      </a>
    </div>
  );
}
