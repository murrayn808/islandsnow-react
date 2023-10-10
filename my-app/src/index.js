import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css';
import { Navbar, Nav, NavDropdown, Button, Container, Row, Col, Image, Form, Dropdown, DropdownToggle } from 'react-bootstrap';
import { Cart, Facebook, HouseFill, Instagram, PersonFill, Pinterest, Search, Twitter } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Nav className="me-auto">
        <Nav.Link><Facebook/></Nav.Link>
        <Nav.Link><Twitter/></Nav.Link>
        <Nav.Link><Pinterest/></Nav.Link>
        <Nav.Link><Instagram/></Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link><HouseFill/> </Nav.Link>
        <Nav.Link><Search/> </Nav.Link>
        <Nav.Link><PersonFill/> </Nav.Link>
        <NavDropdown title={<Cart/>}>
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

const IslandSnowLogo = () => (
  <Row>
    <Col>
      <Image className={"img-fluid rounded mx-auto d-block py-2"} src="https://courses.ics.hawaii.edu/ics314f23/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png" alt="logo" class="img-fluid rounded mx-auto d-block py-2" />
    </Col>
  </Row>
);

const MiddleMenu = () => (

  <Row className={"row justify-content-center pt-3"}>
      <Col md={"auto"}><Dropdown.Toggle variant="" id="dropdown-basic">
        <strong>MEN</strong>
      </Dropdown.Toggle></Col>

      <Col md={"auto"}><Dropdown.Toggle variant="" id="dropdown-basic">
        <strong>WOMEN</strong>
      </Dropdown.Toggle></Col>

      <Col md={"auto"}><Dropdown.Toggle variant="" id="dropdown-basic">
        <strong>KIDS</strong>
      </Dropdown.Toggle></Col>

      <Col md={"auto"}><Dropdown.Toggle variant="" id="dropdown-basic">
        <strong>BRANDS</strong>
      </Dropdown.Toggle></Col>

      <Col md={"auto"}><Button variant=""><strong>SEARCH</strong></Button>{' '}</Col>
  </Row>
);

const FullWidthImage = () => (
    <Image style={{width:"100%"}} className={"justify-content-center"} src={"https://courses.ics.hawaii.edu/ics314f23/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png"}/>
);

const FooterMenu = () => (

  <footer>
    <Container>
      <Row className={"row py-3"}>
      <Col>
        NAVIGATION
        <hr/>

        <div>About Us</div>
        <div>Employment</div>
        <div>Videos</div>
      </Col>
      <Col>
        MAIN MENU
        <hr/>
        <div>Men</div>
        <div>Women</div>
        <div>Kids</div>
      </Col>
      <Col>
        CONNECT
        <hr/>
        <div>Sign up for the latest updates</div>
        <input type="text" placeholder="Enter Email Address"/>
        <div className="btn btn-dark">Join</div>
      </Col>
    </Row>
    </Container>
  </footer>
);

const IslandSnow = () => (
  <Container fluid>
    <TopMenu fluid/>
    <IslandSnowLogo fluid/>
    <MiddleMenu fluid/>
    <FullWidthImage fluid/>
    <FooterMenu fluid/>
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);