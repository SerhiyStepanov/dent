import tooth from "./images/dental-2.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h3>Hallo dent</h3>
      <img src={tooth} style={{ width: "20px" }} />
    </div>
  );
}
