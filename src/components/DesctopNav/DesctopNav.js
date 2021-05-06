import { NavLink } from "react-router-dom";
import s from "./desctopNav.module.css";

export default function DesctopNav() {
  return (
    <nav className={s.navigation}>
      <NavLink exact to="/" className={s.link} activeClassName={s.activLink}>
        Головна
      </NavLink>

      <NavLink to="/team" className={s.link} activeClassName={s.activLink}>
        Спеціалісти
      </NavLink>

      <NavLink to="/service" className={s.link} activeClassName={s.activLink}>
        Послуги
      </NavLink>
    </nav>
  );
}
