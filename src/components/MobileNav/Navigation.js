import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaTooth, FaBars, FaTimes } from "react-icons/fa";
import MenuButton from "../MenuButton/MenuButton";
import s from "./navigation.module.css";

export default function Navigation() {
  const [menu, setMenu] = useState(false);

  const menuBtnClick = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <>
      <div className={s.thumb}>
        <Link to="/" className={s.iconLink}>
          <FaTooth className={s.iconTooth} />
        </Link>

        {menu && (
          <nav className={s.navigation}>
            <NavLink
              exact
              to="/"
              className={s.link}
              activeClassName={s.activLink}
            >
              Головна
            </NavLink>

            <NavLink
              exact
              to="/team"
              className={s.link}
              activeClassName={s.activLink}
            >
              Спеціалісти
            </NavLink>

            <NavLink
              exact
              to="/service"
              className={s.link}
              activeClassName={s.activLink}
            >
              Послуги
            </NavLink>
          </nav>
        )}

        <MenuButton onClick={menuBtnClick}>
          {menu ? (
            <FaTimes className={s.icon} />
          ) : (
            <FaBars className={s.icon} />
          )}
        </MenuButton>
      </div>
    </>
  );
}
