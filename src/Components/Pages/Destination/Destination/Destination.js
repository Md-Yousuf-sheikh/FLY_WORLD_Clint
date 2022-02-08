import React, { useEffect, useState } from 'react';
import Headers from '../../../Shared/Header/Header/Header';
import Footer from '../../Footer/Footer/Footer';
import Destinations from '../Destinations/Destinations';

const Destination = () => {
    const [items, setItems] = useState([])
    const [conform, setConform] = useState(false);
    useEffect(() => {
        fetch('https://vast-cove-03076.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    if (conform) {
        setTimeout(() => {
            setConform(false)
        }, 5000);
    }

    return (
        <div>
            <Headers />
            {
                conform && <div className="  fixed w-12/12  right-5 bottom-8 flex justify-center z-50">
                    <div className="bg-gray-800 px-6 py-3  rounded-md text-lg flex items-center">
                        <svg viewBox="0 0 24 24" className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
                            <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
                        </svg>
                        <span className="text-white"> Deleted success full ! </span>
                    </div>
                </div>
            }
            <div className='bg-gray-800 text-white text-center py-5'>
                <h1 className='text-4xl font-mono mb-3'>DESTINATIONS</h1>
                <h1>Home / <span className='text-gray-300'>Destinations</span></h1>
            </div>
            <div className='container mx-auto' >
                <div className='py-8 text-center'>
                    <p className='text-red-400 font-semibold font-sans text-left'>YOUR DESTINATION</p>
                    <h1 className='text-4xl font-bold text-left py-5'>Explore Your Destination</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                        {
                            items.map(item => <Destinations key={item} item={item, setConform} />)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Destination;