import {
  Image,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Layout from '../components/Layout'

const AboutUs: React.FC = () => {

  const paragraphs = [
    "Bonjour !",
    "Bienvenue chez Kotry Koffi, dans notre kot étudiant à l'initiative unique : transformer le marc de café usagé en délicieux biscuits écoresponsables. Ce projet innovant a germé dans notre kot à Liège, sous l'impulsion de Loïs Destatte, étudiant passionné en communication visuelle et graphique à Saint-Luc Liège.",
    "Loïs, surnommé affectueusement le \"Papa du kot\", est le cœur créatif derrière Kotry Koffi. Il a façonné l’identité visuelle et graphique autour des souvenirs, des anecdotes et des rencontres qui marquent notre vie commune.",
    "Chez Kotry Koffi, nous sommes animés par le désir de proposer des produits savoureux tout en racontant l'histoire de notre kot. Nos biscuits, en constante évolution, sont le reflet de notre vie et de notre engagement envers la durabilité.",
    "Nous vous invitons à plonger dans notre univers, à savourer nos créations et à rejoindre notre aventure gourmande et durable. Chaque biscuit que nous vous proposons est une invitation à partager notre quotidien et à découvrir notre passion.",
    "Rejoignez-nous et laissez-vous charmer par la magie de Kotry Koffi, où chaque saveur est une histoire et chaque biscuit un souvenir à se remémorer.",
  ];

  const images = [
    { src: require('../assets/img/eco-responsable.webp'), alt: 'Kotry Koffi Art 1' },
    { src: require('../assets/img/coffee.webp'), alt: 'Kotry Koffi Art 2' },
    { src: require('../assets/img/good.webp'), alt: 'Kotry Koffi Art 3' },
    { src: require('../assets/img/friends.webp'), alt: 'Kotry Koffi Art 4' },
    { src: require('../assets/img/skate.webp'), alt: 'Kotry Koffi Art 4' },
    { src: require('../assets/img/woman.webp'), alt: 'Kotry Koffi Art 4' },
  ];

  return (
    <Container>
      <h1 style={{ fontSize: 'min(160px, 20vmin)', textAlign: 'center', fontFamily: 'Comic CAT' }}>Kotry Koffi</h1>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          {paragraph}
        </p>
      ))}
      <Row xs={1} md={2} lg={3}>
        {images.map((image, index) => (
          <Col key={index} className="p-0 d-flex" style={{backgroundColor: 'transparent'}}>
            <Image src={image.src} alt={image.alt} style={{aspectRatio: 1}} fluid />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
  
const PageAbout: React.FC = () => {
  return (
    <Layout>
      <AboutUs/>
    </Layout>
  );
}

export default PageAbout;
