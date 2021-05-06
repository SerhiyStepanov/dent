import BoxView from "../components/BoxView";
import LinkGoTo from "../components/LinkGoTo";
import CardTeam from "../components/CardTeam";
import office from "../images/office.jpg";
import officeVertical from "../images/office-1.jpg";

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
        <CardTeam />

        <LinkGoTo text={"Детальніше"} props={"/team"} />
      </div>

      <div>
        <p style={{ textAlign: "center" }}>
          Ми надаємо широкий спектр стоматологічних послуг діагностики та
          лікування професійного рівня.
        </p>
        {window.innerWidth > 767 ? (
          <img src={office} alt="office" />
        ) : (
          <img src={officeVertical} alt="office" />
        )}

        <LinkGoTo text={"Детальніше"} props={"/service"} />
      </div>
    </BoxView>
  );
}
