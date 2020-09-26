import React from 'react';
import PROJECTS from '../data/project';
import Sidebar from './sidebar';
import Fade from 'react-reveal/Fade';


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
        <Sidebar />
        <section>
        <Fade top>
        <div className="jumbotron project">
        <h2 className="project-header">Highlighted Projects</h2>
            {
                PROJECTS.map(PROJECT => (
                    <Project key={PROJECT.id} project={PROJECT} />
                ))
            }
        </div>
        </Fade>
        </section>
    </div>
)

export default Projects;