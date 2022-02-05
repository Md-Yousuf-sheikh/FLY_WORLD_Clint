import React from 'react';
import { HiChatAlt2, HiLocationMarker, HiCalendar } from "react-icons/hi";
const TravelPerfection = () => {
    return (
        <div>
            <div className='container mx-auto py-8'>
                <h5 className='text-red-500 text-center font-sans font-semibold' >3 STEPS OR THE PERFECT TRIP</h5>
                <h1 className='text-4xl text-center my-5 font-bold'>Find Travel Perfection</h1>
                <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, dolor!</p>
                <div className=' grid grid-cols-1 md:grid-cols-3 py-12  justify-between gap-8'>
                    <div className=''>
                        <HiChatAlt2 className='text-6xl mx-auto  text-red-300' />
                        <h2 className='text-xl text-center font-semibold my-2'>Tell Us What You Want To Do</h2>
                        <p className='w-6/12 text-center mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, dolorum?</p>
                    </div>
                    <div className='md:border-x-2'>
                        <HiLocationMarker className='text-6xl mx-auto  text-red-300' />
                        <h2 className='text-xl text-center font-semibold my-2'>Share Your Travel Location</h2>
                        <p className='w-6/12 text-center mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, dolorum?</p>
                    </div>
                    <div className=''>
                        <HiCalendar className='text-6xl text-center mx-auto  text-red-300' />
                        <h2 className='text-xl text-center font-semibold my-2'>Share Your Travel Preference</h2>
                        <p className='w-6/12 text-center mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, dolorum?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelPerfection;