import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import s from "./socialNetworks.module.css";

export default function SocialNetworks() {
  return (
    <div className={s.iconBox}>
      <a
        href="https://www.facebook.com/AdnanDentLviv"
        target="_blank"
        rel="noreferrer"
        className={s.iconLink}
      >
        <FaFacebookF className={s.icon} />
      </a>
      <a
        href="https://www.instagram.com/adnan.dent.dentistry/"
        target="_blank"
        rel="noreferrer"
        className={s.iconLink}
      >
        <FaInstagram className={s.icon} />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=380676700770"
        className={s.iconLink}
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className={s.icon} />
      </a>
    </div>
  );
}
