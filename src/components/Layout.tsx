import Navigation from './Navigation';
import Footer from './Footer';
import { Image } from 'react-bootstrap';
import upCookies from '../assets/img/up_cookies.webp';

type LayoutProps = {
  children?: React.ReactNode
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <header className='z-2' style={{position: 'sticky', top: 0}}>
        <Navigation />
      </header>
      <main style={{ minHeight: '100vh' }}>
        {props.children}
        <Image
          src={upCookies}
          style={{
            zIndex: 2,
            position: 'fixed',
            bottom: '1rem',
            right: '1rem',
            height: '3rem',
            width: '3rem',
            cursor: 'pointer',
          }}
          onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })}
          alt="Arrow up: to go up"
        />
      </main>
      <Footer/>
    </>
  );
}

export default Layout;
