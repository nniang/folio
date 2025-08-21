import React from 'react'
import { Col, Row, Container} from "react-bootstrap";
import imga from '../images/programmation (1).png'
import imgb from '../images/web-design.png'
import imgc from '../images/panier.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import SimpleSlider from './Slider';

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
                <h4>LIcence en Systeme Reseaux Télecom</h4>
            <h5> 2020-2021</h5>
            <p>J'ai obtenu ma licence en Systèmes Réseaux Télécoms à UADB(Université Alioune Diop de Bambey) en 2021 
              et j'ai effectué une soutenance sur la mise en place d'un système de détection
               d'immatriculation des véhicules dans un parking avec contrôle d'accès utilisant des matériels IoT.
            </p>
                </div>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12}>
            <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInRight" : ""}> 
                <div className='experiences shadow-lg p-3 mb-5 bg-body rounded'>
                <h4>Tayeur-Gestion</h4>
            <h5>Avril 2023</h5>
            <p>Tayeur-gestion est une application de gestion spécialement conçue pour les tailleurs. 
              Elle a été développée en utilisant React pour la partie frontend et Django pour le backend. Mon rôle dans ce projet était de travailler sur les aspects du frontend et du backend, 
              contribuant ainsi à la création d'une solution complète pour la gestion efficace des activités de tailleurs.
            </p>
                </div>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12}>
            <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInRight" : ""}> 
                <div className='experiences shadow-lg p-3 mb-5 bg-body rounded'>
                <h4>Easy-Market</h4>
            <h5>Avril 2023</h5>
            <p>Dans le cadre de ce projet, j'ai joué un rôle crucial en me concentrant principalement sur le côté frontend.
               Mon travail consistait à concevoir l'interface utilisateur, à créer des composants interactifs,
                et à veiller à ce que l'expérience de navigation soit intuitive et agréable pour les utilisateurs.
                 J'ai également travaillé sur l'intégration des fonctionnalités de paiement en ligne,
                  l'affichage des produits et la gestion du panier,
                   contribuant ainsi à faire de Easy-Market une application de commerce électronique complète et efficace.
                    Mon engagement dans le développement du frontend a été essentiel pour offrir une expérience de shopping en ligne exceptionnelle à nos utilisateurs.
              J’ai utiliser react-native Redux toolkit query pour concevoir des UI
            </p>
                </div>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12}>
            <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInRight" : ""}> 
                <div className='experiences shadow-lg p-3 mb-5 bg-body rounded'>
                <h4>Certification en javascript</h4>
            <h5>Juin 2022</h5>
            <p>J'ai reussi la certification en ligne sur la plateforme ProgrammingHup dans le domaine de javascript en validant plus
              de 50 exercices.
            </p>
                </div>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12}>
            <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInRight" : ""}> 
                <div className='experiences shadow-lg p-3 mb-5 bg-body rounded'>
                <h4>Certification en React</h4>
            <h5>Novembre 2022</h5>
            <p>J'ai reussi la certification en ligne sur la plateforme ProgrammingHup dans le domaine de React en validant plus
              de 50 exercices.
            </p>
                </div>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12}>
            <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInRight" : ""}> 
                <div className='experiences shadow-lg p-3 mb-5 bg-body rounded'>
                <h4>Certification en React-native</h4>
            <h5>Juin 2022</h5>
            <p>J'ai reussi la certification en ligne sur la plateforme ProgrammingHup dans le domaine de React-native en validant plus
              de 50 exercices.
            </p>
                </div>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12}>
            <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInRight" : ""}> 
                <div className='experiences shadow-lg p-3 mb-5 bg-body rounded'>
                <h4>Certification en Java</h4>
            <h5>Juin 2022</h5>
            <p>J'ai reussi la certification en ligne sur la plateforme ProgrammingHup dans le domaine de Java en validant plus
              de 50 exercices.
            </p>
                </div>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12}>
            <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInRight" : ""}> 
                <div className='experiences shadow-lg p-3 mb-5 bg-body rounded'>
                <h4>Certification en Django/Python</h4>
            <h5>Juin 2022</h5>
            <p>J'ai reussi la certification en ligne sur la plateforme ProgrammingHup dans le domaine de Django-Python en validant plus
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
            <p>J'ai appris beaucoup de language et framwork sur la formation de bakeli et beaucoup de mes taches sont validés par des coachs expérimentés telque les landing pages les crud avec firebase et surtout Git. Et j'ai fait mon stage a Red Team qui une branch de Volkeno  </p>
                </div>
                </div>}
              </TrackVisibility>
              <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInLeft" : ""}> 
               <div className='experiences  shadow-lg p-3 mb-5 bg-body rounded'>
                <h4>Formation en ligne à ForceN</h4>
            <h5>Janvier 2024</h5>
            <p>J'ai appris le  language Dart et son framwork Flutter sur la formation de ForceN et beaucoup de mes taches sont validés par des coachs expérimentés telque les landing pages les crud avec firebase et surtout Git et UI/UX design et faire un projet final pour obtenir mon certification  </p>
                </div>
                </div>}
              </TrackVisibility>
              <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInLeft" : ""}> 
               <div className='experiences  shadow-lg p-3 mb-5 bg-body rounded'>
                <h4>Formation en ligne à ForceN</h4>
            <h5>Janvier 2024</h5>
            <p>J'ai appris le  language Javascript/Typescript et le  framwork Angular sur la formation de ForceN et beaucoup de mes taches sont validés par des coachs expérimentés telque les landing pages les crud avec firebase et surtout Git et UI/UX design et faire un projet final pour obtenir mon certification  </p>
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
                <h4>10 projets</h4>
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
        <Row className='row-slider '>
        <Col xs={12} md={12} lg={10} className='col_slider' >
          <h1 className=''>VOICI MES CERTIFICATIONS</h1>
          <SimpleSlider/>
        </Col>
        </Row>
    </Container>

 </section>
  )
}
