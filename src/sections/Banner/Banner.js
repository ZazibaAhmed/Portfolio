import React from "react";
import "./Banner.scss";
import myPhoto from "../../assets/images/2.jpeg";
import Resume from "../../assets/Resume.pdf";
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="info">
        <h1>
          <span className="title wavy">Hello, I'm Zaziba!</span>
        </h1>
        <div className="about-me">
          <p>
            I am a Software Engineer, currently focusing on front-end, with a
            strong passion for building simple, and functional web applications.
            I'm passionate about creating in general and also write clean,
            responsive and dynamic code with cross-browser compatibility. When
            I'm not coding, I enjoy traveling, photography, painting and
            doodling &#128514;.
          </p>
          <p>
            I have mainly been working with React.js but I also have experience
            working with Angular. I'm currently building cool things at
            eSecureSoft Technologies Ltd. If you want to take a look at some of
            my work, please scroll down. Here's my
            <span>
              {" "}
              <a href={Resume} target="_blank" rel="noreferrer">
                résumé
              </a>
            </span>
            &#128072;
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
              filter: "grayscale(20%)",
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
