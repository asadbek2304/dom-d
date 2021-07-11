import React from "react";
import hamburger from "../assets/img/hamburger.png";
import logo from "../assets/img/logo.png";
import viber from "../assets/img/viber.png";
import telegram from "../assets/img/telegram.png";
import phone from "../assets/img/phone.svg";
import Button from "../components/Button";
const Navbar = ({action}) => {
  return (
    <div className="navbar">
      <img
        onClick={() => action(true)}
        src={hamburger}
        className="navbar__hamburger"
        alt="hamburger"
      />

      <div className="navbar__content">
        <div className="navbar navbar__logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
          <h6 className="title">
            Строительство деревянных домов <br />
            <span className="title__light">
              за <span className="gold">45</span> дней
            </span>
          </h6>
        </div>
        <div className=" navbar__links">
          <h6 className="navbar__links--title">
            Нажмите, чтобы начать общение
          </h6>
          <h6 className="navbar__links--phone">
            <img src={phone} alt="phone" />
            +38 (098) 271-50-35
          </h6>
          <div className="navbar__links--link">
            <div className="link__btn">
              <img src={viber} alt="viber" />
              <a href="">Viber</a>
            </div>
            <div className="link__btn">
              <img src={telegram} alt="telegram" />
              <a href="">Telegram</a>
            </div>
          </div>
        </div>

        <div className=" navbar__contact">
          <h6 className="navbar__contact--title">
            <img src={phone} alt="phone" />
            +38 (098) 271-50-35
          </h6>
          <Button text="ПЕРЕЗВОНИТЬ МНЕ" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
