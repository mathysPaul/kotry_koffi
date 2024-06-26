import {
  Image,
  Container,
} from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
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
          <Image width="60" src={require('../assets/img/icon_insta.avif')} alt="Icon Instagram" />
        </a>
      </Container>
    </footer>
  );
}

export default Footer;
