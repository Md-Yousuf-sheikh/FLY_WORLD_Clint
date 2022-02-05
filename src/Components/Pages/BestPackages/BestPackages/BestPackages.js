import React, { useEffect, useState } from 'react';
import TopPlace from './TopPlace';

const BestPackages = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('/fackData.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    console.log(items);
    return (
        <div>
            <div className=" 2xl:container 2xl:mx-auto">
                <div className=" py-6 lg:px-20 md:px-6 px-4">
                    <p className='text-red-500 font-sans font-semibold'>TOP PICK</p>
                    <h1 className='text-4xl font-bold'>Best Tour Packages</h1>
                    <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                        {
                            items.map(item => <TopPlace key={item._id} item={item} />)
                        }
                    </div>
                    <div className=" flex justify-center items-center">
                        <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestPackages;