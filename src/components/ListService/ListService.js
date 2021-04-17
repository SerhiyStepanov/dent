import service from "./listService.json";
import s from "./listService.module.css";

export default function ListService() {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {service.map((str, index) => (
          <li key={index} className={s.listItem}>
            <p className={s.text}>{str}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
