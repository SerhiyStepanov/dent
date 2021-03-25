import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaTooth, FaBars, FaTimes } from "react-icons/fa";
import MenuButton from "../MenuButton/MenuButton";
import s from "./navigation.module.css";

export default function Navigation() {
  const [menu, setMenu] = useState(false);

  const menuBtnClick = (e) => {
    setMenu((prevState) => (prevState = !prevState));
  };
  return (
    <>
      <div className={s.thumb}>
        <Link exact to="/" className={s.iconLink}>
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
              to="/price"
              className={s.link}
              activeClassName={s.activLink}
            >
              Price
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
      <hr />
    </>
  );
}
