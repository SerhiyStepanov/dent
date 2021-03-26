import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import s from "./contacts.module.css";

export default function Contacts() {
  return (
    <div className={s.thumb}>
      <b>Наша адреса:</b>
      <address>
        <div className={s.box}>
          <FaMapMarkerAlt
            style={{
              display: "flex",
              marginRight: "10px",
              fontSize: "16px",
              fill: "var(--accent-color)",
            }}
          />
          <p className={s.text}>м.Львів, вул.Манастирського 2 / 1 </p>
        </div>

        <div className={s.box}>
          <FaEnvelope
            style={{
              display: "flex",
              marginRight: "10px",
              fontSize: "16px",
              fill: "var(--accent-color)",
            }}
          />
          <a href="mailto:adnanrasho@gmail.com" className={s.link}>
            adnanrasho@gmail.com
          </a>
        </div>

        <div className={s.box}>
          <FaPhoneAlt
            style={{
              display: "flex",
              marginRight: "10px",
              fontSize: "16px",
              fill: "var(--accent-color)",
            }}
          />
          <a href="tel:+380676700770" className={s.link}>
            +38 067 670 0770
          </a>
        </div>

        <div className={s.box}>
          <FaPhoneAlt
            style={{
              display: "flex",
              marginRight: "10px",
              fontSize: "16px",
              fill: "var(--accent-color)",
            }}
          />
          <a href="tel:+380634745565" className={s.link}>
            +38 063 474 5565
          </a>
        </div>
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
// FaEnvelope

// FaMapMarkerAlt

// FaPhoneAlt
