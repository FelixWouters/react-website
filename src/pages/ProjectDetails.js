import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { SRLWrapper } from "simple-react-lightbox";



const ApiUrl = 'http://localhost:1337'; // or deployed URL if working in a production enviroment

export default function ProjectDetails() {
    const { id} = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/projects/' + id)

    console.log(data)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    



    return (
        <div className="container">
            
            <SRLWrapper>
            <div className="row mt-2">
                {data.media.map(img => (
                    <div key={img.id} className="lightbox col-lg-4 col-md-6 col-sm-12 mt-2 px-1">
                        <img className="lightbox__img" src={ApiUrl + img.url} alt={img.caption}/>
                    </div>
                ))}
            </div>
            </SRLWrapper>

            <div className="row mt-3">
                <div className="col-12">
                    <h1>{data.titel}</h1>
                    <h3>Te {data.locatie}</h3>
                </div>
            </div>
            <div className="row mt-3">
                    <div className="col-12">
                        <p>{data.beschrijving}</p>
                    </div>
            </div>
        </div>
    )}

