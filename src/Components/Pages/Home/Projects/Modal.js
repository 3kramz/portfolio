import React from 'react';

const Modal = ({ project }) => {
    const { backendTech, bulletPoint, detailsImg, frontendTech, img, name } = project
    const [img_1, img_2] = detailsImg
    return (
        <>
            <input type="checkbox" id={name} class="modal-toggle" />
            <div class="modal">
                <div class="modal-box w-11/12 max-w-5xl">
                    <h3 class="font-bold text-lg">{name}</h3>
                    <div >
                        <img className='w-full p-2' src={img} alt="" />
                        <div class="flex ">
                            <img className='w-1/2 p-2' src={img_1} alt="" />
                            <img className='w-1/2 p-2' src={img_2} alt="" />
                        </div>
                    </div>
                    <div >
                        <h2 class="text-2xl"> Features</h2>
                        <ul class="list-disc ml-8">
                            {bulletPoint.map(point => <li>{point}</li>)}
                        </ul>
                    </div>

                    div<div class="flex ">

                        {frontendTech &&
                            <div className='w-1/2 p-2'>
                                <h2 class="text-2xl"> Frontend</h2>
                                <ul class="list-disc ml-8">
                                    {frontendTech.map(point => <li>{point}</li>)}
                                </ul>
                            </div>
                        }

                        {backendTech &&
                            <div className='w-1/2 p-2'>
                                <h2 class="text-2xl"> Backend</h2>
                                <ul class="list-disc ml-8">
                                    {backendTech.map(point => <li>{point}</li>)}
                                </ul>
                            </div>
                        }
                    </div>



                    <div class="modal-action">
                        <label for={name} class="btn">Back</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
