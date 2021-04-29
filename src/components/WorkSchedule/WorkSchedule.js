import s from "./workSchedule.module.css";

export default function WorkSchedule() {
  return (
    <div className={s.thumb}>
      <b>Графік роботи</b>
      <p className={s.text}>
        Понеділок - п'ятниця:<span className={s.time}>09:00 – 19:30.</span>
      </p>
      <p className={s.text}>
        Субота:<span className={s.time}>09:00 – 15:00.</span>
      </p>
      <p className={s.text}>
        Неділя:<i>ЗАЧИНЕНО</i>
      </p>
    </div>
  );
}
