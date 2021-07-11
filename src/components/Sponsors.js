import React from 'react';
import arrowl from '../assets/img/arrow2.png';
import arrowr from '../assets/img/arrow3.png';
import spo1 from '../assets/img/spo1.png';
import spo2 from '../assets/img/spo2.png';
import spo3 from '../assets/img/spo3.png';
import spo4 from '../assets/img/spo4.png';

const Sponsors = () => {
    return (
      <div className="container">
        <h1 className="title-black">
          Используем только{" "}
          <span className="bold">
            экологически чистые <br /> и профессиональные материалы
          </span>
        </h1>

        <div className="container__spo">
          <img src={arrowl} alt="" />
          <img src={spo1} className="hidden" alt="" />
          <img src={spo2} alt="" />
          <img src={spo3} className="hidden" alt="" />
          <img src={spo4} className="hidden" alt="" />
          <img src={arrowr} alt="" />
        </div>
      </div>
    );
}

export default Sponsors
