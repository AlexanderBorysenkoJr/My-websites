import React from 'react'
import "./newExperience.css";
import GirlWithVr from "../../../assets/images/Content/girl-with-vr-2.png"
import BoyWithVr from "../../../assets/images/Content/boy-with-vr.png"

export const NewExperience = () => {
  return (
    <div className="narrow-container">
    <section className="new-experience">
        <div className="people-with-product">
            <img className="people-with-product__img" src={GirlWithVr} alt="Girl with VR" />
            <img className="people-with-product__img" src={BoyWithVr} alt="Boy with VR" />
        </div>
        <div className="new-experience-text">
            <h3 className="new-experience__title">New Experience In Playing Game</h3>
            <p className="new-experience__caption">You can try playing the game with a new style and of course a
                more real feel,
                like
                you are the main
                character
                in your game and adventure in this
                new digital world.</p>
            <button className="new-experience__btn">Get it Now</button>
        </div>
    </section>
</div>
  )
}
