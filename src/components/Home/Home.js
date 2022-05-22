import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/architect.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ReactPlayer from 'react-player/lazy'

import YouTube from 'react-youtube';
import './Home.css'
const opts = {
  height: '280',
  width: '500',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hallo ! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                Ich bin
                <strong className="main-name"> Abdelbasset Ziane Cherif</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, alignItems: 'center' }}>
              {/* <img src={homeLogo} alt="home pic" className="img-fluid" /> */}
              {/* <YouTube videoId="4ocj4xmpIX0" opts={opts}/> */}
              {/* <div className='player-wrapper' >
              <YouTube className='react-player' videoId="4ocj4xmpIX0" opts={opts}/>
                 <ReactPlayer url='https://www.youtube.com/watch?v=UfDK4_2zB3w' 
                  width='100%'
                  height='100%'
                  playing={true}
                  className='react-player'
                  style={{ backgroundColor: 'green' }}
                  //light
                />
                </div> */}
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
