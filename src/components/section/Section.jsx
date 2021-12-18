import React from 'react';
import "./section.scss";

export default function Section() {
    return (
        <div className='container'>
            <div>
                <h1>Recente Media</h1>
                <iframe className="videoplayer mt-4" width="560" height="315" src="https://www.youtube.com/embed/dAc9Lej-3Nc" title="Bouwmagazine" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}
