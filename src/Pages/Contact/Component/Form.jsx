import React from "react";

const Form = () => {
  return (
    <>
      <h1 className="heading">Contact Us</h1>
      <section className="container">
        <form>
          <div className="filld">
            <p>Name</p>
            <input type="text" />
          </div>
          <div className="filld">
            <p>Email</p>
            <input type="email" />
          </div>
          <div className="filld">
            <p>Phone</p>
            <input type="tel" />
          </div>
          <div className="form-button">
            <button>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
