import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import inshort from "../../assests/inshort.png"
import Github from "../../assests/githubuserDetector.png"
import SHopingCard from "../../assests/shoping-card.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://cdn.pixabay.com/photo/2016/10/12/16/32/smartphone-1735044_640.jpg"}
              isBlog={false}
              title="Blog Mern"
              description="This is a simple blog app created by using React.js ,node.js and mongoDB User can create , update and delete blog  and login functinality is also added ."
              ghLink="https://github.com/Nitesh4256/Blog-app-mern"
              demoLink="https://wicked-dove-fez.cyclic.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inshort}

              isBlog={false}
              title="Inshort Clone"
              description="I am proud to present my Inshorts web clone project, a dynamic and efficient news aggregation platform designed to deliver concise and informative news stories to users in a fast and user-friendly manner. This project was inspired by the popular Inshorts mobile app and was developed to provide a similar experience on the web."
              ghLink="https://github.com/Nitesh4256/inshorts-clone"
              demoLink="https://nitesh-inshort-clone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Github}
              isBlog={false}
              title="Github User Detector"
              description="Git hub user detector is website created by using html css and javaScript where user can search a particular github user by name or id ,I used fetch method to get all the user details from github api"
              ghLink="https://github.com/Nitesh4256/github-detecter"
              demoLink="https://github-user-detecter.netlify.app/"
            />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SHopingCard}
              isBlog={false}
              title="Shoping card Frontend"
              description="i created a simple shoping card ui using react.js  it has functinality to add to card any item to user dashboard"
              ghLink="https://github.com/Nitesh4256/shoping-cart"
              demoLink="https://shopingcartclone.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
