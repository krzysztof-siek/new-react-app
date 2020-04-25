import React from 'react';


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
                    <h3 className="mid-text">regulamin</h3>
                    <h3 className="mid-text">regulamin</h3>
                    
                </div>
                <div className="footer-column">
                    <h3 className="title-text">regulamin</h3>
                    <h3 className="mid-text">regulamin</h3>
                    <h3 className="mid-text">regulamin</h3>
                </div>
                <div className="footer-column">
                    <h3 className="title-text">Info o koncie</h3>
                    <h3 className="mid-text">Info o koncie</h3>
                    <h3 className="mid-text">Info o koncie</h3>
                </div>
                <div className="footer-column">
                    <h3 className="title-text">newsletter</h3>
                    <h3 className="mid-text">newsletter</h3>
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