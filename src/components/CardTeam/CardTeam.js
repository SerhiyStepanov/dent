import s from "./cardTeam.module.css";
import team from "../../team.json";

export default function CardTeam() {
  return (
    <>
      <div className={s.thumb}>
        <img src={team[0].url} alt={team[0].alt} className={s.photo} />
        <p className={s.name}>{team[0].name}</p>
        <p className={s.title}>{team[0].title}</p>
        <p className={s.descr}>{team[0].descr}</p>
      </div>
    </>
  );
}
