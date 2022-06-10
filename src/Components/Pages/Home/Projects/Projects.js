import React, { useState, useEffect } from 'react';
import Project from './Project'

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("data.json").then(res => res.json()).then(data => setProjects(data))
    }, [])
    console.log(projects)
    return (

        <div className='max-w-screen-xl mx-auto py-16'>

            <p className='pl-10'>||  Awesome Portfolio</p>
            <p className='font-cormor text-[40px] lg:text-[70px] pl-10'>My Complete Projects</p>

            <div class=" grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5 lg:mx-auto py-16">

                {projects.map((project, index) => <Project key={index} project={project} />)}


            </div>
            
        </div>
    );
};

export default Projects;