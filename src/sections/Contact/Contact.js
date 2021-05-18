import React from "react";
import "./Contact.scss";
import { Element } from "react-scroll";

import email from "../../assets/contact/email.svg";
import github from "../../assets/contact/github.svg";
import linkedIn from "../../assets/contact/linked_in.svg";
import GitHub from "../../assets/contact/GitHub_Logo.png";
import Gmail from "../../assets/contact/gmail-icon.svg";
import Linkedin from "../../assets/contact/Linkedin.png";

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
                  <a href="mailto:ahmedzaziba@gmail.com">
                    {/* <h3>#1</h3> */}
                    <p
                      style={{
                        overflowWrap: "break-word",
                        wordWrap: "break-word",
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "50px",
                        }}
                        src={Gmail}
                        alt="Gmail"
                      />
                      ahmedzaziba@gmail.com
                      <img
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                        src={email}
                        alt="email"
                      />
                    </p>
                  </a>
                </li>
                <li key={2}>
                  <a
                    href="https://github.com/ZazibaAhmed"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <h3>#2 </h3> */}
                    <p>
                      <img
                        style={{
                          width: "100%",
                          height: "50px",
                        }}
                        src={GitHub}
                        alt="GitHub"
                      />
                      View my projects on Github
                    </p>
                  </a>
                </li>
                <li key={3}>
                  <a
                    href="https://www.linkedin.com/in/zaziba-ahmed-214b06197/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p>
                      <img
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        src={Linkedin}
                        alt="Linkedin"
                      />
                      Connect with me on Linkedin
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
