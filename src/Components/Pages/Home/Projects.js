import React from 'react';
import reven from '../../../Assets/Projects/reven.PNG'
import facturer from '../../../Assets/Projects/facturer.PNG'
import klub from '../../../Assets/Projects/klub-fit.PNG'

const Projects = () => {
    return (

        <div className='max-w-screen-xl mx-auto py-16'>

            <p className='pl-10'>||  Awesome Portfolio</p>
            <p className='font-cormor text-[40px] lg:text-[70px] pl-10'>My Complete Projects</p>

            <div class=" grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5 lg:mx-auto py-16">

                <div class="card w-96 bg-base-100 image-full cursor-pointer">
                    <figure><img src={reven} alt="" /></figure>
                    <div class="card-body">
                        <img src={reven} alt="" />
                    </div>
                </div>

                <div class="card w-96 bg-base-400 image-full cursor-pointer">
                    <figure><img src={facturer} alt="" /></figure>
                    <div class="card-body">
                        <img src={facturer} alt="" />

                    </div>
                </div>

                <div class="card w-96 bg-base-100 image-full cursor-pointer">
                    <figure><img src={klub} alt="" /></figure>
                    <div class="card-body">
                        <img src={klub} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;