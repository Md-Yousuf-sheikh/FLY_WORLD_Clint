import React from 'react';
import { BiTime } from "react-icons/bi";
import { FaPlaneDeparture } from "react-icons/fa";
import { HiOutlineUsers, HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from 'react-router-dom';

const TravelAllList = ({ item }) => {

    const { name, image, price, info, night, day, _id, people, loction } = item;

    return (
        <div className="py-4 px-2">
            <div className="group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
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
                                <div className='mx-auto flex px-5 justify-between '>
                                    <span className='bg-green-400 flex items-center rounded-tr-xl rounded-bl-xl text-white font-semibold  px-5 py-3  mt-5 hover:shadow-sm transition-shadow '>
                                        <span className='mr-2'>Price</span>
                                        ${price}
                                    </span>
                                    <Link to={`/products/${_id}`} className='bg-yellow-500 rounded flex items-center text-white font-semibold shadow-xl px-5 py-3  mt-5 hover:shadow-sm transition-shadow '>
                                        <FaPlaneDeparture className='mr-2' />
                                        Booking
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelAllList;