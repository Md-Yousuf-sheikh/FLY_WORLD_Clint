import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';

const EventBook = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://vast-cove-03076.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [products])
    return (
        <div>
            <div className="bg-gray-200 min-h-screen">
                <h1 className="text-3xl font-mono my-2 font-semibold  text-center">Your Order Product</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
                    {
                        products.map(pd => <Booking pd={pd} key={pd._id} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default EventBook;