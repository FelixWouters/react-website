import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import pic1 from '../assets/images/villa-3.jpg';
import pic2 from '../assets/images/remotec-2.jpg';
import pic3 from '../assets/images/img-3.jpg';
import pic4 from '../assets/images/img-4.jpg';
import pic5 from '../assets/images/img-5.jpg';


function Cards() {
    return (
        <div className="cards">
            <h1>Bekijk hier onze projecten</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={pic1} text="Vakantiewoning in Maarkedal" label="Particulier" path="/portfolio/Maarkedal"/>
                        <CardItem src={pic2} text="Renovatie Remotec" label="Industrie" path="/services"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={pic3} text="Explore the hidden waterfall deep inside the Amazon Jungle" label="Adventure" path="/services"/>
                        <CardItem src={pic4} text="Experience Football on top of the Island" label="Sports" path="/services"/>
                        <CardItem src={pic5} text="Backpacking through the unknown in Australia" label="Active" path="/services"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
