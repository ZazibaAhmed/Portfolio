import React from "react";
import "./Contact.scss";
import { Element } from "react-scroll";

import GitHub from "../../assets/contact/GitHub_Logo.png";
import Gmail from "../../assets/contact/gmail-icon.svg";
import Linkedin from "../../assets/contact/Linkedin.png";

const Contact = () => {
  return (
    <Element name="contact">
      <div className="contact-container">
        <h1 className="title">Contact Me!</h1>
        <hr />
        <div className="grid-container">
          <div className="grid">
            <div className="social-media">
              <ul>
                <li key={1}>
                  <a href="mailto:ahmedzaziba@gmail.com">
                    <p
                      style={{
                        cursor: "auto",
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
                    </p>
                  </a>
                </li>
                <li key={2}>
                  <a
                    href="https://github.com/ZazibaAhmed"
                    target="_blank"
                    rel="noreferrer"
                  >
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
                          marginTop: "0.8rem",
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
