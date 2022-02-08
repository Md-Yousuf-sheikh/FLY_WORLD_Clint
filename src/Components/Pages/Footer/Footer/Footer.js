import React from 'react';
import { IoRocketOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <div className="mx-auto  py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4 ">
                    <div className="flex flex-col text-center md:text-left ">
                        <img className='w-5/12' src="https://i.ibb.co/26hLdn6/logo-fly-black.png" alt="LOGO FLY WORLD" />
                        <h6 className='mt-6 text-left'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, dolorem</h6>
                        <h1 className='text-md flex items-center space-x-2 mt-4 font-bold text-gray-600'> Follow Us: <FaFacebook className='ml-2' /> <FaInstagram /><FaTwitter /><FaLinkedinIn /></h1>
                    </div>
                    {/* Quick Link */}
                    <div className="">
                        <h2 className=" font-bold leading-4 text-xl text-gray-900">Quick Links</h2>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">About Us</p>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Destination</p>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Tour Packages</p>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Blogs</p>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Contact Us</p>
                    </div>
                    {/* Categories */}
                    <div>
                        <h2 className="text-xl  font-bold leading-4 text-gray-800">Categories</h2>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Tour</p>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Travel</p>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Group Tour</p>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">College Tour</p>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Air Travel</p>
                    </div>
                    {/* Get in touch */}
                    <div className="">
                        <label className="text-xl  font-bold leading-5 text-gray-800">Get In Touch</label>
                        <div className="cursor-pointer flex items-center justify-between border border-gray-800 mt-4">
                            <input type="text" className="text-base leading-4 p-4 w-full focus:outline-none text-gray-800 placeholder-gray-800" placeholder="Enter your email" />
                            <svg className="mr-4 fill-current text-gray-800 hover:text-gray-500" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.8934 7.39673L14.8884 7.39457L1.54219 1.9166C1.42993 1.87011 1.30778 1.85187 1.18666 1.86353C1.06554 1.87519 0.949225 1.91637 0.848125 1.9834C0.741311 2.05266 0.653573 2.14711 0.592805 2.25826C0.532037 2.36941 0.500145 2.49376 0.5 2.62013V6.12357C0.50006 6.29633 0.561019 6.46366 0.67237 6.59671C0.783722 6.72976 0.938491 6.82021 1.11 6.85246L8.38906 8.18438C8.41767 8.18974 8.44348 8.20482 8.46205 8.22701C8.48062 8.2492 8.49078 8.2771 8.49078 8.30591C8.49078 8.33472 8.48062 8.36263 8.46205 8.38481C8.44348 8.407 8.41767 8.42208 8.38906 8.42744L1.11031 9.75936C0.938851 9.79153 0.784092 9.88185 0.67269 10.0148C0.561288 10.1477 0.500219 10.3149 0.5 10.4876V13.9917C0.499917 14.1124 0.530111 14.2312 0.587871 14.3374C0.645632 14.4437 0.729152 14.5341 0.830938 14.6006C0.953375 14.6811 1.09706 14.7241 1.24406 14.7243C1.34626 14.7242 1.4474 14.7039 1.54156 14.6646L14.8875 9.21787L14.8934 9.21509C15.0731 9.13869 15.2262 9.01185 15.3337 8.85025C15.4413 8.68866 15.4986 8.49941 15.4986 8.30591C15.4986 8.11241 15.4413 7.92316 15.3337 7.76157C15.2262 7.59997 15.0731 7.47313 14.8934 7.39673Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Bt */}
            <div className='bg-gray-900 py-4 '>
                <div className='bg-gray-900 flex container mx-auto text-white px-2 justify-between'>
                    <div className="flex items-center"><img className=' mr-2 h-2' src="https://i.ibb.co/HxyNh97/logi-fly-whait.png" alt="" /> <span className='text-xs'>&copy;  2020 All Right Reserved</span> </div> <p className='text-xs'>Privacy Policy | Term & Conditions</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;