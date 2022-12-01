import React from "react";
import { DoubleHeart } from "../../icons";
import "./advantages.css";
import { ADVANTAGES } from "./advantages";

export const Advantages = () => {
  return (
    <div className="wide-container">
      <section className="advantages">
        <div className="advantages__text">
          <h3 className="advantages-text__title">
            Our company values culture
            <img
              className="advantages-text__img"
              src={DoubleHeart}
              alt="Double heart icons"
            />
          </h3>
          <p className="advantages-text__caption">
            We specialize in creating visual identities for products and branda
            in your company.
          </p>
        </div>
        <ul className="advantages-list">
          {ADVANTAGES.map((adv) => {
            return (
              <li key={adv.id} className="advantages-list__item">
                <img
                  className="advantages-list__img advantages-list__img-one"
                  src={adv.image}
                  alt={adv.alt}
                />
                <p className="advantages-list__text">{adv.text}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
