import React from "react";
// import v from "../assets/img/Vector_3.png";
import Button from '../components/Button'
const Card = ({ img, title, action }) => {
  return (
    <div className={'card'}>
      <h3>{title}</h3>
      <Button action={action} classess='info__btn with-margin-20' text="Подробнее" />
      <div className="card__img">
        <img src={img} alt="img" />
      </div>
      {/* <h5></h5> */}

    </div>
  );
};

export default Card;
