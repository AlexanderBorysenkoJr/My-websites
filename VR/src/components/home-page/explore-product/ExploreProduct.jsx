import React from 'react';
import { WhiteLittleArrow } from '../../icons';
import "./exploreProduct.css";
import Hands from "../../../assets/images/Content/hands.png"

export const ExploreProduct = () => {
const handleFooterFormSubmit = () => {
    console.log ("Form in footer sent");
}

  return (
    <div className="footer-container">
    <footer className="explore-product" style={{ backgroundImage:`url(${Hands})` }}>
        <div className="explore-product-text">
            <h3 className="explore-product-text__header-title">Explore product in new way
            </h3>
            <p className="explore-product-text__caption">
                We specialize in creating visual identities for products and branda in your company.
            </p>
            <form className="explore-product-form" action="" onSubmit={handleFooterFormSubmit}>
                <input className="explore-product-form__input-text" type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" name="email" placeholder="Your Email" />
                <div className="explore-product-form__button">
                    <input className="explore-product-form__input-btn" type="submit" value="Start" />
                    <img className="explore-product-form__img" src={WhiteLittleArrow}
                        alt="Arrow" />
                </div>
            </form>
        </div>
    </footer>
    </div>
  )
}
