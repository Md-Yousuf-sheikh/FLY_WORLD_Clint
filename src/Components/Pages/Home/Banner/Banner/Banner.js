import React from 'react';
import { FcGlobe } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="">
                <div className="container mx-auto py-5 md:py-12 lg:py-10">
                    <div className="relative mx-4">
                        <img src="https://i.ibb.co/SNs5J8z/bgtravel.jpg" alt="A work table with house plants" className="w-full h-full hidden lg:block" />
                        <img src="https://i.ibb.co/s3ny604/tab-min.png" alt="A work table with house plants" className="hidden sm:block lg:hidden w-full h-full" />
                        <img src="https://i.ibb.co/LJZT6xc/bg-mobile-fly-world-min.png" alt="A work table with house plants" className="sm:hidden w-full h-full" />


                        <div className="absolute z-10 top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
                            <p className="text-base flex items-center text-left leading-normal  text-white mt-4 sm:mt-5 sm:w-5/12">Explore The World <FcGlobe /></p>
                            <h1 className="text-4xl text-left sm:text-5xl lg:text-6xl font-semibold text-white sm:w-8/12">It's a Big World Out There, Go Explore</h1>
                            <p className="text-base text-left leading-normal  text-white mt-4 sm:mt-5 sm:w-5/12">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                            <Link to="travelList" className="hidden text-left sm:flex bg-gray-800 py-4 px-8 text-base font-medium text-white mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">Explore</Link>
                        </div>
                        <Link to="travelList" className="absolute bottom-0 sm:hidden  bg-gray-800 py-4 text-base font-medium text-white mt-8 flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;