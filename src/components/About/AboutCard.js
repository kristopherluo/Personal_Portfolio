import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ImPointRight } from "react-icons/im";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/KristopherLuo-Resume.pdf";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
            Hi there! I am <span className="purple">Kristopher Luo </span>
            from Clemson, South Carolina. I am a junior pursuing a Bachelor of Science in Computer Science with a minor in Business Management at Clemson University.
            <br />
            <br />
            I have always had a passion for technology, thus my interest in computer science. 
            I specifically enjoy and have experience in machine learning and data analysis work, along with front-end development.
            Throughout school, work, and personal projects, I have used languages, such as Python, C++, C, Java, Javascript, React, and Prolog.
            I am eager to learn even more about software development, implement feedback, and work with a collaborative team.
            <br />
            <br />
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
            <br />
            <br />            
            Apart from computer science, some other activities that I love to do include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
          </ul>
                    <br />
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant. 
            Together they are powerful beyond imagination.???
            <br />
            <br />
            <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
              - Albert Enstein
            </p>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
