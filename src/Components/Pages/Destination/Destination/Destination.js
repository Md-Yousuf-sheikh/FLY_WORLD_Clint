import React from 'react';
import Headers from '../../../Shared/Header/Header/Header';
import Footer from '../../Footer/Footer/Footer';

const Destination = () => {
    return (
        <div>
            <Headers />
            <div className='bg-gray-800 text-white text-center py-5'>
                <h1 className='text-4xl font-mono mb-3'>DESTINATIONS</h1>
                <h1>Home / <span className='text-gray-300'>Destinations</span></h1>
            </div>
            <div className='container mx-auto' >
                <div className='py-8 text-center'>
                    <p className='text-red-400 font-semibold font-sans text-left'>TOP DESTINATION</p>
                    <h1 className='text-4xl font-bold text-left py-5'>Explore Top Destination</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>

                    </div>
                    <button className='bg-red-500   rounded-full px-5 py-3 text-white font-semibold my-8'>
                        Explore More
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Destination;