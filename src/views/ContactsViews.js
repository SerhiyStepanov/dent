import BoxView from "../components/BoxView";
import WorkSchedule from "../components/WorkSchedule";
import SocialNetworks from "../components/SocialNetworks";
import Contacts from "../components/Contacts";

export default function ContactsViews() {
  return (
    <div>
      <BoxView>
        <h3 style={{ textAlign: "center", color: "var(--dark-color)" }}>
          Contacts
        </h3>

        <WorkSchedule />

        <Contacts />

        <SocialNetworks />
      </BoxView>
    </div>
  );
}
