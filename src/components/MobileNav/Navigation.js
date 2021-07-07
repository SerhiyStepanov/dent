import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaTooth, FaBars, FaTimes } from "react-icons/fa";
import MenuButton from "../MenuButton/MenuButton";
import s from "./navigation.module.css";

export default function Navigation() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const bodyEl = document.getElementsByTagName("body")[0];

  const menuItemClick = () => {
    bodyEl.classList.remove("overflow-hidden");
    setMenuIsOpen(false);
  };

  const menuBtnClick = () => {
    setMenuIsOpen((prevState) => !prevState);

    !menuIsOpen
      ? bodyEl.classList.add("overflow-hidden")
      : bodyEl.classList.remove("overflow-hidden");
  };

  return (
    <>
      <div className={s.thumb}>
        <Link
          to="/"
          className={s.iconLink}
          onClick={() => setMenuIsOpen(false)}
        >
          <FaTooth className={s.iconTooth} />
        </Link>

        {menuIsOpen && (
          <nav className={s.navigation}>
            <NavLink
              exact
              to="/"
              className={s.link}
              activeClassName={s.activLink}
              onClick={() => menuItemClick()}
            >
              Головна
            </NavLink>

            <NavLink
              exact
              to="/team"
              className={s.link}
              activeClassName={s.activLink}
              onClick={() => menuItemClick()}
            >
              Спеціалісти
            </NavLink>

            <NavLink
              exact
              to="/service"
              className={s.link}
              activeClassName={s.activLink}
              onClick={() => menuItemClick()}
            >
              Послуги
            </NavLink>
          </nav>
        )}

        <MenuButton onClick={menuBtnClick}>
          {menuIsOpen ? (
            <FaTimes className={s.icon} />
          ) : (
            <FaBars className={s.icon} />
          )}
        </MenuButton>
      </div>
    </>
  );
}
