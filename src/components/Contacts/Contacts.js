import { FaFacebookF, FaInstagram } from "react-icons/fa";
import s from "./contacts.module.css";

export default function Contacts() {
  return (
    <div className={s.thumb}>
      <b>Наша адреса:</b>
      <address>
        <p className={s.text}>м.Львів, вул.Манастирського 2 / 1 </p>

        <a href="mailto:adnanrasho@gmail.com" className={s.link}>
          adnanrasho@gmail.com
        </a>
        <br />
        <a href="tel:+380676700770" className={s.link}>
          +38 067 670 0770
        </a>
        <br />
        <a href="tel:+380634745565" className={s.link}>
          +38 063 474 5565
        </a>
      </address>
      <div className={s.iconBox}>
        <a href="https://www.facebook.com/AdnanDentLviv" className={s.iconLink}>
          <FaFacebookF className={s.icon} />
        </a>
        <a
          href="https://www.instagram.com/adnan.dent.dentistry/"
          className={s.iconLink}
        >
          <FaInstagram className={s.icon} />
        </a>
      </div>
    </div>
  );
}
