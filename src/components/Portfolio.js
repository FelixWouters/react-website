import React from 'react';
import PortfolioItem from './PortfolioItem';
import './Portfolio.css';
import pic1 from '../assets/images/villa-1.jpg';
import pic2 from '../assets/images/villa-2.jpg';
import pic3 from '../assets/images/villa-3.jpg';
import pic4 from '../assets/images/villa.jpg';



function Portfolio() {
    return (
        <div className="portfolio">
            <h1>Realisatie te Maarkedal, vakantiewoning</h1>
            <div className="portfolio__container">
                <div className="portfolio__wrapper">
                    <ul className="portfolio__items">
                        <PortfolioItem src={pic1} text="Linkerkant buitengevel" />
                        <PortfolioItem src={pic2} text="Rechterkant buitengevel"/>
                    </ul>
                    <ul className="portfolio__items">
                        <PortfolioItem src={pic3} text="Overzicht voorgevel met uitzicht op de tuin" />
                        <PortfolioItem src={pic4} text="Uitzicht vanuit de woonkamer" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
