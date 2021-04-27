import { NavLink } from "react-router-dom";
import service from "./listService.json";
import s from "./listService.module.css";

export default function ListService() {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {service.map((str, index) => (
          <li key={index} className={s.listItem}>
            <NavLink
              exact
              to={`/service/${str}`}
              className={s.link}
              activeClassName={s.activLink}
            >
              {str}
              {/* <p className={s.text}>{str}</p> */}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
