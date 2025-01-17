import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Helmet } from 'react-helmet'
import { Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo_JLM_op.png"
const TITLE = 'Home - JLM Opportunity'
function Header() {
  return (

    <>
    <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">
    <img
        src={logo}
        width="35"
        height="35"
        className="d-inline-block align-top"
        alt="JLM Opportunity Logo"
      />
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Accueil</Nav.Link>
      <Nav.Link href="#form">Formations</Nav.Link>
      <Nav.Link href="#offre">Offre de travail</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
</>

    )
}

export default Header