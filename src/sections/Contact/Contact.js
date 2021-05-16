import React from "react";
import "./Contact.scss";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <div className="contact-container">
        <h1 className="title">Contact</h1>
        <hr />
        <div className="grid-container">
          <div className="grid">
            <div className="contact-form">1</div>
            <div className="social-media">2</div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
