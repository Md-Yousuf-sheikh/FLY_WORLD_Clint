import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Dashboard = () => {
    const { logOut } = useAuth();
    const [show, setShow] = useState(false);
    return (
        <div className=" ">
            <div className='dark:bg-gray-900'>
                <nav className="2xl:container  2xl:mx-auto sm:py-6 dark:bg-gray-900 md:px-7 py-5 ">
                    {/* For large and Medium-sized Screen */}
                    <div className="flex mx-4 justify-between ">
                        <h1 className=" font-normal text-lg lg:text-2xl leading-6  text-white">DASHBOARD</h1>
                        <div className="hidden sm:flex items-center flex-row space-x-4">
                            <ul className='flex items-center space-x-3   text-white '>
                                <Link to="/Dashboard/dashboardMain" className='capitalize hover:border-white border-gray-900 border-b-2 transition-all ease-in-out delay-75'>Dashboard</Link>
                                <Link to="addTour" className='capitalize hover:border-white border-gray-900 border-b-2 transition-all ease-in-out delay-75'>Add Tour</Link>
                                <Link to="manageTour" className='capitalize hover:border-white border-gray-900 border-b-2 transition-all ease-in-out delay-75'>Manage Tour</Link>
                                <Link to="adminMake" className='capitalize hover:border-white border-gray-900 border-b-2 transition-all ease-in-out delay-75'>Make Admin</Link>
                                <Link to="/" className='capitalize hover:border-white border-gray-900 border-b-2 transition-all ease-in-out delay-75'>Home</Link>
                                <button onClick={logOut} className='capitalize bg-indigo-500 p-1 rounded px-2 hover:border-white border-gray-900 border-b-2 transition-all ease-in-out delay-75'>Logout</button>
                            </ul>
                        </div>
                        {/* Burger Icon */}
                        <div id="bgIcon" onClick={() => setShow(!show)} className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}>
                            <svg className={`${show ? 'hidden' : ''}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className=" transform duration-150" d="M4 6H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 12H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path className=" transform duration-150" d="M4 18H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg className={`${show ? 'block' : 'hidden'}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    {/* Mobile and small-screen devices (toggle Menu) */}
                    <div id="MobileNavigation" className={`${show ? 'block' : 'hidden'}   w-full sm:hidden mt-4`}>

                        <div className=''>
                            <Link to="/" className="rounded-md hover:bg-indigo-600 flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white  duration-150 justify-center items-center">Home</Link>
                            <Link to="/Dashboard/dashboardMain" className="rounded-md hover:bg-indigo-600 flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white  duration-150 justify-center items-center">Dashboard</Link>
                            <Link to="addTour" className="rounded-md hover:bg-indigo-600 flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white  duration-150 justify-center items-center">Add Post</Link>
                            <Link to="manageTour" className="rounded-md hover:bg-indigo-600 flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white  duration-150 justify-center items-center">Manage Tour</Link>
                            <Link to="adminMake" className="rounded-md hover:bg-indigo-600 flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white  duration-150 justify-center items-center">Make Admin</Link>
                            <button onClick={logOut} className="rounded-md hover:bg-indigo-600 flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white  duration-150 justify-center items-center">Logout</button>
                        </div>
                    </div>
                </nav>
            </div>

            <div>
                <Outlet />
            </div>





        </div>
    );
};

export default Dashboard;