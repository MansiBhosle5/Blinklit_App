import React from "react";
import "./OfferBanner.css";

const Offer = ({ img, altText }) => {
  return (
    <div className="offer-banner">
      <img
        src="https://img.freepik.com/premium-psd/organic-vegetable-groceries-delivery-promotion-web-banner-social-media-post_502896-99.jpg"
        alt={altText || "Offer Banner"}
        className="offer-img"
      />
    </div>
  );
};

export default Offer;
