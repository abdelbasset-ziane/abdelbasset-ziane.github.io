import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hallo, ich bin <span className="purple">Abdelbasset Ziane Cherif </span>
            aus <span className="purple">Algerien.</span>
            <br />
            Ich habe einen Master Abschluss in Architektur von der Universität Tlemcen.
            <br />
            <br />
            Neben der Achitektur noch ein paar andere Aktivitäten, die ich gerne mache!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sprachen lernen
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport treiben
            </li>
            <li className="about-activity">
              <ImPointRight /> Reisen
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Architektur sollte von ihrer Zeit und ihrem Ort erzählen, sich aber nach Zeitlosigkeit sehnen."{" "}
          </p>
          <footer className="blockquote-footer">Frank Gehry</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
