import React, { useState } from "react";
import Model from "./Model";

const CalltoAction = () => {
  const [modal, setModal] = useState(false);

  const handleclick = () => {
    setModal(!modal);
  };
  return (
    <>
      <section className="call-to-action">
        <h2>Check Below To Book your Space Ticket </h2>
        <button onClick={handleclick}>
          <h3>Know More!</h3>
        </button>
      </section>
      {modal && <Model handleclick={handleclick} />}
    </>
  );
};

export default CalltoAction;
