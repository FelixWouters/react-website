import React from 'react';
import Teammember from './Teammember';
import './Team.css';
import paul from '../assets/images/paul.jpg'




function Team() {
    return (
        <div class="container">
        <div class="team__container">
            <div class="text">Meet Our Team</div>
            </div>
            <div class="row">
                <Teammember src={paul} name="Paul Kindt" desc="Eigenaar" email="paul@architect-kindt.be"/>
                <Teammember src={paul} name="Paul Kindt" desc="Eigenaar" email="paul@architect-kindt.be"/>
                <Teammember src={paul} name="Paul Kindt" desc="Eigenaar" email="paul@architect-kindt.be"/>
            </div>
        </div>

    )
}

export default Team
