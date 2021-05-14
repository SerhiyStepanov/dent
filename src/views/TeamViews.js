import BoxView from "../components/BoxView";
import Team from "../components/Team";

export default function TeamViews({ children }) {
  return (
    <BoxView>
      <h5
        style={{
          textAlign: "center",
          marginTop: "0px",
          marginBottom: "30px",
          color: "var(--dark-color)",
        }}
      >
        Спеціалісти
      </h5>

      <Team />
    </BoxView>
  );
}
