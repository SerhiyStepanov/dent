import BoxView from "../components/BoxView";
import LinkGoTo from "../components/LinkGoTo";
import CardTeam from "../components/CardTeam";

export default function HomeViews({ children }) {
  return (
    <BoxView>
      <h2
        style={{
          textAlign: "center",
          marginTop: "0px",
          color: "var(--dark-color)",
          fontWeight: "600",
        }}
      >
        Стоматологія <span style={{ fontWeight: "700" }}>Аднан Дент</span>
      </h2>
      <p style={{ textAlign: "center" }}>Ми робимо вашу посмішку краще.</p>

      <div style={{ marginBottom: "60px" }}>
        <h4 style={{ textAlign: "center", fontSize: "18px" }}>Спеціалісти:</h4>

        <CardTeam />

        <LinkGoTo text={"Детальніше"} props={"/team"} />
      </div>

      <div>
        <h4 style={{ textAlign: "center", fontSize: "18px" }}>Послуги:</h4>
        <p>
          Ми надаємо широкий спектр стоматологічних послуг діагностики та
          лікування професійного рівня.
        </p>

        <LinkGoTo text={"Детальніше"} props={"/service"} />
      </div>
    </BoxView>
  );
}
