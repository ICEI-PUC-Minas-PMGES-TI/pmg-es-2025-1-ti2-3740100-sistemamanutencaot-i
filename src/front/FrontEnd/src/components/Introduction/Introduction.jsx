import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <section className="introduction-container">
      <div className="introduction-left">
        <div className="section-header">
          <h2>INTRODUÇÃO</h2>
        </div>
        <div className="section-header">
          <h2>AO MANAGER.IO</h2>
          <svg className="arrow-icon" /* ...svg path... */ />
        </div>

        <div className="image-container">
          <img
            src="https://storage.googleapis.com/a1aa/image/b4aaa10c-dd08-430c-cc42-b0e041fe5cbc.jpg"
            alt="Ilustração de trabalho"
            className="intro-image"
          />
          <svg className="decorative-svg" /* ...svg paths... */ />
        </div>

        <div className="section-header">
          <h2>QUEM CRIOU O MANAGER.IO?</h2>
          <svg className="arrow-icon" /* ...svg path... */ />
        </div>
      </div>

      <div className="introduction-right">
        <p className="intro-text">
          Vitae sapien pellentesque habitant morbi tristique...
        </p>

        <div className="content-block">
          <h3 className="subtitle-blue">O QUE É</h3>
          <h4 className="subtitle-purple">MANAGER.IO</h4>
          <p className="description">
            Eget mi proin sed libero enim sed faucibus turpis...
          </p>
          <button className="cta-button">LET'S GET IN TOUCH</button>
        </div>

        <p className="intro-text">
          Vitae sapien pellentesque habitant morbi tristique...
        </p>
      </div>
    </section>
  );
};

export default Introduction;
