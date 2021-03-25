import Navigation from "./components/Navigation";
import { FaTooth } from "react-icons/fa";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navigation>
        <h3 style={{ color: "var(--accent-color)" }}>Stomatolog</h3>
      </Navigation>

      <h4 style={{ color: "var(--dark-color)" }}>Hallo dent</h4>
      <FaTooth style={{ fill: "var(--primary-color)", fontSize: "24px" }} />
    </div>
  );
}
