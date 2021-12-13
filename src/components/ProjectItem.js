import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectItem.css';


function ProjectItem(props) {
    return (
        <>
      <div key={props.id} className="col-lg-6 col-md-6 col-sm-12 pt-3">
        <div className="project">
          <img className="project__img" src={props.path} alt={props.titel}/>
          <div className="project__title pt-3"><h1>{props.titel}</h1></div>
          <figcaption>
            <p className="project__description pt-2">{props.beschrijving.substring(0,50)}...</p>
            <Link to={`/project/${props.id}`}><p className="project__link">Ontdek meer</p></Link>
          </figcaption>
        </div>
      </div>

        </>
    )
}

export default ProjectItem
