import team from "../../team.json";
import s from "./team.module.css";

export default function Team({ children }) {
  return (
    <div>
      <ul className={s.wrapper}>
        {team.map(({ url, alt, name, title, descr }, index) => (
          <li key={index} className={s.list}>
            <div className={s.thumb}>
              <img src={url} alt={alt} />
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
