import React from 'react';
import './HeroSection.scss';

function HeroSection() {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1>Lets build together!</h1>
                <p className="lead">Check out my portfolio</p>
                <p></p>
                <p className="lead">
                <a className="btn btn-dark" href='/projecten'>Check it out!</a>
                </p>
            </div>
        </div>
    )
}

export default HeroSection
