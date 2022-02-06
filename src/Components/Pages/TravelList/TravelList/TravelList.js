import React, { useEffect, useState } from 'react';
import Headers from '../../../Shared/Header/Header/Header';
import Footer from '../../Footer/Footer/Footer';
import TravelAllList from './TravelAllList';
;

const TravelList = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://vast-cove-03076.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Headers />
            <div className='bg-gray-800 text-white text-center py-5'>
                <h1 className='text-4xl font-mono mb-3'>Tour List</h1>
                <h1>Home / <span className='text-gray-300'>Tour List</span></h1>
            </div>
            <div className='mx-auto container'>
                <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {
                        products.map(item => <TravelAllList item={item} key={item._id} />)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TravelList;