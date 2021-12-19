import React from 'react';
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';
import ProjectItem from '../components/projectitem/ProjectItem';


const PROJECTEN = gql`
query getProjects {
  projects {
    thumbnail{url},
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
  console.log(error)


  return (

    <div className="container">
      <div className="row text-center">
        <div className="col mt-3">
          <h1>Realisaties</h1>
        </div>
      </div>
      
      <div className="realisaties row">
      {data.projects.map(project => (
        <ProjectItem id={project.id} path={ApiUrl + project.thumbnail.url} titel={project.titel} beschrijving={project.beschrijving}/>
      ))}
      </div>
    </div>
    
  )}
  

