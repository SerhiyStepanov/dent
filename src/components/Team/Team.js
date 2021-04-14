import team from "../../team.json";
import s from "./team.module.css";

export default function Team() {
  return (
    <div>
      <ul className={s.wrapper}>
        {team.map(({ url, alt, name, title, descr }, index) => (
          <li key={index} className={s.list}>
            <div className={s.thumb}>
              <img src={url} alt={alt} className={s.photo} />
              <p className={s.name}>{name}</p>
              <p className={s.title}>{title}</p>
              <p className={s.descr}>{descr}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
