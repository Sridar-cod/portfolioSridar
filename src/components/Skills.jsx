import React from "react";

const   Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skills__inner pt-2 row w-100" >
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 " >
            <h1><span>Work</span> Experience</h1>
            <div className="skills__inner__content mt-4 mb-4">
              <h3>What I <span>Did</span></h3>
              <p>
                As an Associate React Developer at Risolutor Technology, I
                created two dynamic websites, including a company website and a
                product website. Additionally, I developed and maintained an
                admin management software and contributed to the development of
                an HRMS software. My role involved designing user interfaces,
                implementing features, and ensuring the overall functionality
                and performance of these web applications.
              </p>
            </div>
            <div className="skills__inner__content pt-0">
              <h3>What I <span>Learned</span></h3>
              <p>
                During my time at Risolutor Technology, I mastered the Agile
                method of working, significantly improving my project management
                and team collaboration skills. I gained extensive experience in
                developing products from scratch, managing end-to-end processes,
                and enhancing my time management abilities by balancing multiple
                projects and deadlines. My teamwork capabilities were
                strengthened through effective collaboration with colleagues,
                and I developed robust bug-fixing and problem-solving skills,
                ensuring the delivery of high-quality and reliable software
                solutions.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 skills-right  mt-4">
            <h1>Skills</h1>
            <div className="skills-right__inner">
              <div className="skills__inner__box d-flex justify-content-center align-items-center">
                <div className="">REACT JS</div>
              </div>
              <div className="d-flex skills__inner__box d-flex justify-content-center align-items-center">
                <div className="">HTML</div>
                <div className="">CSS</div>
              </div>
              <div className="skills__inner__box d-flex justify-content-center align-items-center">
                <div className="">JAVASCRIPT</div>
                <div className="">TYPESCRIPT</div>
              </div>
              <div className="skills__inner__box d-flex justify-content-center align-items-center">
                <div className="">BOOTSTRAP</div>
                <div className="">GIT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
