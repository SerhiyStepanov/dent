import { NavLink } from "react-router-dom";
import s from "./desctopNav.module.css";

export default function DesctopNav() {
  return (
    <nav className={s.navigation}>
      <NavLink exact to="/" className={s.link} activeClassName={s.activLink}>
        Home
      </NavLink>

      <NavLink
        exact
        to="/team"
        className={s.link}
        activeClassName={s.activLink}
      >
        Team
      </NavLink>

      <NavLink
        exact
        to="/service"
        className={s.link}
        activeClassName={s.activLink}
      >
        Service
      </NavLink>

      <NavLink
        exact
        to="/contacts"
        className={s.link}
        activeClassName={s.activLink}
      >
        Cocntacts
      </NavLink>
    </nav>
  );
}
