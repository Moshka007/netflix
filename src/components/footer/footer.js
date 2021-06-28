import React from 'react';
import './footer.css'

const Footer = () => {
    function backTop() {
        document.documentElement.scrollTop = 0;
    }

    return (
        <footer className="footer">
            <div className="container">
                <h3 id="logo">
                <div onClick={backTop} id="logo">
                        <div className="large-logo">
                            netflix
                        </div>
                        <div className="litle-logo">
                            roulete
                        </div>
                    </div>
                </h3>
            </div>
        </footer>
    );
};

export default Footer;