import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skeleton = () => {
  return (
    <div className='flex justify-center items-center lg:h-screen'>
        <div className=' bg-indigo-50 shadow-xl rounded-lg grid grid-cols-1' data-aos="fade-up">
            <div className=' mx-4 my-2 p-4 lg:mx-10 lg:px-10 '>
                <div className=' my-6 h-5 bg-slate-300 rounded-md animate-pulse'></div>
                <div className='flex justify-center items-center bg-slate-300 rounded-md animate-pulse'>
                    <div className=' h-40 w-40'>
                        
                    </div>
                </div>
                <div className=' my-4 flex justify-center items-center gap-6'>
                    <button className=' bg-slate-300 rounded-md h-6 w-8 animate-pulse'>
                        
                    </button>
                    
                </div>
            </div>
            <div className=' mx-4 my-1 lg:mx-10 lg:my-2 '>
                <div className='my-4 w-full flex items-center bg-slate-300 rounded-md animate-pulse'>
                    <input 
                        type="text" 
                        className="flex-1 p-2"
                        value = {""}
                        disabled
                    />
                </div>
                <div className=' my-4 flex justify-center items-center gap-6'>
                    <button className=' bg-slate-300 rounded-md h-6 w-8 animate-pulse'>
                        
                    </button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skeleton