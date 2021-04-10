import BoxView from "../components/BoxView";
import Team from "../components/Team";

export default function TeamViews({ children }) {
  return (
    <div>
      <BoxView>
        <h3 style={{ textAlign: "center", color: "var(--dark-color)" }}>
          Спеціалісти
        </h3>
        <Team />
      </BoxView>
    </div>
  );
}
