import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Headers from '../../../Shared/Header/Header/Header';

const Booking = () => {
    const { user, isLoading } = useAuth()
    const { id } = useParams()
    const [details, setDetails] = useState([])
    const [detail, setDetail] = useState({});
    const [address, setAddress] = useState()
    const [success, setSuccess] = useState(false)
    // Bookings 
    useEffect(() => {
        fetch('https://vast-cove-03076.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    //  Booking find id to details
    useEffect(() => {
        const foundDetails = details.find(detail => detail._id === id)
        setDetail(foundDetails)
    }, [id, details])
    // handel on blur
    const handelBlur = e => {
        const filed = e.target.name;
        const value = e.target.value;
        const newAddress = { ...address };
        newAddress[filed] = value;
        setAddress(newAddress);
    }
    // Post Document 
    const postDocument = {
        displayName: user?.displayName,
        email: user?.email,
        name: detail?.name,
        img: detail?.image,
        price: detail?.price,
        description: detail?.description,
        address: address?.address,
        city: address?.city,
        state: address?.state,
        zipcode: address?.zipcode
    }

    // handel order submit
    const handelOrderSubmit = e => {
        e.preventDefault()
        fetch('https://vast-cove-03076.herokuapp.com/order', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postDocument)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true)
                } else {
                    setSuccess({})
                }
            })
        document.getElementById("Bay-now").reset();
    }
    if (success) {
        setTimeout(() => {
            setSuccess(false)
        }, 5000);
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <Headers />
            {
                success && <div className="  fixed w-12/12  right-5 bottom-8 flex justify-center z-50">
                    <div className="bg-indigo-200 px-6 py-3  rounded-md text-lg flex items-center">
                        <svg viewBox="0 0 24 24" className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
                            <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
                        </svg>
                        <span className="text-green-800"> Booking success full ! </span>
                    </div>
                </div>
            }
            {!isLoading &&
                <div className=" p-6 bg-gray-100 flex items-center justify-center">
                    <div className="container max-w-screen-lg mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Product */}
                            {success}
                            <div>
                                <div className="py-4 -mt-4 px-2">
                                    <div className=" group container  rounded-md   max-w-sm flex justify-center items-center  mx-auto content-div">
                                        <div>
                                            <img className="mx-auto rounded-lg" src={detail?.image} alt="" />
                                            <div className="py-8 px-4   rounded-b-md fd-cl">
                                                <div className="text-justify">
                                                    <span className="text-lg my-3 text-justify font-semibold">{detail?.name}</span>
                                                </div>
                                                <p></p>
                                                <p className="text-gray-600">{detail?.info}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* htmlForm */}
                            <div className=" rounded  p-4 px-4 md:p-8 mb-6">
                                <div className="grid gap-4 gap-y-2 text-sm">

                                    <form onSubmit={handelOrderSubmit} id="Bay-now" className="lg:col-span-2">
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label htmlFor="full_name">Full Name</label>
                                                <input type="text" onBlur={handelBlur} name="name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={user.displayName} />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label htmlFor="email">Email Address</label>
                                                <input type="text" onBlur={handelBlur} name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={user?.email} placeholder="email@domain.com" />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label htmlFor="address">Address / Street*</label>
                                                <input type="text" onBlur={handelBlur} required name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="city">City*</label>
                                                <input type="text" onBlur={handelBlur} required name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="country">Country*</label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <input onBlur={handelBlur} required name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />

                                                    <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                                        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                                        </svg>
                                                    </button>
                                                    <button tabIndex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                                        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="state">State / province</label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <input name="state" onBlur={handelBlur} id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                                                    <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                                        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                                        </svg>
                                                    </button>
                                                    <button tabIndex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                                        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="md:col-span-1">
                                                <label htmlFor="zipcode">Zipcode*</label>
                                                <input type="number" required onBlur={handelBlur} name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>

                                            <div className="mt-5">

                                            </div>
                                            <div className="md:col-span-5 text-right">

                                                <div className="inline-flex items-end">
                                                    {
                                                        !success && <button type="submit" className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded">Submit</button>
                                                    }
                                                    {
                                                        success && <div>
                                                            <Link to='/Destination' className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded">See Booking</Link>
                                                        </div>
                                                    }

                                                </div>
                                            </div>

                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Booking;