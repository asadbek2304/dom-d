import React, { useState } from "react";
import up from '../assets/img/up.png'
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button className='top'
      onClick={scrollToTop}
      style={{ transform: visible ? "translateX(0)" : "translateX(200%)" }}
    >
      <img
        src={up}
        alt="top"
      />
    </button>
  );
}





export default ScrollToTop;
