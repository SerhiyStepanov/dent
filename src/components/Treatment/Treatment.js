import treatment from "../../treatmentе.json";
import s from "./treatment.module.css";

export default function Treatment() {
  return (
    <div>
      <h4 className={s.title}>Для дорослих</h4>
      <p className={s.text}>* - ціни можуть коливатися</p>
      <table className={s.treatmentv}>
        <thead>
          <tr className={s.head}>
            <th>Послуги</th>
            <th>Ціни</th>
          </tr>
        </thead>

        <tbody>
          {treatment.map((el, index) => (
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
