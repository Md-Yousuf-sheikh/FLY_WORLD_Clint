import React, { useState } from 'react';
import Modal from '../../../Shared/Modal/Modal';
import { BiTime } from "react-icons/bi";
import { HiOutlineUsers, HiOutlineLocationMarker } from "react-icons/hi";


const ManageAll = ({ item }) => {
    const { name, image, price, info, night, day, people, loction } = item;
    const [conform, setConform] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handelOrderDelete = e => {
        setOpenModal(true)
    }

    return (
        <div className="py-4 px-2">
            {
                openModal && <Modal setConform={setConform} setOpenModal={setOpenModal} item={item} url={'products'} />
            }
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
                                    <button onClick={handelOrderDelete} className='bg-red-500 rounded flex items-center text-white font-semibold shadow-xl px-5 py-3  mt-5 hover:shadow-sm transition-shadow '>
                                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                        </svg>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAll;