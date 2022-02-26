import React from 'react';
import "./contactcard.scss";

export default function ContactCard() {
    return (
        <>
        <div className="contactcard col-xl-12 col-md-12 col-sm-12">
            <iframe title='map' className="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1782.2181451494146!2d3.637856507748674!3d50.823067659866936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c30d10d9ddc1c9%3A0xe7d68d7c15c22731!2sArchitectenbureau%20Paul%20Kindt!5e0!3m2!1snl!2sbe!4v1641163287189!5m2!1snl!2sbe" allowfullscreen="" loading="lazy"></iframe>
            <div className="text-left mt-3">
                <h3>Architectenbureau Paul Kindt</h3>
                <p><i className="fas fa-map-marker-alt"></i> Fremisstraat 1A, 9860 Maarkedal</p>
                <p><i className="fab fa-whatsapp"></i> 0495 20 56 77</p>
            </div>
        </div>
        </>


    )
}
