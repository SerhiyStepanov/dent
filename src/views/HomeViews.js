import BoxView from "../components/BoxView";
import LinkGoTo from "../components/LinkGoTo";

export default function HomeViews() {
  return (
    <div>
      <BoxView>
        <h2 style={{ textAlign: "center", color: "var(--dark-color)" }}>
          Стоматологія <span>Аднан Дент</span>
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--dark-color)",
          }}
        >
          Ми робимо вашу посмішку краще.
        </p>
        <h4 style={{ textAlign: "center", fontSize: "18px" }}>Наші лікарі:</h4>
        <LinkGoTo text={"Детальніше"} props={"/team"} />

        <h4 style={{ textAlign: "center", fontSize: "18px" }}>Послуги:</h4>
        <LinkGoTo text={"Детальніше"} props={"/service"} />
      </BoxView>
    </div>
  );
}
