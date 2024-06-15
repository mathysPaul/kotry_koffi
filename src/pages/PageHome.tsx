import React from 'react';
import {
  Image,
  Container,
  Stack,
  Button,
  Accordion,
  Row,
  Col,
} from 'react-bootstrap';
import Layout from '../components/Layout'
import banner from '../assets/img/banner.avif';

function AccordionInfo() {
  return (
    <Container>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Ingredients</Accordion.Header>
          <Accordion.Body>
            Marc de café, farine, beurre, œufs, sucre, beaucoup d'amour &lt;3
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

const Home: React.FC = () => {
  return (
    <Stack direction="vertical">
      <Container className='d-flex flex-row align-items-center'  style={{ height: 'calc(100vh - 160px - 75px)' }}>
        <Row xs={1} md={2} className="g-0 justify-content-center" style={{ height: '100%' }}>
          <Col className="d-flex flex-column justify-content-evenly justify-content-md-center gap-md-5 align-items-start z-1" style={{ height: '100%' }}>
            <h1 className="text-md-start text-center" style={{ fontSize: 'min(140px, 10vmin)', width: '100%', fontFamily: 'Comic CAT' }}>
              Kotry Koffi
            </h1>
            {/* Conditionally hide image on md and higher screens */}
            <img
              className="d-md-none"
              src={require('../assets/img/image_home.avif')}
              alt="Kotry Koffi bag"
              style={{
                objectFit: 'contain',
                width: '100%',
                maxHeight: '50%',
              }}
            />
            <p>
              <span>Les meilleurs biscuits au marc de café !</span>
              <p style={{textWrap: 'balance'}}>
                Que ce soit pour accompagner votre café matinal ou pour une collation raffinée l'après-midi,
                nos biscuits au marc de café sont le choix parfait pour tous vos moments gourmands.
              </p>
              <Button
                className='mt-md-2'
                style={{ width: 'fit-content' }}
                variant="primary"
                onClick={() => { window.location.href = "https://www.instagram.com/le_kotry?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="; }}
              >
                ACHETEZ-LES ICI !
              </Button>
            </p>
          </Col>
          {/* Image column only on md and larger screens */}
          <Col className="d-none d-md-flex align-items-center justify-content-center" style={{
                height: '100%',
              }}>
            <Image
              src={require('../assets/img/image_home.avif')}
              alt="Kotry Koffi bag"
              style={{
                objectFit: 'cover',
                height: '100%',
                maxHeight: '550px',
              }}
              fluid
            />
          </Col>
        </Row>
      </Container>

      <div style={{
        marginBottom: '64px',
        width: '100%',
        height: '160px',
        backgroundImage: `url(${banner})`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%'
      }}/>
      <AccordionInfo/>
    </Stack>
  );
}

const PageHome: React.FC = () => {
  return (
    <Layout>
      <Home/>
    </Layout>
  );
}

export default PageHome;