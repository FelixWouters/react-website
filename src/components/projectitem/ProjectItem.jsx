import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectItem.scss';


function ProjectItem(props) {
    return (
        <>
      <div key={props.id} className="col-lg-3 col-md-6 col-sm-6 mt-3">
        <div className="project">
          <figure class="hover-img">
            <Link to={`/project/${props.id}`}><img class="project__img" src={props.path} alt={props.titel}/></Link>
            <figcaption>
              <Link to={`/project/${props.id}`}><h3>{props.titel}</h3></Link>
            </figcaption>
          </figure>
        </div>
      </div>



        </>
    )
}

export default ProjectItem
