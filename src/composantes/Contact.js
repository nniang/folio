import React from 'react'
import { Col, Row, Container} from "react-bootstrap";
import img from '../images/ngagne.jpeg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export default function Contact() {
  return (
   <section className='contact'>
    <Container >
        <h1>Restons en contact</h1>

      
        <Row className='row-contact'>
            <Col md={6}>

            <form >
            <Row className='row-form'>
            <Col xs={12} className='px-1'>
                <div className='formul'>
                <input type="text"  placeholder='Nom' />
                </div>
             
             </Col>

                    <Col xs={12} className='px-1'>
                    <div className='formul'>
                    <input type="text"  placeholder='Prenom' />
                   </div>
                    
                    </Col>
                    <Col>
                    <textarea  rows="8"  placeholder='message'  ></textarea><br />
                    <button type='Submit'> Send</button>
                    </Col>
         </Row>

            </form>
           
            </Col>
            <Col md={6}>
            <TrackVisibility>
            {({isVisible})=>
            <div className={isVisible ? " animate__animated animate__zoomIn" : ""}>
            <div className='right'>
                   <img src={img} alt='aaz' />
                </div>
                </div>}
              </TrackVisibility>
            </Col>
        </Row>
    </Container>
   </section>
  )
}
