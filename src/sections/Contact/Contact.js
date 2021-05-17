import React from "react";
import "./Contact.scss";
import { Element } from "react-scroll";

import email from "../../assets/contact/email.svg";
import github from "../../assets/contact/github.svg";
import linkedIn from "../../assets/contact/linked_in.svg";

const Contact = () => {
  return (
    <Element name="contact">
      <div className="contact-container">
        <h1 className="title">Contact</h1>
        <hr />
        <div className="grid-container">
          <div className="grid">
            <div className="social-media">
              <ul>
                <li key={1}>
                  <a href="/home">
                    <h3>#1</h3>
                    <p>
                      {" "}
                      <img
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                        src={email}
                        alt="email"
                      />
                      Email
                    </p>
                  </a>
                </li>
                <li key={2}>
                  <a href="/home">
                    <h3>#2 </h3>
                    <p>
                      <img
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                        src={github}
                        alt="github"
                      />
                      Github
                    </p>
                  </a>
                </li>
                <li key={3}>
                  <a href="/home">
                    <h3>#3 </h3>
                    <p>
                      <img
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                        src={linkedIn}
                        alt="linkedIn"
                      />
                      LinkedIn
                    </p>
                  </a>
                </li>
                {/* <li key={4}>
                  <a href="/home">
                    <h3>#Twitter</h3>
                    <p>Text Content #2</p>
                  </a>
                </li>
                <li key={5}>
                  <a href="/home">
                    <h3>#Facebook</h3>
                    <p>Text Content #2</p>
                  </a>
                </li>
                <li key={6}>
                  <a href="/home">
                    <h3>#Instagram</h3>
                    <p>Text Content #2</p>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
