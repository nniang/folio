import React from 'react'
import { Col, Row, Container} from "react-bootstrap";

export default function Footer() {
  return (
   <section className='footer'>
    <Container>
        <Row>
            <Col className='d-flex justify-content-center align-items-center'>
            <h6>Copyrigth@reserve portfolio 2022</h6>
            </Col>
        </Row>
    </Container>
   </section>
  )
}
