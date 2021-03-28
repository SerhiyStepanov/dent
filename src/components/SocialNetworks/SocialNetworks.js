import { FaFacebookF, FaInstagram } from "react-icons/fa";
import s from "./socialNetworks.module.css";

export default function SocialNetworks() {
  return (
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
  );
}
