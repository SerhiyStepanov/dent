import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaTooth, FaBars, FaTimes } from "react-icons/fa";
import MenuButton from "../MenuButton/MenuButton";
import s from "./navigation.module.css";

export default function Navigation() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuBtnClick = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={s.thumb}>
        <Link to="/" className={s.iconLink}>
          <FaTooth className={s.iconTooth} />
        </Link>

        {menuIsOpen && (
          <nav className={s.navigation} onClick={() => setMenuIsOpen(false)}>
            <NavLink
              exact
              to="/"
              className={s.link}
              activeClassName={s.activLink}
              // onClick={(e) => e.stopPropagation()}
            >
              Головна
            </NavLink>

            <NavLink
              exact
              to="/team"
              className={s.link}
              activeClassName={s.activLink}
              // onClick={(e) => e.stopPropagation()}
            >
              Спеціалісти
            </NavLink>

            <NavLink
              exact
              to="/service"
              className={s.link}
              activeClassName={s.activLink}
              // onClick={(e) => e.stopPropagation()}
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
