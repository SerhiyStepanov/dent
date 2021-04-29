import s from "./pricesTable.module.css";

export default function PricesTable({ prices, title }) {
  return (
    <div className={s.wrapper}>
      <h4 className={s.title}>{title}</h4>
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
              <td>
                {el.price}
                <span className={s.hrn}>грн</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
