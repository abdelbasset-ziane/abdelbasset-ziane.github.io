import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import Carousel from 'react-bootstrap/Carousel'

import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Carousel>
        {props.imgPaths.map((path,index) => <Carousel.Item>
          <img
            className="d-block w-100"
            src={path}
            alt={"Slide"+(index+1)}
          />
        </Carousel.Item>)}
        
      </Carousel>
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.btnText &&
          (
            <Button variant="primary" href={props.link} target="_blank">
              <BiLinkExternal /> &nbsp;
              {props.isBlog ? "View Blog" : props.btnText}
            </Button>
          )
        }

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
