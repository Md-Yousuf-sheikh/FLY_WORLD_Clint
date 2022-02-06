import React, { useEffect, useState } from 'react';
import ManageAll from '../ManageAll/ManageAll';

const ManageTours = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://vast-cove-03076.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    console.log(products);
    return (
        <div>
            <div>
                <h1 className="text-3xl text-center mt-5 font-mono font-semibold">Manage All Tour </h1>
                <p className="text-center my-2">Show all our tours </p>
                <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {
                        products.map(item => <ManageAll item={item} key={item._id} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default ManageTours;