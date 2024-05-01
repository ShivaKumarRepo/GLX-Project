import React from "react";

import { FaTimes } from "react-icons/fa";

const Model = ({ handleclick }) => {
  return (
    <>
      <div className="overlay">
        <div className="modal">
          <div className="cross">
            <FaTimes
              style={{ color: "white" }}
              size={23}
              onClick={handleclick}
            />
          </div>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            exercitationem quibusdam non dolor tempore expedita dolore totam
            ducimus rerum nisi.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Model;
