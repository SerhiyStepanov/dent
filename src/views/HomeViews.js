import BoxView from "../components/BoxView";
import LinkGoTo from "../components/LinkGoTo";
import WorkSchedule from "../components/WorkSchedule";

export default function HomeViews() {
  return (
    <div>
      <h3 style={{ textAlign: "center", color: "var(--dark-color)" }}>
        Dentistry
      </h3>
      <BoxView>
        <h4 style={{ textAlign: "center", fontSize: "18px" }}>Наші лікарі:</h4>
        <LinkGoTo text={"Детальніше"} props={"/team"} />
      </BoxView>

      <BoxView>
        <h4 style={{ textAlign: "center", fontSize: "18px" }}>Послуги:</h4>
        <LinkGoTo text={"Детальніше"} props={"/service"} />
      </BoxView>

      <BoxView>
        <h4 style={{ textAlign: "center", fontSize: "18px" }}>
          Більше про нас:
        </h4>
        <WorkSchedule />
      </BoxView>

      <LinkGoTo text={"Детальніше"} props={"/contacts"} />
    </div>
  );
}
