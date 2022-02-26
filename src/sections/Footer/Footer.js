import React from "react";
import "./Footer.scss";
import wave from "../../assets/images/wave.svg";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <hr style={{ width: "100%" }} /> */}

      <div className="footer-container">
        <img src={wave} alt="wave" />
        <div className="bottom-right">Made with love &#128150;</div>
      </div>
    </footer>
  );
};

export default Footer;
