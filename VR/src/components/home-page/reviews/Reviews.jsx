import React from "react";
import "./reviews.css";
import { ThinArrow } from "../../icons";
import { REVIEWS } from "./reviews";

export const Reviews = () => {
  return (
    <div className="wide-container">
      <section className="reviews">
        <div className="reviews-header">
          <h3 className="reviews-header__title">What our clients say</h3>
          <p className="reviews-header__caption">
            See what our customer say about us. It really matter for us. How
            good or bad we will make ir for evaluation to make EhyalLive better.
          </p>
        </div>
        <ul className="reviews-list">
          {REVIEWS.map((review) => {
            return (
            <li key={review.id} className="reviews-list__item">
              <p className="reviews-list__title">
                <span className="reviews-list__title-color">starstar</span>star
              </p>
              <p className="reviews-list__text">{review.description}</p>
              <div className="reviews-list-customer">
                <img
                  className="reviews-list-customer__img"
                  src={review.avatar}
                  alt={review.name}
                />
                <div className="reviews-list-customer__text">
                  <p className="reviews-list-customer__name">{review.name}</p>
                  <p className="reviews-list-customer__nick">{review.nickname}</p>
                </div>
              </div>
            </li>
            );
          })}
        </ul>
        <img
          className="reviews__left-arrow"
          src={ThinArrow}
          alt="Arrow left"
        />
        <img
          className="reviews__rigth-arrow"
          src={ThinArrow}
          alt="Arrow right"
        />
      </section>
    </div>
  );
};
