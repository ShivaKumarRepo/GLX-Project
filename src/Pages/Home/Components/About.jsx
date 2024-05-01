import React from "react";

const About = ({heading}) => {
  return (
    <>
      <h1 className="heading">{heading}</h1>
      <section className="about">
        <img src={require("../../../Assets/galaxy.jpg")} />
        <div className="content">
          <h2>Outer space</h2>
          <p>
            Outer space (or simply space) is the expanse beyond celestial bodies
            and their atmospheres. Outer space is not completely empty; it is a
            near-perfect vacuum[1] containing a low density of particles,
            predominantly a plasma of hydrogen and helium as well as
            electromagnetic radiation, magnetic fields, neutrinos, dust, and
            cosmic rays. The baseline temperature of outer space, as set by the
            background radiation from the Big Bang, is 2.7 kelvins (−270 °C;
            −455 °F).
          </p>
          <p>
            The plasma between galaxies is thought to account for about half of
            the baryonic (ordinary) matter in the universe, having a number
            density of less than one hydrogen atom per cubic metre and a kinetic
            temperature of millions of kelvins.Local concentrations of matter
            have condensed into stars and galaxies. Intergalactic space takes up
            most of the volume of the universe, but even galaxies and star
            systems consist almost entirely of empty space.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
