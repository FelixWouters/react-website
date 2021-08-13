import React from 'react'

function PortfolioItem(props) {
    return (
        <>
            <li className="portfolio__item">
                <div className="portfolio__item__link">
                    <figure className="portfolio__item__pic-wrap">
                        <img src={props.src} className="portfolio__item__img" alt=""/>
                    </figure>
                    
                </div>
            </li>
        </>
    )
}

export default PortfolioItem