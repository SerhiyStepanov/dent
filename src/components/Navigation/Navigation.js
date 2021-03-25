import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import s from "./navigation.module.css";

export default function Navigation() {
  const [state, setState] = useState(false);

  const menuBtnClick = (e) => {
    setState();
  };
  return (
    <div>
      <button type="button" onClick={menuBtnClick}>
        {state ? (
          <FaTimes style={{ fill: "var(--dark-color)" }} />
        ) : (
          <FaBars style={{ fill: "var(--dark-color)" }} />
        )}
      </button>
    </div>
  );
}
