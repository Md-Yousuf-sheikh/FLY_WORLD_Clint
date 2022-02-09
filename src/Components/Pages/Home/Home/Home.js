import React from 'react';
import Headers from '../../../Shared/Header/Header/Header';
import BestPackages from '../../BestPackages/BestPackages/BestPackages';
import Footer from '../../Footer/Footer/Footer';
import TravelPerfection from '../../TravelPerfection/TravelPerfection/TravelPerfection';
import Banner from '../Banner/Banner/Banner';
import Testimonial from '../Testimonial/Testimonial';
import TravelHighlight from '../TravelHighlight/TravelHighlight';

const Home = () => {
    return (
        <div>
            <Headers />
            <Banner />
            <TravelPerfection />
            <BestPackages />
            <TravelHighlight />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;