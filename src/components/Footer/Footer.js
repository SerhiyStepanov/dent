import WorkSchedule from "../WorkSchedule";
import SocialNetworks from "../SocialNetworks";
import s from "./footer.module.css";
import Contacts from "../Contacts";

export default function Footer() {
  return (
    <div className={s.wrapper}>
      <div className={s.thumb}>
        <Contacts />

        <WorkSchedule />

        <SocialNetworks />
      </div>

      <hr
        style={{
          backgroundColor: "var(--light-color)",
        }}
      ></hr>
      <p className={s.text}>Copyright © 2021.</p>
    </div>
  );
}
