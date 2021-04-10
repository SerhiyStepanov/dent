import BoxView from "../components/BoxView";
import Treatment from "../components/Treatment";
import BabyDantist from "../components/BabyDantist";

export default function ServiceViews() {
  return (
    <div>
      <BoxView>
        <h3 style={{ textAlign: "center", color: "var(--dark-color)" }}>
          Перелік усіх послуг
        </h3>

        <Treatment />

        <BabyDantist />
      </BoxView>
    </div>
  );
}
