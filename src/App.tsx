import React, { useState } from 'react';
import logo from './logo240.avif';
import './App.css';
import Image from 'react-bootstrap/Image';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Image from 'react-bootstrap/Image';
// import MenuIcon from './MenuIcon'; // Assurez-vous que le chemin d'importation est correct
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Button } from 'react-bootstrap';

import Accordion from 'react-bootstrap/Accordion';

function AccordionInfo() {
  return (
    <Container>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Ingredients</Accordion.Header>
          <Accordion.Body>
            Marc de café, beurre, œufs, sucre, beaucoup d'amour &lt;3
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Artisanat local et fait avec amour</Accordion.Header>
          <Accordion.Body>
            Tous nos biscuits sont confectionnés à la main, avec le plus grand soin. Nous mettons tout notre cœur dans chaque biscuit pour vous offrir une expérience gustative unique.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>L'art de la récup'</Accordion.Header>
          <Accordion.Body>
            Le marc de café utilisé dans nos recettes provient directement de nos propres cafés. Plutôt que de le jeter, nous le transformons en une délicieuse gourmandise. Après tout, pourquoi se contenter de boire votre café quand vous pouvez aussi le croquer ?          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Des ingrédients de qualité</Accordion.Header>
          <Accordion.Body>
            Nous utilisons uniquement des produits de haute qualité, privilégiant les ingrédients bio quand c'est possible. Nos œufs et notre beurre proviennent de fermes locales qui pratiquent une agriculture éthique et durable. Parce que le bon goût commence par de bons produits !
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Une production éthique</Accordion.Header>
          <Accordion.Body>
            Chaque étape de la fabrication de nos biscuits est pensée pour minimiser notre impact environnemental. Nous nous engageons à utiliser des méthodes de production respectueuses de l'environnement, afin que chaque biscuit soit non seulement bon pour vos papilles, mais aussi pour la planète.
            <br/>
            Nos papiers d'emballages sont fait avec une imprimante classique de bureau avec du papier tartine, tout est fabriqué à la main.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}


const Toggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBarHeight = 0.2;
  const toggleBarWidth = 2;
  const toggleBarColor = 'black';

  const toggleClick = () => {
    setIsOpen(!isOpen);
    console.log("isOpen");
    console.log(isOpen);
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
        }}
      />
      <span style={{
          height: `${toggleBarHeight}rem`,
          width: `${toggleBarWidth}rem`,
          backgroundColor: toggleBarColor,
          display: 'block',
          transform: isOpen ? `translate(0rem, -${toggleBarHeight/2}rem) rotate(-45deg)` : '',
          transitionDuration: '250ms',
          borderRadius: 999,
        }}
      />
    </Navbar.Toggle>
  );
}

const Navigation: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top" style={{ borderBottom: 'solid 2px #ebebeb' }}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" style={{height: '2rem'}}/>
        </Navbar.Brand>
        <Toggle/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about-us">Qui sommes nous ?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const AboutUs: React.FC = () => {
  return (
    <body style={{ minHeight: '100vh'}}>
      <Container style={{backgroundColor: 'white'}}>
        <h1 style={{ fontSize: 'min(160px, 20vmin)', textAlign: 'center', fontFamily: 'Comic CAT' }}>Kotry Koffi</h1>
        <p>
          Bonjour !
          <br/><br/>
          Nous sommes Kotry Koffi, un kot unique en son genre qui a eu l'idée de réutiliser le marc de café de nos cafés pour en faire des biscuits délicieux et respectueux de l'environnement. Ce projet  est né au sein de notre kot étudiant, grâce à l'inspiration et au travail de Loïs Destatte.
          <br/><br/>
          Loïs, étudiant en communication visuelle et graphique à Saint-Luc Liège en Belgique, est l'âme créatrice de Kotry Koffi. Connu affectueusement comme le "Papa du kot", Loïs a conçu et développé l’identité artistique avec une sensibilité particulière aux souvenirs , aux histoires et aux rencontres marquantes de notre vie en collocs.
          <br/><br/>
          Le Kotry Koffi est un projet sentimental, une manière de laisser une trace tangible de ses années de colocation et de vie étudiante.
          <br/><br/>
          À travers Kotry Koffi, nous voulons non seulement proposer des produits gourmands et innovants, mais aussi raconter l'histoire de notre kot.
          <br/><br/>
          Notre aventure est en constante évolution, tout comme nos biscuits qui évoluent avec nous. Nous vous invitons à découvrir notre univers, à savourer nos créations et à faire partie de cette belle histoire que nous écrivons jour après jour.
          <br/><br/>
          Rejoignez nous dans cette aventure gourmande et durable, et laissez vous emporter par la magie de Kotry Koffi, où chaque biscuit raconte une histoire et chaque saveur est une invitation au voyage dans notre vie étudiante.
        </p>
        <Row xs={1} md={2} lg={3}>
          <Col className="p-0 d-flex">
            <Image src={require('./assets/img/image_gallery_0.avif')} alt="Kotry Koffi Art 1" style={{aspectRatio: 1}} fluid />
          </Col>
          <Col className="p-0 d-flex">
            <Image src={require('./assets/img/image_gallery_1.avif')} alt="Kotry Koffi Art 2" style={{aspectRatio: 1}} fluid />
          </Col>
          <Col className="p-0 d-flex">
            <Image src={require('./assets/img/image_gallery_2.avif')} alt="Kotry Koffi Art 3" style={{aspectRatio: 1}} fluid />
          </Col>
          <Col className="p-0 d-flex">
            <Image src={require('./assets/img/image_gallery_3.avif')} alt="Kotry Koffi Art 4" style={{aspectRatio: 1}} fluid />
          </Col>
        </Row>
      </Container>
    </body>
  );
}

