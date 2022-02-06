import React from 'react';
import { Link } from 'react-router-dom';
import { BiTime } from "react-icons/bi";
import { HiOutlineUsers, HiOutlineLocationMarker } from "react-icons/hi";
const TopPlace = (props) => {
    const { name, image, price, info, night, day, _id, people, loction } = props?.item

    return (
        <div>
            <div className="py-4 px-2">
                <div className=" container text-left rounded-md  max-w-sm flex justify-center items-center  mx-auto content-div">
                    <div>
                        <div className='relative'>
                            <img className='rounded-3xl rounded-bl-none transition-shadow hover:shadow-2xl  tr' src={image} alt={name} />
                        </div>
                        <div className="py-8  rounded-b-md">
                            <span className="text-2xl font-bold">{name}</span>
                            <div className="mt-5 flex justify-between">
                                <span className='flex items-center text-gray-700 font-semibold'><BiTime className='text-red-400 mr-2' />{day}D/{night}N</span>
                                <span className='flex items-center text-gray-700 font-semibold'><HiOutlineUsers className='text-red-400 mr-2' />People:{people}</span>
                                <span className='flex items-center text-gray-700 font-semibold'><HiOutlineLocationMarker className='text-red-400 mr-2' />{loction}</span>
                            </div>
                            <p className='line-clamp-3 mt-2'>
                                {info}
                            </p>
                            <Link to={`/products/${_id}`} className='bg-red-500  text-white font-semibold shadow-xl px-5 py-3 rounded-full mt-5 hover:shadow-sm transition-shadow '>
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopPlace;