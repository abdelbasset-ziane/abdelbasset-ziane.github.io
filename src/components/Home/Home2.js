import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
  AiFillFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            ERLAUBEN SIE MIR MICH<span className="purple"> VORZUSTELLEN </span>
            </h1>
            <p className="home-about-body">
            Ich habe mich in die Architektur verliebt...  🤷‍♂️
              <br />
              <br />Ich kenne die Klassiker wie
              <i>
                <b className="purple"> Autocad, Archicad, Revit </b>
              </i>
              und seit kurzem lerne ich<b className="purple"> Rhino</b>.
              <br />
              <br />
              Ich habe mehrere Jahre Erfahrung in der  &nbsp;
              <i>
                <b className="purple">Konzeption, Studie und Überwachung </b>von Projekten
               
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar"style={{borderRadius:'50%'}} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FINDE MICH AUF</h1>
            <p>
            Zögere nicht mich zu <span className="purple">kontaktieren</span>
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="mailto:abdelbasset.zc@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdelbasset-ziane"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
              {/*<li className="social-icons">
                <a
                  href="https://www.facebook.com/ayoubziane00"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ayoubziane00"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
  </li>*/}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
