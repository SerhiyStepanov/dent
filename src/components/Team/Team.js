import { useState } from "react";
import team from "./team.json";
import Modal from "../Modal";
import s from "./team.module.css";

export default function Team() {
  const [openModal, setOpenModal] = useState(false);
  const [modalCard, setCardModal] = useState({});
  console.log(modalCard);

  const showModal = (el) => {
    setOpenModal(true);
    setCardModal(el);
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <ul className={s.wrapper}>
        {team.map((el, index) => (
          <li key={index} className={s.list} onClick={() => showModal(el)}>
            <div className={s.thumb}>
              <img src={el.url} alt={el.alt} className={s.photo} />
              <div className={s.content}>
                <p className={s.name}>{el.name}</p>
                <p className={s.title}>{el.title}</p>
                <div className={s.overflow}>
                  <p className={s.descr}>{el.descr}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {openModal && (
        <Modal closeModal={closeModal} card={modalCard}>
          {modalCard}
        </Modal>
      )}
    </div>
  );
}
