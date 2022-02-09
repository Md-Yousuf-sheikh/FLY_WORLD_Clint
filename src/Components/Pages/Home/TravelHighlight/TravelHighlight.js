import React from 'react';
import { HiOutlinePlay } from "react-icons/hi";

const TravelHighlight = () => {
    const handelVideo = e => {
        window.open('https://youtu.be/ORfbeJHAifs')
    }
    return (
        <div className='py-32 bg-left-top bg-repeat-round bg-cover' style={{ backgroundImage: `url("https://i.ibb.co/MnmDTcZ/bgtravel2.jpg")` }}>
            <div className='text-center space-y-4 py-5'>
                <h1 className='text-5xl text-white py-4'>Traveling Highlights</h1>
                <p className='text-xl  text-white'>Your New Traveling Idea</p>
                <HiOutlinePlay onClick={handelVideo} className='mx-auto text-6xl my-5 text-white ' />
            </div>
        </div>
    );
};

export default TravelHighlight;