import {
  Image,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Layout from '../components/Layout'

const AboutUs: React.FC = () => {
  return (
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
          <Image src={require('../assets/img/image_gallery_0.avif')} alt="Kotry Koffi Art 1" style={{aspectRatio: 1}} fluid />
        </Col>
        <Col className="p-0 d-flex">
          <Image src={require('../assets/img/image_gallery_1.avif')} alt="Kotry Koffi Art 2" style={{aspectRatio: 1}} fluid />
        </Col>
        <Col className="p-0 d-flex">
          <Image src={require('../assets/img/image_gallery_2.avif')} alt="Kotry Koffi Art 3" style={{aspectRatio: 1}} fluid />
        </Col>
        <Col className="p-0 d-flex">
          <Image src={require('../assets/img/image_gallery_3.avif')} alt="Kotry Koffi Art 4" style={{aspectRatio: 1}} fluid />
        </Col>
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
