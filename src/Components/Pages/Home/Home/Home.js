import React from 'react';
import Headers from '../../../Shared/Header/Header/Header';
import BestPackages from '../../BestPackages/BestPackages/BestPackages';
import Footer from '../../Footer/Footer/Footer';
import TravelPerfection from '../../TravelPerfection/TravelPerfection/TravelPerfection';
import Banner from '../Banner/Banner/Banner';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Headers />
            <Banner />
            <TravelPerfection />
            <BestPackages />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;