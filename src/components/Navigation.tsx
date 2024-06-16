import React, { useState } from 'react';
import {
  Container,
  Nav,
  Navbar,
  Image
} from 'react-bootstrap';
import logo from '../logo.svg';

const Toggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBarHeight = 0.2;
  const toggleBarWidth = 2;
  const toggleBarColor = '#1D1D1B';

  const toggleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar.Toggle
      style={{ boxShadow: 'none', border: 0, minHeight: '2rem' }}
      aria-controls="basic-navbar-nav"
      onClick={toggleClick}
    >
      <span style={{
        height: `${toggleBarHeight}rem`,
        width: `${toggleBarWidth}rem`,
        marginBottom: isOpen ? 0 : `${toggleBarWidth/4}rem`,
        backgroundColor: toggleBarColor,
        display: 'block',
        transform: isOpen ? `translate(0rem, ${toggleBarHeight/2}rem) rotate(45deg)` : '',
        transitionDuration: '250ms',
        borderRadius: 999,
      }}/>
      <span style={{
        height: `${toggleBarHeight}rem`,
        width: `${toggleBarWidth}rem`,
        backgroundColor: toggleBarColor,
        display: 'block',
        transform: isOpen ? `translate(0rem, -${toggleBarHeight/2}rem) rotate(-45deg)` : '',
        transitionDuration: '250ms',
        borderRadius: 999,
      }}/>
    </Navbar.Toggle>
  );
}

const Navigation: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ borderBottom: 'solid 2px #ebebeb' }}>
      <Container>
        <Navbar.Brand href="#/">
          <Image src={logo} alt="Logo" style={{height: '3rem'}}/>
        </Navbar.Brand>
        <Toggle/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/about">Qui sommes nous ?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
