import React from 'react';
import PROJECTS from '../data/project';


const Project = props => {


    const { title, image, description, link } = props.project;

    return (
        <div className="card" >
            <img src={image} className="card-img-top" alt='profile' />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                </div>
        </div>
    )

}


const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div>
            {
                PROJECTS.map(PROJECT => (
                    <Project key={PROJECT.id} project={PROJECT} />
                ))
            }
        </div>
    </div>
)

export default Projects;