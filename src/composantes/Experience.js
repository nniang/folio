import React from 'react'
import { Col, Row, Container} from "react-bootstrap";
import imga from '../images/programmation (1).png'
import imgb from '../images/web-design.png'
import imgc from '../images/panier.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Experience() {
  return (
 <section className='experience' id="experience">
    <Container fluid>
        <Row>
            <h1>Mes expériences</h1>
           
            <Col xs={12}>
            <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInRight" : ""}> 
                <div className='experiences shadow-lg p-3 mb-5 bg-body rounded'>
                <h4>Certification en javascript</h4>
            <h5>Juin 2022</h5>
            <p>J'ai reussi la certification en ligne sur la plateforme sololearning dans le domaine de javascript en validant plus
              de 50 exercices.
            </p>
                </div>
                </div>}
              </TrackVisibility>
            </Col>


            <Col xs={12}>
            <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInLeft" : ""}> 
               <div className='experiences  shadow-lg p-3 mb-5 bg-body rounded'>
                <h4>Formation à Bakeli</h4>
            <h5>Avril 2022</h5>
            <p>J'ai appris beaucoup de language et framwork sur la formation de bakeli et beaucoup de mes taches sont validés par des coachs expérimentés telque les landing pages les crud avec firebase et surtout Git.   </p>
                </div>
                </div>}
              </TrackVisibility>
            </Col>


            
        </Row>
        
        <Row className='row-bas'>

            <Col xs={12} md={6} lg={3} className='col' >
                <div className='col1'>
                <img src={imga} alt="ami"  className='img'/>
                </div>
                <h4>18 projets</h4>
            </Col>

            <Col xs={12} md={6} lg={3} className='col' >
            <div className='col1'>
            <img src={imgb} alt="amie" className='img' />
            </div>
            <h4>30 Algorithmes</h4>
            </Col>

            <Col xs={12} md={6} lg={3} className='col' >
            <div className='col1'>
            <img src={imgc} alt="amia"className='img' />
            </div>
            <h4>10 console.log();</h4>
            </Col>

            <Col xs={12} md={6} lg={3} className='col' >
            <div className='col1'>
            <img src={imga} alt="ami" className='img' />
            </div>
            <h4>16 border : solid red 1px;</h4>
            </Col>
        </Row>
    </Container>

 </section>
  )
}
