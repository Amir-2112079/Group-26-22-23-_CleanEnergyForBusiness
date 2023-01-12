import '../CSSContents/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-message'>
                <p className='footer-message'>
                    Join the Adventure to save the world by going clean!
                </p>

            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>

                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>

                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <div className='social-icons-wrap'>
                            <div class='footer-link-items'>

                                <a href='https://facebook.com'>
                                    <img src="images/facebookLogo.png" height={30} width={30} />
                                </a>

                                <a href='https://instagram.com'>
                                    <img src="images/IgLogo.png" height={30} width={30} />
                                </a>
                                <a href='https://twitter.com/'>
                                    <img src="images/TwitterLogo.png" height={30} width={30} />
                                </a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class='footer-logo'>
            </div>
            <small class='website-rights'>Group26 © 2023</small>
            <div class='social-icons'>
            </div>
        </div>

    )
}



export default Footer;