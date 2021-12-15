import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Pagina's</h3>
                                <ul>
                                    <li><Link to='/home' >Home</Link></li>
                                    <li><Link to='/projecten' >Projecten</Link></li>
                                    <li><Link to='/contact' >Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Extra</h3>
                                <ul>
                                <li><Link to='/media' >Media</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>Architectenbureau Paul Kindt</h3>
                                <p>Paul Kindt is een Architect actief in de Vlaamse Ardennen.</p>
                                <p><i className="fab fa-whatsapp"></i> 0495 20 56 77</p>
                            </div>
                            <div className="col item social"><a href="https://www.facebook.com/Architectenbureau-Paul-Kindt-295486194734546"><i className="fab fa-facebook-f"></i></a><a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a><a href="https://www.instagram.com/paulkindt/"><i className="fab fa-instagram"></i></a></div>
                        </div>
                        <p className="copyright">Webmaster <a href="http://felixwouters.be/">Felix Wouters</a> © 2022</p>
                    </div>
                </footer>
            </div>
    )
}

export default Footer
