import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from '../assets/videos/video.mp4'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={video} autoPlay loop muted />
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED <i class="fas fa-arrow-down"></i></Button>

            </div>
        </div>
    )
}

export default HeroSection
