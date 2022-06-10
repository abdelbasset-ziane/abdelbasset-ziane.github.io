import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


import admin from "../../Assets/Projects/admin_interface.png";
import mobile from "../../Assets/Projects/mobile_interface.png";
import health from "../../Assets/Projects/health_interface.png";

import fassade1 from "../../Assets/Projects/fassade1.jpg";
//import fassade2 from "../../Assets/Projects/fassade2.jpg";
import fassade3 from "../../Assets/Projects/fassade3.jpg";
import fassade4 from "../../Assets/Projects/fassade4.jpg";

import turm1 from "../../Assets/Projects/turm1.jpg";
import turm2 from "../../Assets/Projects/turm2.jpg";
import turm3 from "../../Assets/Projects/turm3.jpg";
import turm4 from "../../Assets/Projects/turm4.jpg";

import weitere1 from "../../Assets/Projects/weitere1.jpg";

import project1 from "../../Assets/Projects/project1.jpg";
import project2 from "../../Assets/Projects/project2.jpg";
import project3 from "../../Assets/Projects/project3.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
        Meine letzten <strong className="purple">realisierungen </strong>
        </h1>
        <p style={{ color: "white" }}>
        Hier sind einige Projekte, an denen ich in letzter Zeit gearbeitet habe.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPaths={[fassade1,fassade3,fassade4]}
              isBlog={false}
              isPdf={false}
              //btnText="Voir le projet"
              /*
              Dzdistrix est une solution de gestion de distribution mobile permettant les vendeurs d'optimiser et de simplifier
          la gestion de leurs tournées quotidiennes et de maîtriser la chaîne logistique
          en permettant aux personnels de terrain à travailler de manière plus productive et efficace.
              
          Distribution management app used by the sellers built using native android approach 
          with Java and Firebase. it uses the right combination of sensors in the device to 
          determine the best location in a battery-efficient way. Have features which allows 
          user for real-time data sync, wireless printing as well as operating offline.
          */
              title="kinetische Fassade"
              description="Eine kinetische Fassade ist eine Fassade, die sich dynamisch verändert, anstatt statisch oder feststehend zu sein, wodurch Bewegungen auf der Oberfläche eines Gebäudes stattfinden können."
              //link="https://henkelmarketingservicedz-c1f4e.web.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPaths={[turm1,turm2,turm3,turm4]}
              isBlog={false}
              isPdf={false}
              //btnText="Voir le projet"
              title="Der Parametric Turm"
              description="Der Parametric Turm ist eine Erkundung der Themen Feinheit, Interkonnektivität und räumliche Qualität. Die Fassade jedes Programmtyps – von Wohnen über gewerbliche Büroräume, Einzelhandel bis hin zu Verkehrsflächen und Galerien – wird gepaart, um durch unterschiedliche Hautdichte eine andere räumliche Bedingung zu schaffen."
              //link="https://henkelmarketingservicedz-c1f4e.web.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPaths={[weitere1]}
              isBlog={false}
              isPdf={true}
              //btnText="Télécharger le rapport"
              title="106 hauser im algerien"
              description="Das projekt besteht aus wohnungen das typs F3 F4 F5  mit tiefgaragen und geschaften im erdgeschoss."
              //link=""
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPaths={[project1,project2,project3]}
              isBlog={false}
              isPdf={true}
              //btnText="Télécharger le rapport"
              title="Nachbildungen von weltberühmten Projekten"
              description="Die Zeichnungen berühmter Bauprojekte wie Burj Alarab, Burj Khalifa in Dubai und viele andere Wahrzeichen. Die Zeichnungen wurden mit den entsprechenden Softwareprogrammen wie Revit und Sketchup erstellt."
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
