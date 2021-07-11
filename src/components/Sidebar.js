import React from 'react'
import trash from '../assets/img/trash.png'
import logo from '../assets/img/logo2.png';
import phone from "../assets/img/phone.svg";
import Button from '../components/Button'
const Sidebar = ({action, state}) => {
    return (
      <div className={`sidebar ${state && "open"}`}>
        <div className="sidebar__action">
          <img onClick={() => action(false)} src={trash} alt="" />
          <img src={logo} alt="" />
        </div>

        <div className=" sidebar__contact">
          <h6 className="sidebar__contact--title">
            <img src={phone} alt="phone" />
            +38 (098) 271-50-35
          </h6>
          <Button text="ПЕРЕЗВОНИТЬ МНЕ" />
        </div>

        <div className="sidebar__content">
          <div className="sidebar__content--link">
            <h4 className="link head">Виды строительства</h4>
            <a className="link foo" href="">
              - Каркасные дома
            </a>
            <a className="link foo" href="">
              - Дома из клеёного бруса
            </a>
            <a className="link foo" href="">
              - Фахверковые дома
            </a>
            <a className="link foo" href="">
              - Дома из брёвен
            </a>
            <a className="link foo" href="">
              - Беседки
            </a>
            <h4 className="link head">Наши работы </h4>
            <h4 className="link head">Отзывы клиентов</h4>
            <h4 className="link head">Партнеры</h4>
            <h4 className="link head">Контакты</h4>
          </div>
        </div>
      </div>
    );
}

export default Sidebar
