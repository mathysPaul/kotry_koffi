import Navigation from './Navigation';
import Footer from './Footer';

type LayoutProps = {
  children?: React.ReactNode
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <header>
        <span id="top"/>
        <Navigation />
      </header>
      <body style={{ minHeight: '100vh'}}>
        {props.children}
      </body>
      <Footer/>
    </>
  );
}

export default Layout;
