import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container d-flex justify-content-between flex-column flex-sm-row">
                <div className="align-self-end">
                    <ul className="footer-links">
                        <li><a href="#">VOLUNTEER</a></li>
                        <li><a href="#">PRIVACY POLICY</a></li>
                        <li><a href="#">TERMS OF USE</a></li>
                    </ul>
                </div>
                <div className="contact-info">
                    <p>EMAIL: INFO@SUNNYHILLFESTIVAL.COM</p>
                    <p>REPUBLIKA.TV</p>
                    <p>SUNNY HILL FESTIVAL</p>
                    <p>ENVER MALOKU, NR. 82,</p>
                    <p>PRISHTINE 10000 KOSOVE</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="social-icons">
                            <a href="#"><img src="facebook-icon.png" alt="Facebook Icon" /></a>
                            <a href="#"><img src="instagram-icon.png" alt="Instagram Icon" /></a>
                            <a href="#"><img src="twitter-icon.png" alt="Twitter Icon" /></a>
                            <a href="#"><img src="youtube-icon.png" alt="YouTube Icon" /></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="footer-text">© ALL RIGHTS RESERVED CRAFTED BY: REPUBLIKA.TV</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
