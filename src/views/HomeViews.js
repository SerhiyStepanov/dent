import BoxView from "../components/BoxView";
import LinkGoTo from "../components/LinkGoTo";
import CardTeam from "../components/CardTeam";
import image from "../images/image1.jpg";

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

      <div
        style={{ maxWidth: "320px", marginLeft: "auto", marginRight: "auto" }}
      >
        <p style={{ textAlign: "center" }}>
          Ми надаємо широкий спектр стоматологічних послуг діагностики та
          лікування професійного рівня.
        </p>

        <img src={image} alt="dantist office" />

        <LinkGoTo text={"Детальніше"} props={"/service"} />
      </div>
    </BoxView>
  );
}
