import React from 'react';


function Footer() {
return (
<>
    <footer>
        <div className="container">
            <div className="footer-panel">
                <div className="footer-name">
                    <div className="nav-brand">
                        <picture>
                            <source srcSet="./img/general/logo.webp" type="image/webp" />
                            <source srcSet="./img/general/logo.png" type="image/png" />
                            <img src="./img/general/logo.png" className="logo-img" alt="Logo icon" />
                        </picture>
                    </div>
                </div>
                <div className="legal">
                    <h3 className="mid-text">regulamin</h3>
                </div>
                <div className="account">
                    <h3 className="mid-text">Info o koncie</h3>
                </div>
                <div className="newsletter">
                    <h3 className="mid-text">newsletter</h3>
                </div>
            </div>
            <div className="footer">
                <h2>2020 Krzysztof Siek Wszelkie prawa zastrzeżone </h2>
            </div>
        </div>
    </footer>
</>
);
}

export default Footer;