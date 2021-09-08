import React from 'react';
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';

const PROJECTEN = gql`
query getProjects {
  projects {
    media{
      url
    },
    id,
    titel,
    locatie,
    beschrijving
  }
}
`

const ApiUrl = 'http://localhost:1337'; // or deployed URL if working in a production enviroment


export default function Projecten() {
  const { loading, error, data } = useQuery(PROJECTEN)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)


  return (

    <div className="container">
      <div className="row">
      {data.projects.map(project => (
        <div key={project.id} className="col-6 pt-3">
          <div className="image-block">
          <img className="card-img" src={ApiUrl + project.media[0].url} alt={data.titel} />
          <h1>{project.titel}</h1>
          <figcaption>
            <p className="pt-2">{project.beschrijving.substring(0,50)}...</p>
            <Link to={`/project/${project.id}`}><span><p>Ontdek meer</p></span></Link>
          </figcaption>
        </div>
        </div>
      

      ))}
    </div>
    </div>
    

  )}
  

