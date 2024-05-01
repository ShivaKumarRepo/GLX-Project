import React from "react";

const SingleCard = ({ plan, price, years, benifit }) => {
  return (
    <>
      <div className="planName">
        <h2>{plan}</h2>
        <div className="details">
          <p>{price}</p>
          <p>{years}</p>
          <p>{benifit}</p>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
