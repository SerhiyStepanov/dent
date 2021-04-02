import WorkSchedule from "../WorkSchedule";
import SocialNetworks from "../SocialNetworks";
import s from "./footer.module.css";
import Contacts from "../Contacts";

export default function Footer() {
  return (
    <div className={s.wrapper}>
      <Contacts />

      <WorkSchedule />

      <SocialNetworks />
    </div>
  );
}
