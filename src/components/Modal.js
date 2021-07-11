import React from "react";
import trash from "../assets/img/trash2.png";
import home1 from "../assets/img/home1.png";
import Button from './Button'
const Modal = ({state, action}) => {
  return (
    <div className={`modal ${state && "close"}`}>
      <div className="modal__content ">
        <img
          src={trash}
          onClick={() => action(true)}
          alt=""
          className="trash"
        />

        <h1 style={{ paddingTop: "0" }} className="title-black">
          Укажите <span className="bold">площадь</span> и{" "}
          <span className="bold">материал стен</span> Вашего дома
        </h1>

        <div style={{ marginTop: "30px" }} className="checkboxes">
          <h4 className="title-black-sub">Площадь вашего дома:</h4>
          <div>
            <input
              type="checkbox"
              className="styled-checkbox"
              name="le"
              id="le"
            />
            <label htmlFor="le">50-100м2</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="styled-checkbox"
              name="de"
              id="de"
            />
            <label htmlFor="de">100-150м2</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="styled-checkbox"
              name="fe"
              id="fe"
            />
            <label htmlFor="fe">больше 150</label>
          </div>
        </div>

        <div style={{ marginTop: "30px" }} className="cards">
          <div className="card1">
            <img src={home1} alt="" />
            <h6>Каркасные дома</h6>
          </div>
          <div className="card1">
            <img src={home1} alt="" />
            <h6>Каркасные дома</h6>
          </div>
          <div className="card1">
            <img src={home1} alt="" />
            <h6>Каркасные дома</h6>
          </div>
          <div className="card1">
            <img src={home1} alt="" />
            <h6>Каркасные дома</h6>
          </div>
          <div className="card1">
            <img src={home1} alt="" />
            <h6>Каркасные дома</h6>
          </div>
        </div>
        <div className="back">
          <div>
            <input
              type="checkbox"
              className="styled-checkbox"
              name="ge"
              id="ge"
            />
            <label htmlFor="ge">Под ключ</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="styled-checkbox"
              name="se"
              id="se"
            />
            <label htmlFor="se">Коробка</label>
          </div>
        </div>

        <div className="input-group">
          <input type="text" />
          <Button text="Получить расчет" />
        </div>

        <div className="checkboxes">
          <div>
            <input
              type="checkbox"
              className="styled-checkbox"
              name="ba"
              id="ba"
            />
            <label htmlFor="ba">
              Вы соглашаетесь с условиями обработки персональных данных
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
