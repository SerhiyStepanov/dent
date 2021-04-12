import BoxView from "../components/BoxView";
import Team from "../components/Team";

export default function TeamViews({ children }) {
  return (
    <BoxView>
      <h3
        style={{
          textAlign: "center",
          marginTop: "0px",
          marginBottom: "30px",
          color: "var(--dark-color)",
        }}
      >
        Спеціалісти
      </h3>

      <Team />
    </BoxView>
  );
}
