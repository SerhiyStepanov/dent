import treatment from "../../treatmentе.json";
import s from "./treatment.module.css";

export default function Treatment() {
  return (
    <div>
      <table className={s.treatmentv}>
        <thead>
          <tr className={s.head}>
            <th>Service</th>
            <th>Price</th>
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
