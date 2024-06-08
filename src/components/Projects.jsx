import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Projects = () => {
  const projectObj = [
    {
      id: 1,
      imgURL: "/assets/project-1.png",
      projectName: "PlateChange",
      liveLink: "https://platechange.onrender.com/",
      codeLink: "https://github.com/Sridar-cod/plateChange",
      title: "FOOD SHARING WEB APPLICATION",
      abt: "  Plate Change is a comprehensive food-sharing web application designed to connect neighbors and community members to share food. The platform allows users to post available food, view food options based on their location, and filter these options according to their preferences.",
    },
    {
      id: 2,
      imgURL: "/assets/project-2.png",
      projectName: "EB Calculator",
      liveLink: "https://ebcalculator.netlify.app/",
      codeLink: "https://github.com/Sridar-cod/Eletricity-bill-calculator",
      title: "Techniques to Reduce Electricity Bill",
      abt: " This project is an interactive platform that helps users calculate their electricity bills and provides tips for reducing electricity consumption. The application includes a custom electricity bill calculator, an electricity unit per rate table, and a list of strategies to reduce electricity usage.",
    },
    {
      id: 3,
      imgURL: "/assets/project-3.png",
      projectName: "Image Haven",
      liveLink: "https://imagehaven.onrender.com/",
      codeLink: "https://github.com/Sridar-cod/imageGallary",
      title: "Dynamic Image Gallery",
      abt: "Designed and developed the frontend of dynamic image gallery web application from scratch, focusing on user experience and performance. Implemented search and filter functionalities to allow users to find images easily and sort them by categories. Added image download and image like feature,enabling users to save their favorite images directly from the gallery.Ensured the application supports endless scrolling and pagination for a seamless user experience",
    },
  ];
  return (
    <>
      <div className="project">
        <h1>
          <span>My</span> Projects
        </h1>

        <div className="project__inne w-100">
          <Carousel
            autoPlay
            showStatus={true}
            infiniteLoop={true}
            showArrows={true}
            interval={3000}
          >
            {projectObj.map((project) => {
              return (
                <div className="d-flex justify-content-center align-items-center">
                  <div
                    className="project-card d-flex flex-column justify-content-center align-items-center gap-2"
                    data-aos="fade-up"
                  >
                    <img src={project.imgURL} alt="" />
                    <h2>{project.projectName}</h2>
                    <div className="d-flex justify-content-between gap-3">
                      <Link
                        target="blank"
                        to={project.liveLink}
                      >
                        <button>Go Live</button>
                      </Link>
                      <Link
                        target="blank"
                        to={project.codeLink}
                      >
                        <button>View Code</button>
                      </Link>
                    </div>
                    <div className="mt-3 d-flex flex-column align-items-center gap-1">
                      <b>{project.title}</b>
                      <p>
                       {project.abt}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      {/* <div className="project">
        <h1>
          <span>My</span> Projects
        </h1>
        <div className="project__inner row  w-100">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6  d-flex justify-content-center align-items-center  ">
            <div
              className="project-card d-flex flex-column justify-content-center align-items-center gap-2"
              data-aos="fade-up"
            >
              <img src="/assets/project-1.png" alt="" />
              <h2>Plate Change</h2>
              <div className="d-flex justify-content-between gap-3">
                <Link target="blank" to="https://platechange.onrender.com/">
                  <button>Go Live</button>
                </Link>
                <Link
                  target="blank"
                  to="https://github.com/Sridar-cod/plateChange"
                >
                  <button>View Code</button>
                </Link>
              </div>
              <div className="mt-3 d-flex flex-column align-items-center gap-1">
                <b>FOOD SHARING WEB APPLICATION</b>
                <p>
                  Plate Change is a comprehensive food-sharing web application
                  designed to connect neighbors and community members to share
                  food. The platform allows users to post available food, view
                  food options based on their location, and filter these options
                  according to their preferences.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center align-items-center">
            <div
              className="project-card  d-flex flex-column justify-content-center align-items-center gap-2"
              data-aos="fade-down"
            >
              <img src="/assets/project-2.png" alt="" />
              <h2>EB Calculator</h2>
              <div className="d-flex justify-content-between gap-3">
                <Link target="blank" to="https://ebcalculator.netlify.app/">
                  <button>Go Live</button>
                </Link>
                <Link
                  target="blank"
                  to="https://github.com/Sridar-cod/Eletricity-bill-calculator"
                >
                  <button>View Code</button>
                </Link>
              </div>
              <div className="mt-3 d-flex flex-column align-items-center gap-1">
                <b>Techniques to Reduce Electricity Bill</b>
                <p>
                  This project is an interactive platform that helps users
                  calculate their electricity bills and provides tips for
                  reducing electricity consumption. The application includes a
                  custom electricity bill calculator, an electricity unit per
                  rate table, and a list of strategies to reduce electricity
                  usage.
                </p>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Projects;
