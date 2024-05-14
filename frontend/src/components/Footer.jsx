import React from 'react';
<<<<<<< HEAD
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
                        <p className="footer-text">© ALL RIGHTS RESERVED CRAFTED BY: REPUBLIKA.TV</p>
                    </div>
                </div>
            </div>
        </footer>
=======

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-5 font-supply">
        <div className="container flex flex-col sm:flex-row justify-between">
            <div className="self-end">
                <ul className="list-none p-0 m-0">
                    <li className="mb-3"><a href="#" className="font-bold">VOLUNTEER</a></li>
                    <li className="mb-3"><a href="#" className="font-bold">PRIVACY POLICY</a></li>
                    <li className="mb-3"><a href="#" className="font-bold">TERMS OF USE</a></li>
                </ul>
            </div>
            <div className="contact-info text-sm font-bold flex flex-col items-end">
                <p>EMAIL: INFO@SUNNYHILLFESTIVAL.COM</p>
                <p>REPUBLIKA.TV</p>
                <p>SUNNY HILL FESTIVAL</p>
                <p>ENVER MALOKU, NR. 82,</p>
                <p>PRISHTINE 10000 KOSOVE</p>
            </div>
        </div>
        <div className="container">
            <div className="flex justify-center">
                <div className="social-icons">
                    <a href="#"><img src="facebook-icon.png" alt="Facebook Icon" className="mr-2" /></a>
                    <a href="#"><img src="instagram-icon.png" alt="Instagram Icon" className="mr-2" /></a>
                    <a href="#"><img src="twitter-icon.png" alt="Twitter Icon" className="mr-2" /></a>
                    <a href="#"><img src="youtube-icon.png" alt="YouTube Icon" className="mr-2" /></a>
                </div>
            </div>
            <div className="flex justify-center">
                <p className="text-xs opacity-75">© ALL RIGHTS RESERVED CRAFTED BY: REPUBLIKA.TV</p>
            </div>
        </div>
    </footer>
    
>>>>>>> d8233e615ec624691c6ab4d569ff5e6f73ce34aa
    );
}

export default Footer;