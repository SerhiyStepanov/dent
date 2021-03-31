import BoxView from "../components/BoxView";
import Contacts from "../components/Contacts";

export default function ContactsViews() {
  return (
    <div>
      <BoxView>
        <h3 style={{ textAlign: "center", color: "var(--dark-color)" }}>
          Contacts
        </h3>
        <Contacts />
      </BoxView>
    </div>
  );
}
