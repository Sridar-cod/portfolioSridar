import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
const About = () => {
  useEffect(() => {
    AOS.init(
      {
        duration: 1000,
      },
      []
    );
  });

  return (
    <>
      <div className="about d-flex align-items-center justify-content-center">
        <div className="about__inner row w-100 ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="inner__img-div" data-aos="fade-left">
              <img src="/assets/pic-1.png" alt="" />
            </div>
          </div>
          <div
            className="d-flex  flex-column justify-content-center col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 "
            data-aos="fade-right"
          >
            <h1>
              About <span>Me</span>
            </h1>
            <p>
              I am a dynamic frontend developer with a passion for crafting
              visually appealing and functional user interfaces. With six months
              of hands-on experience in React.js development, I excel in
              creating dynamic and responsive web applications. My journey as a
              self-taught developer has been filled with challenges, but it has
              also honed my ability to work end-to-end on frontend development
              projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
