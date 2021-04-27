import prices from "../BabyDantist/babyDantist.json";
import s from "./babyDantist.module.css";

export default function BabyDantist() {
  return (
    <div className={s.wrapper}>
      <h4 className={s.title}>Стоматологія дитячого віку.</h4>
      <p className={s.text}>* - ціни можуть коливатися</p>
      <table className={s.table}>
        <thead>
          <tr className={s.head}>
            <th>Послуги</th>
            <th>Ціни</th>
          </tr>
        </thead>

        <tbody>
          {prices.map((el, index) => (
            <tr key={index} className={s.trow}>
              <td>{el.description}</td>
              <td>{`${el.price}грн`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
