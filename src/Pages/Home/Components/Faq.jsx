import React, { useState } from "react";

const Faq = () => {
  const data = [
    {
      question: "Is Earth bigger than Jupiter?",
      answers:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquid laborum illum impedit iusto quis nostrum, illo labore adipisci facere.",
    },
    {
      question: "Which planet has the largest ocean?",
      answers:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquid laborum illum impedit iusto quis nostrum, illo labore adipisci facere.",
    },
    {
      question: "What orbits the Earth?",
      answers:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquid laborum illum impedit iusto quis nostrum, illo labore adipisci facere.",
    },
    {
      question: "Does Neptune have rings?",
      answers:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquid laborum illum impedit iusto quis nostrum, illo labore adipisci facere.",
    },
  ];
  const [selected, setSelected] = useState(null);

  const handleSelect = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <h1 className="heading">FAQ's</h1>
      <section className="faq">
        <div className="item">
          {data.map((item, i) => {
            return (
              <div className="wraper" key={i}>
                <div className="question" onClick={() => handleSelect(i)}>
                  <h3>{item.question}</h3>
                  <img
                    src={require("../../../Assets/up arrow.png")}
                    alt=""
                    className={selected === i ? "reverse" : ""}
                  />
                </div>

                <div className={selected === i ? "answers show" : "answers"}>
                  <p>{item.answers}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faq;
