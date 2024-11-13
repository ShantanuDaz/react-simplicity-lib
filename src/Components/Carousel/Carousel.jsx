import React, { Children } from "react";
import "./Carousel.css";
const Carousel = ({ children }) => {
  return (
    <section className="carousel">
      {Children.map(children, (child, index) => {
        return React.cloneElement(child, { key: index });
      })}
    </section>
  );
};

export default Carousel;
