import React from "react";
import "./Banner.scss";
import myPhoto from "../../assets/images/myPhoto.jpg";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="info">
        <h1>
          <span className="title wavy">Hello, I'm Zaziba!</span>
          {/* <span className="emoji">&#128522;</span> */}
        </h1>
        <div>
          <p>
            I am a Software Engineer, focused on front-end, with a strong
            passion in building simple, and functional web applications. I build
            user-focused apps with UX, testing, and performance constraints in
            mind. I also write clean and well-documented code.
          </p>
          <p>
            I mainly work with React.js but I also have experience working with
            Angular and Nodejs. I'm currently building cool things at
            eSecureSoft Technologies Ltd. Here's my resume. If you want to take
            a look at some of my work, please scroll down. Here, have a look at
            my <span className="wavy">resume</span>. &#128150;
          </p>
        </div>
      </div>
      <div className="photo">
        <div>
          <img
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "0px 0px",
            }}
            src={myPhoto}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
