import React from 'react';
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

  if (loading) return (
    <div class="bouncing-loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  if (error) return <p>Database connection failed. Please contact webmaster.</p>

  console.log(data)
  console.log(error)


  return (

    <div className="container-fluid">
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