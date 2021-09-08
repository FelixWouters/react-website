import React from 'react';
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const ApiUrl = 'http://localhost:1337'; // or deployed URL if working in a production enviroment


export default function Projecten() {
  const { loading, error, data} = useFetch('http://localhost:1337/projects') 

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>


  return (
    <div className="card-wrapper">
      {data.map(project => ( 
        <figure class="image-block">
        <h1>{project.titel}</h1>
        <img classname="card-img" src={ApiUrl + project.media[0].formats.small.url} alt={data.title} />
        <figcaption>
          <h3>Meer Info</h3>
          <p>{project.beschrijving.substring(0,200)}...</p>
          <button><Link to={`/project/${project.id}`}>Ontdek meer</Link></button>
        </figcaption>
      </figure>

      ))}
    </div>
    

  )}
  

