import React from 'react'

function Teammember(props) {
    return (
        <>
            <div className="profile-card">
                <div className="profile-content">
                    <div className="profile-image">
                        <img className="profile-image__img" src={props.src} alt={props.alt}/>
                    </div>
                    <div className="desc">
                        <h2>{props.name}</h2>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teammember