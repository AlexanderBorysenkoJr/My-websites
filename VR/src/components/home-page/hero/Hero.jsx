import React from "react";
import "./hero.css";
import { Point, WhiteLine } from "../../icons";
import GirlWithVr from "../../../assets/images/Content/girl-with-vr.png";
import { PEOPLE } from "./hero";

export const Hero = () => {
  return (
    <div className="narrow-container">
      <section className="hero">
        <div className="hero-main">
          <div className="hero-main-text">
            <h1 className="hero-main-text__title">
              Let’s Explore <br /> Three-Dimensional visual
            </h1>
            <p className="hero-main-text__caption">
              With virtual technology you can see the digital world feel more
              real and you can play the game with a new style.
            </p>
            <div className="hero-main-text-footer">
              <button className="hero-main-text-footer__btn">
                Invite Friend
              </button>
              <a className="hero-main-text-footer__link" href=".">
                Explore Device
              </a>
            </div>
          </div>
          <div className="people-online">
            <ul className="people-online__list">
              {PEOPLE.map((people) => {
                return (
                  <li key={people.id} className="people-online__list-item">
                    <img
                      className="people-online__img"
                      src={people.avatar}
                      alt={people.alt}
                    />
                  </li>
                );
              })}
            </ul>
            <img className="people-figure__img" src={Point} alt="Point" />
            <p className="people-text__online-status">400k people online</p>
          </div>
        </div>
        <div className="hero-main-photo">
          <img
            className="hero-main-photo__img"
            src={GirlWithVr}
            alt="Girl with VR"
          />
          <div className="hero-main-photo-text">
            <h3 className="hero-main-photo-text__title">
              Cinematic Virtual Reality
            </h3>
            <img
              className="hero-main-photo-text__underline"
              src={WhiteLine}
              alt="White line"
            />
            <p className="hero-main-photo-text__caption">
              Let’s be the best for more real and effective results and ready to
              explore the limitless world that we have prepared for you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
