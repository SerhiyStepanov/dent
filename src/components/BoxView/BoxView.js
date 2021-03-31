import s from "./boxView.module.css";

export default function BoxView({ children }) {
  return <div className={s.thumb}>{children}</div>;
}
