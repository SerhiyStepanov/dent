import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import s from "./socialNetworks.module.css";

export default function SocialNetworks() {
  return (
    <div className={s.iconBox}>
      <a
        href="https://www.facebook.com/AdnanDentLviv"
        target="_blank"
        rel="noreferrer"
        aria-label="facebook"
        className={s.iconLink}
      >
        <FaFacebookF className={s.icon} />
      </a>
      <a
        href="https://www.instagram.com/adnan.dent.dentistry/"
        target="_blank"
        rel="noreferrer"
        aria-label="instagram"
        className={s.iconLink}
      >
        <FaInstagram className={s.icon} />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=380676700770"
        target="_blank"
        rel="noreferrer"
        aria-label="whatsapp"
        className={s.iconLink}
      >
        <FaWhatsapp className={s.icon} />
      </a>
    </div>
  );
}
