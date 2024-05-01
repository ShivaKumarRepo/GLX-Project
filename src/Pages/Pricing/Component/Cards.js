import React from "react";
import SingleCard from "./SingleCard";

const Cards = () => {
  const data = [
    {
      id: 1,
      plan: "Basic",
      price: "5 lakhs",
      years: "10 years",
      benifit: "Get 8 lakhs",
    },
    {
      id: 2,
      plan: "Advance",
      price: "10 lakhs",
      years: "15 years",
      benifit: "Get 15 lakhs",
    },
    {
      id: 3,
      plan: "Premium",
      price: "15 lakhs",
      years: "20 years",
      benifit: "Get 20 lakhs",
    },
  ];
  return (
    <>
      <h1 className="heading">Pricing</h1>

      <section className="plans">
        {data.map((iteam) => {
          const { id, plan, price, years, benifit } = iteam;
          return (
            <SingleCard
              plan={plan}
              price={price}
              years={years}
              benifit={benifit}
            />
          );
        })}
      </section>
    </>
  );
};

export default Cards;
