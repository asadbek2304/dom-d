import React from "react";
import Button from "../components/Button";
import viber from "../assets/img/viber.png";
import telegram from "../assets/img/telegram.png";
import map from '../assets/img/map.png'
import message from '../assets/img/message.png'
import phone from "../assets/img/phone.svg";

const Contact = () => {
  return (
    <div className="home__7">
      <h1 className="title-black bold">Наши контакты</h1>

      <div className="content">
        <div className="content__item">
          <h2 style={{ textAlign: "start" }} className="title-black">
            Задать вопрос
          </h2>
          <h6
            style={{ textAlign: "start", marginTop: "2rem" }}
            className="title-black-sub">
            Остались вопросы? Наши эксперты ответят вам в ближайшее рабочее
            время!
          </h6>
          <textarea></textarea>
          <input type="text" />
          <Button text="Отправить вопрос" />
        </div>
        <div className="content__item">
          <h1 style={{ textAlign: "start" }} className="title-black">
            Мы на связи
          </h1>

          <div className="content__item--1">
            <img className="icon" src={map} alt="" />
            <h4 className="title-black-sub">
              Украина, г. Одесса ул. Комитетская, 24Б
            </h4>
          </div>
          <div className="content__item--1">
            <img className="icon" src={message} alt="" />
            <h4 className="title-black-sub">Эл.почта: odessadomd@gmail.com</h4>
          </div>

          <div className="content__item--1">
            <div className="link__btn">
              <img src={viber} alt="viber" />
              <a href="">Viber</a>
            </div>
            <div className="link__btn">
              <img src={telegram} alt="telegram" />
              <a href="">Telegram</a>
            </div>
          </div>
          <div className="content__item--1">
            <img className="icon" src={phone} alt="" />
            <h4 style={{ textAlign: "start", paddingTop: '0' }} className="title-black">
              +38 (098) 271-50-35 <br />
              <span className="title-black-sub">
                {" "}
                <i className="gold"> Мы на связи</i>
              </span>
            </h4>
          </div>

          <Button text="ПЕРЕЗВОНИТЬ МНЕ" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
