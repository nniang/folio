import React from 'react'
import { Col, Row, Container,Card,CardGroup,Button } from "react-bootstrap";
import img1 from '../images/31.JPG'
import img2 from '../images/tach8.jpg'
import img3 from '../images/tache6.jpg'
import img4 from '../images/tache7.jpg'
import img5 from '../images/tache9 (1).jpg'
import img6 from '../images/TACHEBOOTSTRAP (1).jpg'
import img7 from '../images/tayeur.JPG'
import img8 from '../images/easy.png'
import img9 from '../images/dashboard.PNG'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import VideoCard from './VideoCard';
import videoEasyMarket from "../video/AppABDS.mp4";
import videoEasyMarkets from "../video/gestionApp.mp4";
import videoEasyMarketsE from "../video/marketplace.mp4";


export default function Portefolio() {
  return (
   <section className='portefolio' id='portefolio'>
    <Container fluid>
        <h1>Portfolio</h1>

        <Row className='row1'>
          <Col lg={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__lightSpeedInRight" : ""}>
                  <VideoCard
                    title="Application ABDS"
                    year="Avril 2025"
                    description="Dans le cadre de ce projet, j'ai travaillé sur le frontend et backend..."
                    videoSrc={videoEasyMarket}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col lg={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__lightSpeedInRight" : ""}>
                  <VideoCard
                    title="Application ENES"
                    year="2025"
                    description="Dans le cadre de ce projet, j'ai travaillé sur le frontend et backend..."
                    videoSrc={videoEasyMarkets}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col lg={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__lightSpeedInRight" : "" } m-5>
                  <VideoCard
                    title="Application FNTRAIDING"
                    year="Avril 2025"
                    description="Dans le cadre de ce projet, j'ai travaillé sur le frontend et backend..."
                    videoSrc={videoEasyMarketsE}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        <Col lg={4}>
        <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInRight" : ""}> 
            <CardGroup>
      <Card className="p-3 mb-5 ">
        <Card.Img variant="top" className='image' src={img7} alt='imgA' style={{width:"300px", height:"300px"}} />
        <Card.Body>
          <Card.Title> Projet Tayeur-Gestion</Card.Title>
          <Card.Text>
            Projet realisé en react/django qui pour objectif de faciliter aux tailleur leur travail 
         <br /><br />
         
         <Button className='btn' href='https://gitlab.com/red-team-volkeno/tayeur-gestion' target='_blank'>voir le projet en ligne</Button>
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
      <Card className="p-3 mb-5 ">
        <Card.Img variant="top" className='image' src={img8} alt='imgA' style={{width:"300px", height:"300px"}} />
        <Card.Body>
          <Card.Title> Easy-Market </Card.Title>
          <Card.Text>
            Projet realisé en react-native qui pour objectif de faire une commerce elctronique 
         <br /><br />
         
         <Button className='btn' href='https://gitlab.com/bakelipro/easy-market-acheteur-mobile' target='_blank'>voir le projet en ligne</Button>
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
      <Card className="p-3 mb-5 ">
        <Card.Img variant="top" className='image' src={img9} alt='imgA' style={{width:"300px", height:"300px"}} />
        <Card.Body>
          <Card.Title>Gestion de Stock</Card.Title>
          <Card.Text>
            Projet realisé en React Django qui pour objectif de faire Une authentification et crud sur les produits commandes founisseur etc..
         <br /><br />
         
         <Button className='btn' href='https://github.com/nniang/sendev_project' target='_blank'>voir le projet en ligne</Button>
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
          Projet e-commerce integration realisée en Bootstrap et javascript qui permet de visualisé les produits commercialisés <br /><br />
         
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
         
         <Button variant="outline-info" href='https://frolicking-lokum-f273a0.netlify.app/' target='_blank'>voir le projete en ligne</Button>
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
