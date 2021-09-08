import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'


const ApiUrl = 'http://localhost:1337'; // or deployed URL if working in a production enviroment

export default function ProjectDetails() {
    const { id} = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/projects/' + id)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <div>
            <div className="container">
                <div className="project-card">
                    <div className="location">{data.locatie}</div>
                    <h1>{data.titel}</h1>
                    {data.media.map(img => (
                    <img src={ApiUrl + img.formats.small.url} alt={img.name} />
                    ))}
                    <p>{data.beschrijving}</p>
                    </div>
                </div>
            </div>
    )
}
