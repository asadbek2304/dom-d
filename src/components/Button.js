import React from "react";
import arrow from '../assets/img/arrow.png'

const Button = ({ text, classess, action }) => {
  return (
    <div onClick={() => action && action(false)} className={classess !== undefined ? classess : "btn"}>
      <a href="#">{text}</a>
      {classess && <img src={arrow} alt="arrow" />}
    </div>
  );
};

export default Button;
