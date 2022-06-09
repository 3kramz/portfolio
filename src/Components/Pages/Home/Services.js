import React from 'react';

const Services = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-16'>
            <p>|| My servicess</p>
            <p className='font-cormor text-[70px]'>Service Provide For My Clients.</p>

            <div class="grid grid-cols-1 lg:grid-cols-3 my-10 justify-items-center ">
                <div class=" w-[350px] bg-base-300 my-2">
                    <div class="flex justify-center  mt-4">
                        <img src='https://htmldemo.net/lendex/lendex/assets/images/icon/service-icon-3.png' alt="" />
                    </div>
                    <div class="card-body">
                        <h2 class="card-title text-white">Illustration </h2>
                        <ul>
                            <li> > Character Design</li>
                            <li> > Icon Set</li>
                            <li> > Illustration Guide</li>
                            <li> > Illustration set</li>
                            <li> > Motion Graphic</li>
                        </ul>
                    </div>
                </div>
                <div class=" w-[350px] bg-base-300 my-2">
                    <div class="flex justify-center  mt-4">
                        <img src='https://htmldemo.net/lendex/lendex/assets/images/icon/service-icon-1.png' alt="" />
                    </div>
                    <div class="card-body">
                        <h2 class="card-title text-white">Development </h2>
                        <ul>
                            <li> > HTML/CSS</li>
                            <li> > Javascript</li>
                            <li> > Animation</li>
                            <li> > Wordpress</li>
                            <li> > React</li>
                        </ul>
                    </div>
                </div>
                <div class=" w-[350px] bg-base-300 my-2">
                    <div class="flex justify-center  mt-4">
                        <img src='https://htmldemo.net/lendex/lendex/assets/images/icon/service-icon-3.png' alt="" />
                    </div>
                    <div class="card-body">
                        <h2 class="card-title text-white">UI/UX </h2>
                        <ul>
                            <li> >   Landing Pages</li>
                            <li> >   User Flow</li>
                            <li> >   Wirefirming</li>
                            <li> >   Prototyping</li>
                            <li> >   Mobile app design</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Services;