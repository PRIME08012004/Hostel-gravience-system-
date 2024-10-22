import React, { useState } from 'react'
import Thumbs_up from '../../../assets/thumbs-up.png'
import Indian_dishes from '../../../assets/dishes.webp'

function Meal_Poll() {
    const [Count , setCount ] = useState(0);

    const update_Poll_Count = ()=>{
        setCount((currrent_count)=> Math.min(currrent_count+1,10))
    }
    return (
        <>
            <div className='relative flex justify-center items-center bg-gradient-to-r from-blue-100 via-white to-blue-200 min-h-screen overflow-hidden'>
                
                {/* Main container with shadow */}
                <div className="container bg-white shadow-2xl mt-24 mx-5 p-10 pb-14 rounded-3xl border border-gray-300 w-full max-w-4xl relative z-10">
                    
                    {/* Bubble decoration placed inside the container on the bottom-right */}
                    <div className='absolute bottom-[-50px] right-[-100px] bg-blue-300 rounded-full w-32 h-32 md:w-64 md:h-64 opacity-40 animate-pulse'></div>
                    
                    {/* Navbar */}
                    <div className='font-lobster text-4xl text-blue-600 text-center mb-10'>
                        <nav>
                            <ul>
                                <li>Todays Meal Poll</li>
                            </ul>
                        </nav>
                    </div>

                    {/* Main content area */}
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <main className='w-full md:w-1/2 space-y-8'>
                            {/* Title section */}
                            <div className='text-center md:text-left'>
                                <span className='block font-bold text-4xl text-gray-900 leading-tight font-poppins'>
                                    We Deliver Delicious
                                </span>
                                <span className='block font-bold text-4xl text-gray-900 leading-tight font-poppins'>
                                    & Healthy Food
                                </span>
                            </div>

                            {/* Poll container */}
                            <div className='bg-blue-50 rounded-3xl p-6 shadow-inner space-y-6'>
                                {/* Static Poll Item (You will make this dynamic) */}
                                <div className='flex justify-between items-center mb-6'>
                                    <label className='font-medium text-lg text-gray-700 font-poppins' htmlFor="Food1">Paneer</label>
                                    <input
                                        type="range"
                                        name="Paneer"
                                        id="Paneer"
                                        value={Count}
                                        className='w-1/2 mx-4 accent-blue-500 hover:accent-blue-600'
                                        max={10}
                                        min={0}
                                    />
                                    <div className='text-xl font-semibold font-serif'>
                                        {Count}
                                    </div>
                                    <img
                                        src={Thumbs_up}
                                        width={45}
                                        alt="thumbs up icon"
                                        onClick={update_Poll_Count}
                                        className='transition-transform transform hover:scale-125 duration-300 ease-in-out'
                                    />
                                </div>
                            </div>
                        </main>

                        {/* Image container */}
                        <div className='w-full md:w-1/2 flex justify-center mt-8 md:mt-0'>
                            <img src={Indian_dishes} alt="Indian dishes" className='rounded-3xl shadow-md w-80 transform hover:scale-105 transition duration-300 ease-in-out' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Meal_Poll
