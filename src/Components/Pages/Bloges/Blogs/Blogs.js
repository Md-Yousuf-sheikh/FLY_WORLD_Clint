import React from 'react';
import Headers from '../../../Shared/Header/Header/Header';
import TopHeader from '../../../Shared/TopHeader/TopHeader';
import Footer from '../../Footer/Footer/Footer';

const Blogs = () => {
    return (
        <div>
            <Headers />
            <div className='bg-gray-800 text-white text-center py-5'>
                <h1 className='text-4xl font-mono mb-3'>BLOGS</h1>
                <h1>Home / <span className='text-gray-300'>Blogs</span></h1>
            </div>
            <div className='container mx-auto'>
                <h1>Blogs</h1>
            </div>
            <Footer />
        </div>
    );
};

export default Blogs;