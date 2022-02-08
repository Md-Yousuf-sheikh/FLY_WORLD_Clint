import React, { useState } from 'react';
import Modal from '../../../Shared/Modal/Modal';
import { HiCash, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";


const Destinations = ({ item, setConform }) => {
    const [openModal, setOpenModal] = useState(false);
    const { name, img, price, email, city, state, address } = item;
    const handelOrderDelete = e => {
        setOpenModal(true)
    }
    return (
        <div>
            {
                openModal && <Modal setConform={setConform} setOpenModal={setOpenModal} item={item} url={'orders'} />
            }
            <div className="py-4 px-2">

                <div className="group container  rounded-md bg-white shadow-md  max-w-sm flex justify-center items-center  mx-auto content-div">
                    <div className=" px-2">
                        <div className=" container text-left rounded-md  max-w-sm flex justify-center items-center  mx-auto content-div">
                            <div>
                                <div className='relative'>
                                    <img className=' rounded-3xl  transition-shadow hover:shadow-2xl  tr' src={img} alt={name} />
                                    <div className='absolute p-1 rounded-tr-xl rounded-bl-xl font-bold top-0 right-0 bg-red-500 text-white'>
                                        <h1>${price}</h1>
                                    </div>
                                </div>
                                <div className="py-4  rounded-b-md">
                                    <span className="text-2xl font-bold">{name}</span>
                                    <div className="mt-5">
                                        <h1 className='font-semibold  '>
                                            < span className='font-bold bg-gray-200 py-1 px-2 flex items-center'> <HiCash className='text-red-500 mr-2' />Price: ${price} </span>
                                        </h1>
                                        <h1 className='font-semibold  '>
                                            < span className='font-bold bg-gray-100 py-1 px-2 flex items-center'> <HiOutlineMail className='text-red-500 mr-2' />Email: {email} </span>
                                        </h1>
                                        <h1 className='font-semibold  '>
                                            < span className='font-bold bg-gray-200 py-1 px-2 flex items-center'> <HiOutlineLocationMarker className='text-red-500 mr-2' />Address: {address},{city}{state}</span>
                                        </h1>
                                    </div>
                                    <div className='mx-auto flex justify-between '>
                                        <button className='bg-green-400 w-full  flex items-center   rounded-l-md text-white font-semibold  px-5 py-3 shadow-xl  mt-5 hover:shadow-sm transition-shadow '>

                                            <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                                <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                                            </svg>
                                            Pay

                                        </button>
                                        <button onClick={handelOrderDelete} className='bg-red-500 w-full rounded-r-md flex  items-center text-white font-semibold shadow-xl px-5 py-3  mt-5 hover:shadow-sm transition-shadow '>
                                            <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                            </svg>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destinations;