const Home: React.FC = () => {
  // const [btnHover, setBtnHover] = useState(false);

  // const button_style = {
  //     backgroundColor: '#FF5733',
  //     color: 'white',
  //     borderRadius: '20px',
  //     padding: '12px 24px',
  //     margin: '10px',
  //     transition: 'transform 0.3s ease',
  //     transform: btnHover ? 'scale(1.2) rotate(-5deg)' : 'scale(1)',
  //     boxShadow: btnHover
  //         ? '0px 6px 12px rgba(0, 0, 0, 1)'
  //         : '0px 4px 6px rgba(0, 0, 0, 0.1)',
  // };
  return (
    <body style={{ minHeight: '100vh'}}>
      <Stack direction="vertical" gap={5}>
        <Container className='d-flex flex-column align-items-center gap-5'>
          <h1 style={{ fontSize: 'min(160px, 20vmin)', textAlign: 'center', fontFamily: 'Comic CAT' }}>Kotry Koffi</h1>
          <Image src={require('./assets/img/image_home.avif')} alt="Kotry Koffi bag" style={{aspectRatio: 1}} fluid />
          <p>
            Les meilleurs biscuits au marc de café ! 
            <br/><br/>
            Que ce soit pour accompagner votre café matinal ou pour une collation raffinée l'après-midi, nos biscuits au marc de café sont le choix parfait pour tous vos moments gourmands.
          </p>
          <Button
            style={{width: 'fit-content'}}
            variant="primary"
            onClick={() => {window.location.href="https://www.instagram.com/le_kotry?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";}}
          >
            ACHETEZ-LES ICI !
          </Button>
        </Container>
        <Image src={require('./assets/img/banner.avif')} alt="Kotry Koffi Banner" fluid />
        <AccordionInfo/>
      </Stack>
    </body>
  );
}

function App() {
  return (
    <div>
      <header>
        <span id="top"/>
        <Navigation />
      </header>
      <AboutUs/>
      {/* <Home/> */}
      <footer className='bg-body-tertiary'>
        <Container className='d-flex align-items-end justify-content-end mt-5' style={{ bottom: 0, width: '100%', height: '160px', position: 'relative' }}>
          <a href='#top' style={{ position: 'absolute', bottom: '-3px', left: '-80px'}}>
            <svg viewBox="0 0 800 100" style={{ width: '320px', maxWidth: '100%' }}>
              <path d="M396.226 0C270.081 0 129.38 67.4034 0 100H800C636.119 67.4034 539.623 0 396.226 0Z" fill="black"/>
              <text x="300" y="80" fill="white" style={{ fontSize: '3rem', fontFamily: 'Comic CAT' }}>To the Top</text>
            </svg>
          </a>
          <a
            href='https://www.instagram.com/le_kotry/?utm_source=ig_web_button_share_sheet'
            style={{
              marginBottom: '32px',
              marginRight: '4vw',
            }}
          >
            <Image width="60" src={require('./assets/img/icon_insta.avif')} alt="Icon Instagram" />
          </a>
        </Container>
      </footer>
    </div>
  );
}

export default App;
