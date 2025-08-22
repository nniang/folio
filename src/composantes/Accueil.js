import React from 'react';
import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import img1 from '../images/telephone-mobile (1).png'
import img2 from '../images/e-mail (1).png'
import img3 from '../images/localisateur.png'
import imge from '../images/ngagne.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export default function Accueil() {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Ngagne Niang"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    <section className='accueil' id='accueil' >
      <Container>
        <Row>
          <Col xs={12}>
            <div className='cadre-accueil'>
              <div className='left'>

                <div className='left-haut'>
                  <span className='span1'>Hello je suis</span><span className="span2" dataPeriod="1000" data-rotate='["Mouhamed Niang"]'> {text}</span>
                  <h2>Développeur Web/Mobile</h2>
                </div>

                <div className='left-bas'>
                  <ul>
                    <li><img src={img1} />  +221780125721</li> &nbsp;  &nbsp;&nbsp;  &nbsp;
                    <li><img src={img2} /> niangngagne000@gmail.com</li> &nbsp;  &nbsp;&nbsp;  &nbsp;
                    <li><img src={img3} /> KEUR MASSAR</li>

                  </ul>
                </div>

              </div>

              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? " animate__animated animate__zoomIn " : ""}>
                    <div className='right'>
                      <img src={imge} />
                    </div>
                  </div>}
              </TrackVisibility>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}
