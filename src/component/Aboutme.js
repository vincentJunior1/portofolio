import React, { Component } from "react";
import Sidebar from "./sidebar";
import Foto from "../assets/foto.jpg";
import Fade from "react-reveal/Fade";

const Aboutme = () => {
  return (
    <div>
      <Sidebar />
      <section>
        <div className="jumbotron about-me">
          <div className="container">
            <Fade right>
              <div className="col-xs-12">
                <div className="col-xs-3">
                  <img className="foto" src={Foto} alt="profile" />
                </div>
                <div className="col-xs-9 desc-aboutMe">
                  <h2 className="aboutMe-header">ABOUT ME</h2>
                  <p className="desc-about">
                    Fullstack Software Engineer Who Loves tech And keep learning
                    about new technology. 1st Time learn about Computer science
                    since junior high school and try to solve algorithm
                    questions in HackerRank. After graduate from Vocational
                    School try to find an Internship learn something new
                    <br />
                    Technical Skill : Language: Python, Php, Javascript, Node js
                    <br /> Framework: Laravel, Codeigniter, React Js, Vue
                    Js,Express Js
                    <br />
                    Database: Redis, Mysql
                    <br />
                    Other: AWS
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutme;
