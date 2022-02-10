import React from 'react';
import { Fade } from 'react-reveal';
import { marketing } from '../../data/images';
import './Top.css'
const Top = () => {
  return (
    <section className="top" id="main">
      <video
        className="video"
        src={marketing}
        muted
        playsInline
        autoPlay
        loop
      ></video>
      <Fade cascade left>
        <div className="top__content">
          <h1 className="top__title">React JS Developer</h1>
          <h2 className="top__subtitle title">
            Build  websites and applications
          </h2>
        </div>
      </Fade>
    </section>
  );
};

export default Top;