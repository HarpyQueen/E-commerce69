import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
      </div>
      <div className="descriptionbox-description">
        <p>
         We offer the best prices for businnesses.
        </p>
        <p>
        our company, specializes in delivering high-quality clothing solutions tailored specifically for businesses and organizations. We understand the importance of presenting a polished and cohesive image in the corporate world, and our clothing offerings are designed to meet the unique needs of our B2B clients.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
