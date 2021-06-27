import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="/images/img2.jpg" text="Explore the hidden waterfall deep inside the Amazon Jungle" label="Adventure" path="/services"/>
                        <CardItem src="/images/img2.jpg" text="Travel through the islands of Bali in a Private Cruise" label="Luxury" path="/services"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="/images/img2.jpg" text="Explore the hidden waterfall deep inside the Amazon Jungle" label="Adventure" path="/services"/>
                        <CardItem src="/images/img2.jpg" text="Experience Football on top of the Island" label="Sports" path="/services"/>
                        <CardItem src="/images/img2.jpg" text="Backpacking through the unknown in Australia" label="Active" path="/services"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
