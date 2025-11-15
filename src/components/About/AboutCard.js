import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anusha Kurmi </span>
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
              <ImPointRight /> Sketching
            </li>

            <li className="about-activity">
              <ImPointRight /> Love to play Kho Kho
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build Your Own Happiness!"{" "}
          </p>
          <footer className="blockquote-footer">Anusha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
