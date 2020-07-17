import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faArrowAltCircleRight, faPaperPlane, faAngleUp} from '@fortawesome/fontawesome-free-solid';



function Footer() {
return (
<>
    <footer>
        <div className="container">
            <div className="footer-panel">
                <div className="footer-column">
                    <div className="nav-brand">
                        <picture>
                            <source srcSet="./img/general/logo.webp" type="image/webp" />
                            <source srcSet="./img/general/logo.png" type="image/png" />
                            <img src="./img/general/logo.png" className="logo-img" alt="Logo icon" />
                        </picture>
                    </div>
                    <h3 className="mid-text">7th Harley Place, London WIG BLZ</h3>
                    <h3 className="mid-text">United Kingdom</h3>
                    <h3 className="mid-text">Call us: (+880) 111 222 3456</h3>
                    
                </div>
                <div className="footer-column mobile-noVisible">
                    <h3 className="title-text">Legal</h3>
                    <h3 className="mid-text">Terms of Use</h3>
                    <h3 className="mid-text">Privacy Policy</h3>
                    <h3 className="mid-text">Security</h3>
                </div>
                <div className="footer-column mobile-noVisible">
                    <h3 className="title-text">Account</h3>
                    <h3 className="mid-text">My Account</h3>
                    <h3 className="mid-text">Watchlist</h3>
                    <h3 className="mid-text">Collections</h3>
                    <h3 className="mid-text">User Guide</h3>
                </div>
                <div className="footer-column">
                    <h3 className="title-text">Newsletter</h3>
                    <h3 className="mid-text subscribe">Subscribe to our newsletter system now to get latest news from us.</h3>
                    <div className="input">
                    <input type="text" name="newsletter" className="newsletterInput" placeholder="Enter your Email"/>
                    <FontAwesomeIcon icon={faPaperPlane} className='newsletterInputIcon'/>
                    </div>
                    <h3 className="mid-text"><span className="strong">SUBSCRIBE NOW <FontAwesomeIcon icon={faArrowAltCircleRight}/></span></h3>
                </div>
            </div>
            <div className="footer">
                <h2>&copy;2020 <span className="strong">MoviePoint</span> All Rights Reserved. Code by Krzysztof Siek</h2>
                <a href="#nav" className="backToTop">Back to top<FontAwesomeIcon icon={faAngleUp} className='angleUp'/></a>
            </div>
        </div>
    </footer>
</>
);
}

export default Footer;