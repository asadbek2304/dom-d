import React from "react";
import Button from "../components/Button";
import book from "../assets/img/book.png";
import Card from "../components/Card";
import home1 from "../assets/img/home1.png";
import img from "../assets/img/img.png";
import play from "../assets/img/play.png";
import vallet from "../assets/img/vallet.png";
import bg2 from "../assets/img/bg2.png";
import uy from "../assets/img/uy.png";
import check from "../assets/img/check.png";
import man from "../assets/img/men.png";
import youtube from "../assets/img/youtube.png";
const Home = ({action}) => {
  return (
    <div className="home">
      <div className="home__1">
        <div className="home__1--content">
          <h1 className="title with-margin-10">
            Сделаем ваш <span className="gold">Дом</span>
          </h1>
          <h4 className="title-sub with-margin-10">
            готовым к комфортному проживанию
          </h4>
          <h6 className="title-sub-2 with-margin-10">
            Строительство деревянных домов «под ключ»: коттеджи, беседки, бани,
            дома из клееного бруса
          </h6>

          <div className="boxes with-margin-10">
            <h5 className="box">Демонтаж</h5>
            <h5 className="box">Бетонные работы</h5>
            <h5 className="box">Возведение стен</h5>
            <h5 className="box">Кровельные работы</h5>
            <h5 className="box">Отделка фасадов</h5>
            <h5 className="box">Инженерные работы</h5>
          </div>

          <div className="container__btn">
            <Button text="Заказать расчет" />
          </div>
        </div>
        <div className="home__1--content">
          <div className="container ">
            <div className="container__content with-margin-10">
              <h1 className="title-black">Заказать расчет</h1>
              <h4 className="title-black-sub">
                Оказываем услуги комплексно, совмещая отдельные виды работ
              </h4>
              <img src={book} alt="book" />
            </div>
            <div className="container__btn">
              <Button text="Заказать расчет" />
            </div>
          </div>
        </div>
      </div>

      <div className="home__2">
        <h1 className="title-black">Оказываем услуги комплексно,</h1>
        <h2 className="title-black-sub2">совмещая отдельные виды работ</h2>
        <div className="home__2--content">
          <Card action={action} title="Каркасные дома" img={home1} />
          <Card action={action} title="Каркасные дома" img={home1} />
          <Card action={action} title="Каркасные дома" img={home1} />
          <Card action={action} title="Каркасные дома" img={home1} />
          <Card action={action} title="Каркасные дома" img={home1} />
          <Card action={action} title="Каркасные дома" img={home1} />
        </div>
      </div>

      <div className="home__3">
        <h1 className="title-black">Приступим cегодня</h1>
        <h2 className="title-black-sub">
          Напишите нам, чтобы получить персональное предложение
        </h2>
        <div className="content with-margin-10">
          <div className="content__item">
            <h3 className="title">
              <span className="gold">
                Cтроительство дома, не покажешь картинкой
              </span>
            </h3>
            <h5  className="title-sub">
              За каждым домом стоит целая история, смотри полезные презентации у
              нас на канале.
            </h5>
            <Button
              text="Заказать расчет"
              classess="info__btn with-margin-50"
            />
          </div>
          <div className="content__item">
            <div className="container">
              <img src={img} className="bgo" alt="dfas" />
              <img src={play} alt="play" className="play" />
            </div>
          </div>
        </div>
      </div>

      <div className="home__4">
        <h1 className="title-black">
          Заботимся о Вашем{" "}
          <span style={{ fontWeight: "900" }}>спокойствии</span>
        </h1>

        <div className="content">
          <div className="content__item">
            <img src={vallet} alt="vallet" />
            <div className="content__item--1">
              <h3
                style={{
                  paddingTop: "0",
                  fontSize: "20px",
                  textAlign: "start",
                }}
                className="title-black">
                Не поднимаем стоимость
              </h3>
              <h5
                style={{ fontSize: "18px", textAlign: "start" }}
                className="title-black-sub">
                Не поднимаем стоимость
              </h5>
            </div>
          </div>
          <div className="content__item">
            <img src={vallet} alt="vallet" />
            <div className="content__item--1">
              <h3
                style={{
                  paddingTop: "0",
                  fontSize: "20px",
                  textAlign: "start",
                }}
                className="title-black">
                Не поднимаем стоимость
              </h3>
              <h5
                style={{ fontSize: "18px", textAlign: "start" }}
                className="title-black-sub">
                Не поднимаем стоимость
              </h5>
            </div>
          </div>
          <div className="content__item">
            <img src={vallet} alt="vallet" />
            <div className="content__item--1">
              <h3
                style={{
                  paddingTop: "0",
                  fontSize: "20px",
                  textAlign: "start",
                }}
                className="title-black">
                Не поднимаем стоимость
              </h3>
              <h5
                style={{ fontSize: "18px", textAlign: "start" }}
                className="title-black-sub">
                Не поднимаем стоимость
              </h5>
            </div>
          </div>
          <div className="content__item">
            <img src={vallet} alt="vallet" />
            <div className="content__item--1">
              <h3
                style={{
                  paddingTop: "0",
                  fontSize: "20px",
                  textAlign: "start",
                }}
                className="title-black">
                Не поднимаем стоимость
              </h3>
              <h5
                style={{ fontSize: "18px", textAlign: "start" }}
                className="title-black-sub">
                Не поднимаем стоимость
              </h5>
            </div>
          </div>
          <div className="content__item">
            <img src={vallet} alt="vallet" />
            <div className="content__item--1">
              <h3
                style={{
                  paddingTop: "0",
                  fontSize: "20px",
                  textAlign: "start",
                }}
                className="title-black">
                Не поднимаем стоимость
              </h3>
              <h5
                style={{ fontSize: "18px", textAlign: "start" }}
                className="title-black-sub">
                Не поднимаем стоимость
              </h5>
            </div>
          </div>
          <div className="content__item">
            <img src={vallet} alt="vallet" />
            <div className="content__item--1">
              <h3
                style={{
                  paddingTop: "0",
                  fontSize: "20px",
                  textAlign: "start",
                }}
                className="title-black">
                Не поднимаем стоимость
              </h3>
              <h5
                style={{ fontSize: "18px", textAlign: "start" }}
                className="title-black-sub">
                Не поднимаем стоимость
              </h5>
            </div>
          </div>
        </div>
        <img src={bg2} alt="bg2" className="bg bg1" />
      </div>

      <div className="home__5">
        <h1 className="title-black">
          <span style={{ fontWeight: "900" }}>Посмотрите на готовые дома</span>
          с комплексом <br /> отделки и прокладки коммуникаций.
        </h1>
        <div className="content">
          <img src={uy} alt="uy" />
          <img src={uy} alt="uy" />
          <img src={uy} alt="uy" />
          <img src={uy} alt="uy" />
          <img src={uy} alt="uy" />
          <img src={uy} alt="uy" />
        </div>
        <div className="buttn">
          <Button text="Смотреть все" classess="info__btn" />
        </div>
      </div>

      <div className="home__6">
        <h1 className="title-black">
          Готовы <span className="bold">начать строить дом</span> <br /> с
          надежной компанией?
        </h1>
        <div className="content">
          <div className="content__item">
            <div className="img__con">
              <img src={man} alt="man" />
              <h6>
                <span className="bold">
                  Здравствуйте, меня зовут Ярослав Доля. <br />
                </span>
                Я руководитель компании <span className="bold">DOM-D</span>
              </h6>
            </div>
          </div>
          <div className="content__item">
            <div className="item">
              <img src={check} alt="check" />
              <h4>
                Мы не просто <span className="bold">предоставляем</span> услуги
                мы отвечаем за весь комплекс работ от проектирования до
                гарантийного обслуживания.{" "}
              </h4>
            </div>
            <div className="item">
              <img src={check} alt="check" />
              <h4>
                Мы не просто <span className="bold">предоставляем</span> услуги
                мы отвечаем за весь комплекс работ от проектирования до
                гарантийного обслуживания.{" "}
              </h4>
            </div>
            <div className="item">
              <img src={check} alt="check" />
              <h4>
                Мы не просто <span className="bold">предоставляем</span> услуги
                мы отвечаем за весь комплекс работ от проектирования до
                гарантийного обслуживания.{" "}
              </h4>
            </div>
          </div>
          <div className="content__item">
            <div className="item">
              <img src={check} alt="check" />
              <h4>
                Мы не просто <span className="bold">предоставляем</span> услуги
                мы отвечаем за весь комплекс работ от проектирования до
                гарантийного обслуживания.{" "}
              </h4>
            </div>
            <div className="item">
              <img src={check} alt="check" />
              <h4>
                Мы не просто <span className="bold">предоставляем</span> услуги
                мы отвечаем за весь комплекс работ от проектирования до
                гарантийного обслуживания.{" "}
              </h4>
            </div>
            <div className="item">
              <img src={check} alt="check" />
              <h4>
                Мы не просто <span className="bold">предоставляем</span> услуги
                мы отвечаем за весь комплекс работ от проектирования до
                гарантийного обслуживания.{" "}
              </h4>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer__content">
            <div className="footer__content--item">
              <h1 className="gold">15</h1>
              <h6>лет опыта в стоительстве</h6>
            </div>
            <div className="footer__content--item">
              {" "}
              <h1 className="gold">15</h1>
              <h6>специалистов в штате</h6>
            </div>
            <div className="footer__content--item">
              {" "}
              <h1 className="gold">53</h1>
              <h6>построенных домов</h6>
            </div>
            <div className="footer__content--item">
              <img src={youtube} alt="icon" />
              <h6>
                Наши ВИДЕО об отделке и устройстве смотрите на канале DOM-D
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
