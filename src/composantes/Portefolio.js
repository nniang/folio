import React from 'react'
import { Col, Row, Container,Card,CardGroup,Button } from "react-bootstrap";
import img1 from '../images/31.JPG'
import img2 from '../images/tach8.jpg'
import img3 from '../images/tache6.jpg'
import img4 from '../images/tache7.jpg'
import img5 from '../images/tache9 (1).jpg'
import img6 from '../images/TACHEBOOTSTRAP (1).jpg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Portefolio() {
  return (
   <section className='portefolio' id='portefolio'>
    <Container fluid>
        <h1>Portfolio</h1>

        <Row className='row1'>
        <Col lg={4}>
        <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInRight" : ""}> 
            <CardGroup>
      <Card className="p-3 mb-5 ">
        <Card.Img variant="top" className='image' src={img1} alt='imgA' style={{width:"300px", height:"300px"}} />
        <Card.Body>
          <Card.Title> crud et authentification</Card.Title>
          <Card.Text>
            Projet realisé en Angular qui pour objectif de faire Une authentification et crud sur les produits 
         <br /><br />
         
         <Button className='btn' href='https://regal-dragon-7f08d7.netlify.app/' target='_blank'>voir le projet en ligne</Button>
          </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>
      </div>}
              </TrackVisibility>
            </Col>

            <Col lg={4}>
            <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInRight" : ""}> 
            <CardGroup>
      <Card className=" p-3 mb-5 bg-body rounded">
        <Card.Img variant="top"className='image' src={img2} alt='imgB' />
        <Card.Body>
          <Card.Title>Our studio</Card.Title>
          <Card.Text>
         Projet landing page realisé en Bootstrap et javascript qui permet de visualisé des produits. 
         <br /><br />
         
         <Button variant="outline-info" href='https://zesty-daffodil-e9faff.netlify.app' target='_blank'>voir le projet en ligne</Button>
          </Card.Text>
        </Card.Body>
       
      </Card>
      </CardGroup>
      </div>}
              </TrackVisibility>
            </Col>

            <Col lg={4}>
            <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInRight" : ""}>
            <CardGroup>
      <Card className="p-3 mb-5 bg-body rounded">
        <Card.Img variant="top" className='image' src={img3} alt='imgC' />
        <Card.Body>
          <Card.Title>Bakeli</Card.Title>
          <Card.Text>
          Projet landing page realisé en Bootstrap et javascript qui permet de visualisé des les infos de Bakeli. 
           <br /><br />
         
         <Button variant="outline-info" href='https://aquamarine-profiterole-205163.netlify.app/'target='_blank'>voir le projet en ligne</Button>
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
    </div>}
       </TrackVisibility>
            </Col>
        </Row>



        <Row className='row2'>
            <Col lg={4}>
            <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInLeft " : ""}>
            <CardGroup>
      <Card className="p-3 mb-5 ">
        <Card.Img variant="top" className='image' src={img4} alt='imgD' />
        <Card.Body>
          <Card.Title>Business cursual</Card.Title>
          <Card.Text>
          Projet landing page realisé en Bootstrap et javascript qui permet de visualisé les Business cursial <br /><br />
         
         <Button variant="outline-info" href='https://comforting-pegasus-aedb41.netlify.app' target='_blank'>voir le projet en ligne</Button>
          </Card.Text>
        </Card.Body>
      </Card >
      </CardGroup>
      </div>}
       </TrackVisibility>
      </Col>

      <Col lg={4}>
      <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInLeft " : ""}>
            <CardGroup>
      <Card className="p-3 mb-5 ">
        <Card.Img variant="top" className='image' src={img5} alt='imgE' />
        <Card.Body>
          <Card.Title>Vente d'habillement</Card.Title>
          <Card.Text>
          Projet e-commerce integration realisé en Bootstrap et javascript qui permet de visualisé les produits commercialisés <br /><br />
         
         <Button variant="outline-info" href='https://effulgent-halva-3edd18.netlify.app' target='_blank'>voir le projet en ligne</Button>
          </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>
      </div>}
       </TrackVisibility>
      </Col>

      <Col lg={4}>
         <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInLeft" : ""}>
            <CardGroup>
      <Card className="p-3 mb-5 ">
        <Card.Img variant="top"className='image' src={img6} alt='imgF' />
        <Card.Body>
          <Card.Title>Agence digital</Card.Title>
          <Card.Text>
          Projet landing page realisé en Bootstrap et javascript pour une  Agence digital <br/> <br /><br />
         
         <Button variant="outline-info" href='https://frolicking-lokum-f273a0.netlify.app/' target='_blank'>voir le projeten en ligne</Button>
          </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>
       </div>}
       </TrackVisibility>
      </Col>
  
        
        </Row>
    </Container>
   </section>
  )
}
