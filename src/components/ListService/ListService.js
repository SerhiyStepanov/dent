import { NavLink, useRouteMatch } from "react-router-dom";
import service from "./listService.json";
import s from "./listService.module.css";

export default function ListService() {
  const { url, path } = useRouteMatch();
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {service.map((el, index) => (
          <li key={index} className={s.listItem}>
            <NavLink
              exact
              to={`${url}/${el.descr}`}
              className={s.link}
              activeClassName={s.activLink}
            >
              {el.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
