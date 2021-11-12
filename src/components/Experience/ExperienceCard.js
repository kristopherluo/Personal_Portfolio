import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ExperienceCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
            <span className="purple" style = {{ paddingRight: "130px" }}>Deepfake Research Intern</span>May 2021 - Aug. 2021
            <ul>
            <br />
              <li className="about-activity">
                <ImPointRight /> Researched and studied algorithms incorporating machine learning and artificial intelligence techniques to detect Deepfake usage in videos
              </li>
            </ul>
            <ul>
              <li className="about-activity"> 
                <ImPointRight /> Studied multiple different detection methods such as observing inconsistent corneal specular highlights
              </li>
            </ul>
            <br />

            <span className="purple" style = {{ paddingRight: "185px" }}>Data Analysis Intern</span> May 2018 - Aug. 2018
            <ul>
            <br />
              <li className="about-activity">
                <ImPointRight /> Analyzed and modified traffic data collected from Clemson's roads for autonomous vehicle research
                </li>
            </ul>
            <ul>
              <li className="about-activity"> 
                <ImPointRight /> Learned the basics of artificial intelligence and data analysis
              </li>
            </ul>
          <br />

          <span className="purple" style = {{ paddingRight: "185px" }}>Research Lab Intern</span> May 2017 - Aug. 2017
            <ul>
            <br />
              <li className="about-activity">
                <ImPointRight /> Genetically engineered rice plants with the vacuolar proton pump gene to enhance their salt tolerance
                </li>
            </ul>
            <ul>
              <li className="about-activity"> 
                <ImPointRight /> Learned aseptic techniques, plant tissue culture techniques, bacterial inoculation, and culture for study
              </li>
            </ul>
            <ul>
              <li className="about-activity"> 
                <ImPointRight /> Practiced plant DNA and RNA extraction, plasmid DNA purification, and gel electrophoresis analysis
              </li>
            </ul>
          <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
