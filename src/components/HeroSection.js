import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import video from '../assets/videos/video-1.mp4'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={video} autoPlay loop muted />
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">PROJECTEN <i class="fas fa-arrow-right"></i></Button>
            </div>
        </div>
    )
}

export default HeroSection
