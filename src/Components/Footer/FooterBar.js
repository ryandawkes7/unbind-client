import React from 'react';
import './footer.css';

class FooterBar extends React.Component {
    render () {
        return (
            <footer className="footer">
                <div className="footer-sections">

                    <div className="section-one">
                        <h1>UNBIND2020</h1>
                    </div>

                    <div className="section-two">
                        <div className="foot-about-us">
                            <p>About Us</p>
                        </div>
                        <div className="foot-contact">
                            <p>Contact</p>
                        </div>
                        <div className="foot-tc">
                            <p>Terms & Conditions</p>
                        </div>
                    </div>

                    <div className="section-three">
                        <div className="foot-facebook">
                            <p>Facebook</p>
                        </div>
                        <div className="foot-twitter">
                            <p>Twitter</p>
                        </div>
                        <div className="foot-instagram">
                            <p>Instragram</p>
                        </div>
                    </div>

                    <div className="section-four">
                        <div className="foot-newsletter-title">
                            <h3>Subscribe to our newsletter</h3>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterBar;
