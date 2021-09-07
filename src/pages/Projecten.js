import React from 'react';
//

import useFetch from '../hooks/useFetch'

export default function Projecten() {
  const { loading, error, data} = useFetch('http://localhost:1337/projects') 

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      {data.map(project => ( 
        <div key={project.id} className="project-card">
          <div className="location">{project.locatie}</div>
          <h1>{project.titel}</h1>
          <h2>{project.beschrijving}</h2>


          <small>console list</small>

        </div>

      ))}
    </div>
  )
}


