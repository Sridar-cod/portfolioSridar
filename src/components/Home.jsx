import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="home  d-flex justify-content-center align-items-center w-100">
        <div className="home__inner   d-flex flex-column justify-content-center align-items-center">
          <div className="img-container " data-aos="flip-left">
            <div className="inner__img "></div>
          </div>

          <div
            className="inner__content d-flex flex-column justify-content-center align-items-center  mt-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>
              Hi I'm <span> Sridar.</span> <br />
              <span> Front </span> End Developer{" "}
              <small className="home-content-h1-span">React expert</small>
            </h1>
            <p>
              Working with my hands to make magic happen on the internet. View
              my <b className="home__content-span">Projects</b> <b>resume</b>{" "}
              contact me or send me an email at sridar1404@gmail.com.{" "}
              <br />
              <small>Chennai, TamilNadu, India</small>
            </p>
            <a href="/assets/sridar-resume.pdf" download>
              <button>Download Resume</button>
            </a>
          </div>
        </div>
        {/* <img
          src="/assets/application.png"
          className="home-icon-1"
          width={"80px"}
          alt=""
        />
        <img
          src="/assets/coding.png"
          className="home-icon-2"
          width={"80px"}
          alt=""
        />
        <img
          src="/assets/coding (1).png"
          className="home-icon-3"
          width={"80px"}
          alt=""
        />
        <img
          src="/assets/code.png"
          className="home-icon-4"
          width={"80px"}
          alt=""
        />
        <img
          src="/assets/web-development.png"
          className="home-icon-5"
          width={"80px"}
          alt=""
        />
        <img
          src="/assets/app-development.png"
          className="home-icon-6"
          width={"80px"}
          alt=""
        />
        <img
          src="/assets/css.png"
          className="home-icon-7"
          width={"80px"}
          alt=""
        />
        <img
          src="/assets/error.png"
          className="home-icon-8"
          width={"80px"}
          alt=""
        />
        <img
          src="/assets/program.png"
          className="home-icon-9"
          width={"80px"}
          alt=""
        />
        <img
          src="/assets/world-wide-web.png"
          className="home-icon-10"
          width={"80px"}
          alt=""
        /> */}
      </div>

      {/* <div className="home ">
    <div className="home__inner row w-100">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 inner__img-div">
            <img src="/assets/pic-0.png" alt="" />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <h1>Hello i'm Sridar, <br /> Frontend developer</h1>
            <p></p>
        </div>
    </div>
</div> */}
    </>
  );
};

export default Home;
