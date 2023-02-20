import './Footer.css'
import FBImage from './FooterImages/facebookLogo.png';
import IGImage from './FooterImages/IgLogo.png';
import TwitterImage from './FooterImages/TwitterLogo.png';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer-message'>Join the Adventure to save the world by going clean!</p>
            <div className='footer-links'>
                <div >
                    <a href='/AboutUs'>
                        <h2 className='footer-links-title' >About Us</h2>
                    </a>
                    <a href="mailto:cleanenergyforbusiness@service.com">
                        <h2 className='footer-links-title' >Contact Us</h2>
                    </a>
                </div>
                <div className='footer-link-section'>
                    <h2 className='footer-link-header'>Social Media</h2>
                    <div className='social-icons-wrap'>
                        <a href='https://facebook.com'>
                            <img src={FBImage} height={30} width={30} alt='Facebook logo' />
                        </a>
                        <a href='https://instagram.com'>
                            <img src={IGImage} height={30} width={30} alt='Instagram logo' />
                        </a>
                        <a href='https://twitter.com/'>
                            <img src={TwitterImage} height={30} width={30} alt='Twitter logo' />
                        </a>
                    </div>
                </div>
            </div>
            <small className='website-rights'>Group26 © 2023</small>
        </footer>
    );
}



export default Footer;