import React from 'react'
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    BrowserRouter as Router
  } from "react-router-dom";

  
 
export default function Menu() {

    const [activeLink, setActiveLink] = useState('accueil');
  const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 20) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [])
    
      const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }


  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="accueil">
        <h1 className='logo'>Portfolio</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
         <span className="navbar-toggler-icon"></span>
         <span className='menu'>Menu</span>     
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#accueil" className={activeLink === 'accueil' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('accueil')}>ACCUEIL</Nav.Link>
              <Nav.Link href="#presentation" className={activeLink === 'presentation' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('presentation')}>PRESENTATION</Nav.Link>
              <Nav.Link href="#portefolio" className={activeLink === 'portefolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('portefolio')}>PORTFOLIO</Nav.Link>
              <Nav.Link href="#competence" className={activeLink === 'competence' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('competence')}>COMPETENCES</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>EXPERIENCES</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
