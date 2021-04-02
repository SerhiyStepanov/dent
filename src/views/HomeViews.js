import BoxView from "../components/BoxView";
import LinkGoTo from "../components/LinkGoTo";

export default function HomeViews() {
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "var(--dark-color)" }}>
        Стоматологія
      </h2>
      <BoxView>
        <h4 style={{ textAlign: "center", fontSize: "18px" }}>Наші лікарі:</h4>
        <LinkGoTo text={"Детальніше"} props={"/team"} />

        <h4 style={{ textAlign: "center", fontSize: "18px" }}>Послуги:</h4>
        <LinkGoTo text={"Детальніше"} props={"/service"} />
      </BoxView>
    </div>
  );
}
