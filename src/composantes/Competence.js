import React from 'react'
import { Col, Row, Container} from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export default function Competence() {
  return (
   <section className='competence' id='competence'>
    <h1>Mes Compétences</h1>
    <Container fluid>
    <Row className='py-3'>
        <Col md={6}>
        <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInRight" : ""}>
            <h3 className='right'>OUTILS</h3>
            <div className='left-outils'>
              
            <ul className='flex'>

                <li className='a'> </li><br />
                <li className='aa'><div className='aaa'></div> </li><br />
                <li className='aa'><div className='aaa'></div>  </li><br />
                <li className='aa'>< div className='aaa'></div>  </li><br />
                <li className='aa'><div className='aaa'></div>  </li><br />
                <li className='aa'><div className='aaa'></div>  </li><br />
                <li className='aa'>< div className='aaa'></div>  </li><br />
            
                
                 
           </ul>

            <ul className='flexe'>

                    <li className='b'> <h4>BOOTSTRAP</h4></li>
                    <li className='b'> <h4>REACT</h4></li> 
                    <li className='b'> <h4>Angular</h4></li>
                     <li className='b'> <h4>Firebase et Mysql</h4> </li>    
                    <li className='b'> <h4>Django</h4></li> 
                    <li className='b'> <h4>Github</h4></li>
                    <li className='b'> <h4>Gitlab</h4> </li>
                    <li className='b'> <h4>Postgresql</h4></li>
                    

            </ul>
               
           
            </div>
            </div>}
              </TrackVisibility>
        </Col>

        <Col md={6}>
        <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInLeft" : ""}>
            <h3 className='left'>LANGUAGE</h3>
<div className='right-language'>

<ul className='flexe'>
    <li className='b'> <h4>HTML</h4> </li>
    <li className='b'> <h4>CSS</h4>  </li>
    <li className='b'> <h4>JAVASCRIPT</h4> </li>
    <li className='b'> <h4>Java</h4> </li>
    <li className='b'> <h4>Php</h4></li> 
    <li className='b'> <h4>Python</h4></li>
    </ul>

<ul className='flex'>    
        <li className='a'> </li><br />
        <li className='aa'><div className='aaa'></div> </li><br />
        <li className='aa'><div className='aaa'></div>  </li><br />
        <li className='aa'>< div className='aaa'></div>  </li><br />
        <li className='aa'><div className='aaa'></div>  </li><br />
        <li className='aa'>< div className='aaa'></div>  </li><br />

    </ul>

   
   
   </div>
   </div>}
              </TrackVisibility>
        </Col>
    </Row>

    <Row className='py-3'>
   

        <Col md={6}>
        <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInRight" : ""}>
            <h3 className='right'>LANGUES</h3>
            <div className='left-outil'>
              
            <ul className='flexes'>

                    <li className='b'> <h4>FRANCAIS</h4></li>
                    <li className='b'> <h4>ANGLAIS</h4> </li>
                    <li className='b'> <h4>WOLOOF</h4></li> 

            </ul>
               
           
            </div>
            </div>}
              </TrackVisibility>
        </Col>

        <Col md={6}>
        <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__lightSpeedInLeft" : ""}>
                 <h3 className='left'>HOBBIES</h3>
                    <div className='right-languages'>
                    <ul className='flexes'>
                        <li className='b'> <h4>Créatrice du blog (Mon job de dev) </h4> </li>
                        <li className='b'> <h4>Développement web en général</h4>  </li>
                        <li className='b'> <h4>Calculs distribués</h4> </li>
                        </ul>
                    
                    </div>
                    </div>}
              </TrackVisibility>
        </Col>
    </Row>
    </Container>
   

   </section>
  )
}
