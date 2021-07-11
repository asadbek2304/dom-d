import React from 'react';
import logo from '../assets/img/logo.png'
import map from '../assets/img/map.png'
import message from '../assets/img/message.png';
import phone from '../assets/img/phone3.png'
import facebook from '../assets/img/facebook.png'
import instagram from '../assets/img/instagram.svg'
import youtube2 from '../assets/img/youtube2.png'
const Footer = () => {
    return (
      <div className="footer">
        <div className="footer__content">
          <div className="footer__content--info">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer__content--link">
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
            <div className="work">
                <h4 className="link head">Наши работы </h4>
                <h4 className="link">Отзывы клиентов</h4>
                <h4 className="link">Партнеры</h4>
            </div>
          </div>
          <div className="footer__content--link">
            <h4 className="link head">Наши работы </h4>
            <h4 className="link">Отзывы клиентов</h4>
            <h4 className="link">Партнеры</h4>
          </div>
          <div className="footer__content--link">
            <h4 className="link head">Контакты</h4>
            <div className="item">
              <img src={map} alt="" />
              <span className="text">
                Украина, г. Одесса ул. Комитетская, 24Б
              </span>
            </div>
            <div className="item">
              <img src={message} alt="" />
              <span className="text">Эл.почта: odessadomd@gmail.com</span>
            </div>
            <div className="item">
              <img src={phone} alt="" />
              <span className="text">+38 (098) 271-50-35</span>
            </div>
            <div className="item">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={youtube2} className="circ" alt="" />
              <span className="text2">Свежие видео у нас на канале</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer
