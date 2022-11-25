import React from "react";
import "./services.css";

function Services({ item }) {
  return (
    <div className="services">
      <div className="services__item">
        <span>
          <i style={{ backgroundColor: item.bg }} className={item.icon}></i>
        </span>
        <div className="">
          <h5 className="services__item--title my-4 fw-bold">{item.title}</h5>
          <p className="services__item--subtitle fw-light">{item.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
