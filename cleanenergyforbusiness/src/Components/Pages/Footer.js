import '../CSSContents/Footer.css'
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

                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>

                    </div>
                    <small class='website-rights'>Group26 © 2023</small>
                    <div class='social-icons'>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;