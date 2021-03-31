import { Link } from "react-router-dom";
import s from "./linkGoTo.module.css";

export default function LinkGoTo({ props, text }) {
  return (
    <div className={s.thumb}>
      <Link to={props} className={s.link}>
        {text}
      </Link>
    </div>
  );
}
