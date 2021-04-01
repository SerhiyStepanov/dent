import { useState } from "react";
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
