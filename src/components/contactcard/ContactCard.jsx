import React from 'react';
import "./contactcard.scss";
import head from "../../assets/images/paul.jpg";

export default function ContactCard() {
    return (
        <>
        <div className="contactcard col-xl-6 col-md-6 col-sm-12">
            <img className="contactcard__img" src={head} alt="" />
        </div>
        <div className="col-xl-6 col-md-6 col-sm-12">
            <h1>Contacteer mij!</h1>
        </div>
        </>


    )
}
