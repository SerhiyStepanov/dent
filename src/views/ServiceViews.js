import BoxView from "../components/BoxView";
import Treatment from "../components/Treatment";

export default function ServiceViews() {
  return (
    <div>
      <BoxView>
        <h3 style={{ textAlign: "center", color: "var(--dark-color)" }}>
          Послуги
        </h3>
        <Treatment />
      </BoxView>
    </div>
  );
}
