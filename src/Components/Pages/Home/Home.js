import React from 'react';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Projects from './Projects/Projects';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Projects />
            <ContactMe />
        </div>
    );
};

export default Home;