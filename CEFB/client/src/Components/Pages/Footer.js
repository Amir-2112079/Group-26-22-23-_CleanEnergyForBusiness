import '../CSSContents/Footer.css'


function Footer() {
    return (
        <footer className='footer'>
            <p className='footer-message'>Join the Adventure to save the world by going clean!</p>
            <div className='footer-links'>
                <div className='footer-titles'>
                    <a style={{ textDecoration: 'none' }} href='/AboutUs'>
                        <h2 className='footer-links-title' >About Us</h2>
                    </a>
                    <a style={{ textDecoration: 'none' }} href='/ContactUs'>
                        <h2 className='footer-links-title' >Contact Us</h2>
                    </a>
                    <a style={{ textDecoration: 'none' }} href='/Faq'>
                        <h2 className='footer-links-title' >FAQ</h2>
                    </a>
                </div>
                <div className='footer-link-section'>
                    <h2 className='footer-link-header'>Social Media</h2>
                    <div className='social-icons-wrap'>
                        <a className='footer-social-atag' href='https://facebook.com'>
                            <img src="images/facebookLogo.png" height={30} width={30} alt='Facebook logo' />
                        </a>
                        <a className='footer-social-atag' href='https://instagram.com'>
                            <img src="images/IgLogo.png" height={30} width={30} alt='Instagram logo' />
                        </a>
                        <a className='footer-social-atag' href='https://twitter.com/'>
                            <img src="images/TwitterLogo.png" height={30} width={30} alt='Twitter logo' />
                        </a>
                    </div>
                </div>
            </div>
            <small className='website-rights'>Group26 © 2023</small>
        </footer>
    );
}



export default Footer;