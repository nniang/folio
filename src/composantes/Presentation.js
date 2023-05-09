import React from 'react'
import wave1 from '../images/white_wave.png'
import { Col, Row, Container } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Presentation() {

  return (
   <section className='presentation' id='presentation'>
    <img src={wave1} className="wavee" alt="wavee" /> 
    <Container fluid>
    
    <h1>Présentation</h1>
   
    <Row>
  
             <Col md={6} className="a" >
             <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__fadeInRight " : ""}> 
              <div className=' left'>
                <span className='span1'>1</span>&nbsp; &nbsp;&nbsp;&nbsp;<span className='span2'>Capacite d'apprentissage</span> <br /><br />
                <span className='span1'>2</span>&nbsp; &nbsp;&nbsp;&nbsp;<span className='span2'>Collaboration</span> <br /><br />
                <span className='span1'>3</span>&nbsp; &nbsp;&nbsp;&nbsp;<span className='span2'>Responsablité</span> <br /><br />
                <span className='span1'>4</span>&nbsp; &nbsp;&nbsp;&nbsp;<span className='span2'>Prise de décision</span> <br /><br />
                <span className='span1'>5</span>&nbsp; &nbsp;&nbsp;&nbsp;<span className='span2'>Gestion du temps</span> <br /><br />

              </div>
              </div>}
              </TrackVisibility>
            </Col> 
           


             
            <Col md={6} className="a" >
            <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__fadeInLeft  " : ""}>
              <div className='right'>
              <h4>Triforce !</h4>
              <p>A l'ecoute,je suis <strong>Force</strong> de proposition, j'aime chercher des solutions et ainsi rendre services.
              Passionné par l'apprentissage et la decouverte intellectuelle j'ai développé une <strong>Force</strong> de travail afin de toujours progrésser au quotien.<strong>Force</strong> tranquille,
               j'ai toujour su collaborer et pleinement m'intégrer au sein du collectif.</p>
               <p>Besoin d'un collaborateurs flexibles et persévérant ?<br />
               Je vous propos mes services par le biais d'une <strong>Alternance</strong>.
               Avec 4 jours dans votre société et 1 jour en formation,le tout modulable comme vous le souhaitez, je pourrai rapidement répondre à votre besoin.</p>
              </div>
              </div>}
              </TrackVisibility>
            </Col> 
          
        </Row>
    </Container>
   </section>
  )
}
