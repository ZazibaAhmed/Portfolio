import React from "react";
import "./Footer.scss";
import wave from "../../assets/images/wave.svg";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <hr style={{ width: "100%" }} /> */}

      <div className="left">
        <img
          style={
            {
              // background: "red",
              // objectFit: "cover",
            }
          }
          src={wave}
          alt="wave"
        />
        <span>Built by me</span>
      </div>
    </footer>
  );
};

export default Footer;
