import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user } = useAuth()
    const [searchInput, setSearchInput] = useState(true);
    const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <div className="dark:bg-gray-500">
                <div>
                    <div className="relative">
                        {/* For md screen size */}
                        <div id="md-searchbar" className={`${mdOptionsToggle ? "hidden" : "flex"}  bg-white dark:bg-gray-900 lg:hidden py-5 px-6 items-center justify-between`}>
                            <div className="flex items-center space-x-3 text-gray-800 dark:text-white">
                                <div className=''>
                                    <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search for products" className="text-sm leading-none dark:text-gray-300 dark:bg-gray-900 text-gray-600 focus:outline-none" />
                            </div>
                            <div className="space-x-6">
                                <button aria-label="view favourites" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.8921 3.07357C13.5516 2.73291 13.1473 2.46267 12.7023 2.2783C12.2574 2.09392 11.7804 1.99902 11.2988 1.99902C10.8171 1.99902 10.3402 2.09392 9.89521 2.2783C9.45023 2.46267 9.04595 2.73291 8.70544 3.07357L7.99878 3.78024L7.29211 3.07357C6.60432 2.38578 5.67147 1.99938 4.69878 1.99938C3.72609 1.99938 2.79324 2.38578 2.10544 3.07357C1.41765 3.76137 1.03125 4.69422 1.03125 5.66691C1.03125 6.6396 1.41765 7.57245 2.10544 8.26024L2.81211 8.96691L7.99878 14.1536L13.1854 8.96691L13.8921 8.26024C14.2328 7.91974 14.503 7.51545 14.6874 7.07048C14.8718 6.6255 14.9667 6.14857 14.9667 5.66691C14.9667 5.18525 14.8718 4.70831 14.6874 4.26334C14.503 3.81836 14.2328 3.41408 13.8921 3.07357V3.07357Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                <button aria-label="go to cart" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    <svg className="fill-stroke" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.66667 1L1 4.2V15.4C1 15.8243 1.1873 16.2313 1.5207 16.5314C1.8541 16.8314 2.30628 17 2.77778 17H15.2222C15.6937 17 16.1459 16.8314 16.4793 16.5314C16.8127 16.2313 17 15.8243 17 15.4V4.2L14.3333 1H3.66667Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1 4.2002H17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.5564 7.3999C12.5564 8.2486 12.1818 9.06253 11.515 9.66264C10.8482 10.2628 9.94386 10.5999 9.00087 10.5999C8.05788 10.5999 7.15351 10.2628 6.48671 9.66264C5.81991 9.06253 5.44531 8.2486 5.44531 7.3999" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {/* For md screen size */}
                        {/* For large screens */}
                        <div className="dark:bg-gray-900 bg-gray-50 px-6 py-4">
                            <div className=" mx-auto flex items-center justify-between">
                                <Link to="/" className="md:w-2/12 w-4/12 cursor-pointer text-gray-800 dark:text-white" aria-label="the Crib.">
                                    <img className='w-8/12' src="https://i.ibb.co/HxyNh97/logi-fly-whait.png" alt="logo" />
                                </Link>
                                <ul className="hidden  md:flex items-center justify-center space-x-4">
                                    <li>
                                        <Link to="/" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline" >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/travelList" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline" >
                                            Tour List
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Destination" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline" >
                                            Destinations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Blog" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"  >
                                            Blogs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contactUs" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline" >
                                            Contact us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline" >
                                            Dashboard
                                        </Link>
                                    </li>
                                </ul>
                                <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                                    <div className="hidden lg:flex items-center">
                                        <button onClick={() => setSearchInput(!searchInput)} aria-label="search items" className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 11C5 15.4183 8.58172 19 13 19C17.4183 19 21 15.4183 21 11C21 6.58172 17.4183 3 13 3C8.58172 3 5 6.58172 5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2.99961 20.9999L7.34961 16.6499" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <input id="searchInput" type="text" placeholder="search" className={` ${searchInput ? "hidden" : ""} text-sm dark:bg-gray-900 dark:placeholder-gray-300 text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1`} />
                                    </div>
                                    <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                                        <button aria-label="view favourites" className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                        {
                                            user?.photoURL && <img className='w-8 rounded-full' src={user?.photoURL} alt="" />
                                        }
                                        {
                                            !user?.photoURL && <img className='w-8 rounded-full' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==" alt="" />
                                        }
                                    </div>
                                    <div className="flex lg:hidden">
                                        <button aria-label="show options" onClick={() => setMdOptionsToggle(!mdOptionsToggle)} className="text-black dark:text-white dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                            <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <button aria-label="open menu" onClick={() => setShowMenu(true)} className="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                            <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* For small screen */}
                        <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} absolute dark:bg-gray-900  z-20 inset-0 md:hidden flex-col h-screen w-full`}>
                            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <svg className="fill-stroke text-gray-800 dark:text-white" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <input type="text" placeholder="Search for products" className="text-sm dark:bg-gray-900 text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none" />
                                </div>
                                <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                    <svg className="fill-stroke text-gray-800 dark:text-white" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 p-4">
                                <ul className="flex flex-col space-y-6">
                                    <li>
                                        <Link to="/" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            Home
                                            <div>
                                                <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/travelList" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            Tour List
                                            <div>
                                                <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Destination" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            Destinations
                                            <div>
                                                <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Blog" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            Blogs
                                            <div>
                                                <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contactUs" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            Contact us
                                            <div>
                                                <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            Dashboard
                                            <div>
                                                <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;