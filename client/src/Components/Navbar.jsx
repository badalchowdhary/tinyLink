import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className=' h-14 lg:h-24 border shadow-md bg-white flex items-center justify-between'>
      <div className=' ml-10 lg:ml-14 text-xl lg:text-3xl tracking-wider' data-aos="fade-in">
        <span className=' font-light text-gray-500'>tiny</span><span className=' text-yellow-500 font-semibold'>Link</span>
      </div>
      <a href='https://portfolio-badal-chowdharys-projects.vercel.app/' target='blank' className='mr-10 lg:mr-14 font-light text-white py-1 px-2 bg-orange-500 rounded-md cursor-pointer'>
        About Me
      </a>
    </div>
  )
}

export default Navbar