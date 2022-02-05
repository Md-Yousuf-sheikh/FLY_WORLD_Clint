import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaRss } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const TopHeader = () => {
    const { user, logOut } = useAuth()
    const handelLogOut = e => {
        logOut()
    }
    return (
        <div className='dark:bg-gray-700 text-white py-2 font-light'>
            <div className='container mx-auto'>
                <div className='flex justify-between px-4'>
                    <div className=' items-center hidden md:flex'> <span className='flex items-center mr-2' > +88 2534 3635</span>  <span className='flex items-center' ><FaEnvelope className='mr-2' />flyworld2020@gmail.com</span>  </div>
                    <div className='flex items-center space-x-2'><FaFacebookF /> <FaInstagram /> <FaTwitter /> <FaRss />
                        {
                            !user?.email &&
                            <span className='font-bold cursor-pointer '><Link to="/login">Login </Link>/<Link to="/register"> SinIn</Link></span>
                        }
                        {
                            user?.email && <span onClick={handelLogOut} className='font-bold cursor-pointer'>LogOut</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
