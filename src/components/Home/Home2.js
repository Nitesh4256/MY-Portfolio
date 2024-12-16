import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            {/* <Col md={4} className="myAvtar">
              <Tilt>
                <img src={"https://avatars.githubusercontent.com/u/119953531?v=4"} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col> */}

            <p className="home-about-body">
              I am Passinate about my learning and always try to find ways to
              learn something new
              <br />
              <br />I am fluent in classics Like
              <i>
                <b className="purple">
                  {" "}
                  React.js , Javascript , Node.js and Express.js{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Development </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for Learning Data
              Structure and ALgorithms with <b className="purple">Java</b>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <span>
              {" "}
              <b className="purple">Contact </b> :8349953301
            </span>
            <p>
              {" "}
              <b className="purple">Email </b>:shivharenitesh750@gmail.com
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Nitesh4256"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nitesh-shivhare-504827259/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
