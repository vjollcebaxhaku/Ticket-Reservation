import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-5 font-mono" style={{ backgroundColor: '#414042', paddingLeft: 0, paddingRight: 0 }}>
            <div className="container flex flex-col sm:flex-row justify-between">
                <div className="self-start">
                    <ul className="list-none p-0 m-0" style={{ marginBlockStart: 0, marginBlockEnd: 0 }}>
                        <li className="mb-3"><a href="#" className="font-bold text-lg">VOLUNTEER</a></li>
                        <li className="mb-3"><a href="#" className="font-bold text-lg">PRIVACY POLICY</a></li>
                        <li className="mb-3"><a href="#" className="font-bold text-lg">TERMS OF USE</a></li>
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
            <div className="container" style={{ paddingLeft: 0, paddingRight: 0 }}>
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
    );
}

export default Footer;
