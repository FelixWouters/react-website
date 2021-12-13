import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

import { SRLWrapper } from "simple-react-lightbox";


const ApiUrl = 'http://localhost:1337'; // or deployed URL if working in a production enviroment

export default function ProjectDetails() {
    const { id} = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/projects/' + id)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>



    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 mt-3">
                </div>
            </div>
            
            <SRLWrapper>
            <div className="row">
                {data.media.map(img => (
                    <div className="lightbox col-lg-4 col-md-6 col-sm 12 mt-2 px-1">
                        <img className="lightbox__img" src={ApiUrl + img.url}/>
                    </div>
                ))}
            </div>
            </SRLWrapper>
        </div>
    )}

