import babyPrice from "../../bebyDantist.json";
import s from "./babyDantist.module.css";

export default function BabyDantist() {
  return (
    <div className={s.wrapper}>
      <h4 className={s.title}>Для дітей</h4>
      <p className={s.text}>* - ціни можуть коливатися</p>
      <table className={s.table}>
        <thead>
          <tr className={s.head}>
            <th>Послуги</th>
            <th>Ціни</th>
          </tr>
        </thead>

        <tbody>
          {babyPrice.map((el, index) => (
            <tr key={index}>
              <td>{el.description}</td>
              <td>{`${el.price}грн`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
