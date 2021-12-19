import React from 'react';
import './HeroSection.scss';

function HeroSection() {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4 my-auto">Welkom!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="/projecten" role="button">Projecten</a>
                </p>
            </div>
        </div>
    )
}

export default HeroSection
