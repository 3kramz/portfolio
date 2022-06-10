import React from 'react';
import Modal from "./Modal"

const Project = ({ project }) => {
    const { img, name } = project
    return (
        <>
            <div class="card w-96  image-full ">
                <figure><img src={img} alt="" /></figure>
                <div class="card-body">
                <h2 class="card-title text-white">{name}</h2>
                    <img src={img} alt="" />
                    <div class="card-actions justify-end">
                        <label for={name} class="  modal-button">Details</label>
                    </div>
                </div>
            </div>
            <Modal project={project}/>

        </>

    );
};

export default Project;