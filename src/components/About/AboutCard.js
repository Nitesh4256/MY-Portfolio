import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nitesh Shivhare </span>
            from <span className="purple"> Bhopal, India.</span>
            <br /> I am a final year student pursuing B.tech in Electronics and
            Communication Engineering
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>

            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build Your Own Happiness!"{" "}
          </p>
          <footer className="blockquote-footer">Nitesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
