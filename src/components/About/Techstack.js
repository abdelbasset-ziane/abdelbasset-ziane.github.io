import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
} from "react-icons/di";
import {  SiFirebase,SiAndroid,SiKotlin,SiJava,SiMysql,SiMapbox, SiOpenstreetmap } from "react-icons/si";
import revit from '../../Assets/software_logos/autodesk-revit-144.png'
import archicad from '../../Assets/software_logos/archicad-144.png'
import autocad from '../../Assets/software_logos/autocad-144.png'
import sketchup from '../../Assets/software_logos/google-sketchup-144.png'
import grasshopper from '../../Assets/software_logos/grasshopper-100.png'
import lumion from '../../Assets/software_logos/lumion-128.png'
import rhinoceros from '../../Assets/software_logos/rhinoceros-6-144.png'
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img src={revit} width={100} height={100} />
      <div style={{fontSize:26}} >Revit</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={autocad} width={100} height={100} />
      <div style={{fontSize:26}} >Autocad</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={archicad} width={100} height={100} />
      <div style={{fontSize:26}} >Archicad</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={sketchup} width={100} height={100} />
      <div style={{fontSize:26}} >Sketchup</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={lumion} width={100} height={100} />
      <div style={{fontSize:26}} >Lumion</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={rhinoceros} width={100} height={100} />
      <div style={{fontSize:26}} >Rhinoceros</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={grasshopper} width={100} height={100} />
      <div style={{fontSize:26}} >Grasshopper</div>
      </Col>
      
    </Row>
  );
}

export default Techstack;
