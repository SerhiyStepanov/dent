import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import s from "./contacts.module.css";

export default function Contacts() {
  return (
    <div className={s.thumb}>
      <b>Контакти</b>

      <address>
        <div className={s.box}>
          <FaMapMarkerAlt className={s.icon} />
          <p className={s.text}>м.Львів, вул.Манастирського 2/1 </p>
        </div>

        <div className={s.box}>
          <FaEnvelope className={s.icon} />
          <a href="mailto:adnanrasho@gmail.com" className={s.link}>
            adnanrasho@gmail.com
          </a>
        </div>

        <div className={s.box}>
          <FaPhoneAlt className={s.icon} />
          <a href="tel:+380676700770" className={s.link}>
            38 067 670 0770
          </a>
        </div>
      </address>
    </div>
  );
}
