import {
  Image,
  Container,
  Button,
} from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className='bg-body-tertiary' style={{ boxShadow: '0 -100px 100px 0px lightgrey' }}>
      <Container className='d-flex flex-column align-items-center mt-5 pt-4' style={{ bottom: 0, width: '100%', position: 'relative' }}>
        <div className='d-flex gap-3'>
          <Image src={require('../assets/img/miam.webp')} alt="Draw of a man eating cookies" style={{ height: '200px' }}/>
          <div className='d-flex flex-column gap-2'>
            <h2 className='pb-2'>Contact</h2>
            <div className='d-flex gap-2 align-items-center'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '1rem', height: '1rem'}}>
                <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15.6032 32C14.8459 31.9424 14.1793 31.5605 13.742 30.9928L5.97546 22.8719C3.51895 20.4471 2 17.0999 2 13.4032C2 6.00081 8.09037 0 15.6032 0C23.1161 0 29.2064 6.00081 29.2064 13.4032C29.2064 17.0999 27.6875 20.4471 25.231 22.8719L17.4645 30.9928C17.0271 31.5605 16.3605 31.9424 15.6032 32ZM15.6032 17.6042C17.8129 17.6042 19.6042 15.8129 19.6042 13.6032C19.6042 11.3936 17.8129 9.60227 15.6032 9.60227C13.3936 9.60227 11.6023 11.3936 11.6023 13.6032C11.6023 15.8129 13.3936 17.6042 15.6032 17.6042Z"/>
              </svg>
              Liège, Belgique
            </div>
            <div>
              <Button variant="link" href="https://www.instagram.com/le_kotry"  className='d-flex gap-2 align-items-center'>
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{width: '1rem', height: '1rem'}}>
                  <path fill="currentColor" d="M9.40909 0C4.24432 0 0 4.23863 0 9.40909V22.5909C0 27.7557 4.23863 32 9.40909 32H22.5909C27.7557 32 32 27.7614 32 22.5909V9.40909C32 4.24432 27.7614 0 22.5909 0H9.40909ZM9.40909 2.90909H22.5909C26.1875 2.90909 29.0909 5.81249 29.0909 9.40909V22.5909C29.0909 26.1875 26.1875 29.0909 22.5909 29.0909H9.40909C5.81249 29.0909 2.90909 26.1875 2.90909 22.5909V9.40909C2.90909 5.81249 5.81249 2.90909 9.40909 2.90909ZM24.5909 6.09091C23.8579 6.09091 23.2727 6.67613 23.2727 7.40909C23.2727 8.14205 23.8579 8.72727 24.5909 8.72727C25.3239 8.72727 25.9091 8.14205 25.9091 7.40909C25.9091 6.67613 25.3239 6.09091 24.5909 6.09091ZM16 7.27273C11.1989 7.27273 7.27273 11.1989 7.27273 16C7.27273 20.8011 11.1989 24.7273 16 24.7273C20.8011 24.7273 24.7273 20.8011 24.7273 16C24.7273 11.1989 20.8011 7.27273 16 7.27273ZM16 10.1818C19.233 10.1818 21.8182 12.767 21.8182 16C21.8182 19.233 19.233 21.8182 16 21.8182C12.767 21.8182 10.1818 19.233 10.1818 16C10.1818 12.767 12.767 10.1818 16 10.1818Z"/>
                </svg>
                Instagram
              </Button>
            </div>
            <div>
              <Button variant="link" href="mailto:lois.destatte@gmail.com" className='d-flex gap-2 align-items-center'>
                  <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{width: '1rem', height: '1rem'}}>
                    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.5 4C2.01472 4 0 6.01472 0 8.5V22.5C0 24.9853 2.01472 27 4.5 27H27.5C29.9853 27 32 24.9853 32 22.5V8.5C32 6.01472 29.9853 4 27.5 4H4.5ZM3 9.11925V22.5C3 23.3284 3.67157 24 4.5 24H27.5C28.3284 24 29 23.3284 29 22.5V9.11936L18.8809 17.552C17.2121 18.9426 14.788 18.9426 13.1192 17.552L3 9.11925ZM26.8571 7H5.14304L15.0398 15.2473C15.596 15.7109 16.4041 15.7109 16.9603 15.2473L26.8571 7Z"/>
                  </svg>
                  Mail
              </Button>
            </div>
          </div>
        </div>
        <hr style={{width:"100%"}} color="black"/>
        <p style={{ fontWeight: 'bold'}}>© 2024 Kotry Koffi</p>
      </Container>
    </footer>
  );
}

export default Footer;
