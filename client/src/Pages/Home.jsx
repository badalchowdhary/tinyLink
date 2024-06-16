import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import Result from '../Components/Result';
import Skeleton from '../Components/Skeleton';
import { publicRequest } from '../requestMethods';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    const [result, setResult] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [url, setUrl] = useState("");
    const [shortID, setShortID] = useState("");

    

    const handleInputChange = (e) => {
        setError("");
        setUrl(e.target.value);
    }

    const handleShorten = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await publicRequest.post('/url', { url: url });
            setShortID(response.data.shortID);
            setIsLoading(false);
            setResult(true);
        } catch (err) {
            setError(err.response.data.error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        AOS.init();
    }, [])

    // useEffect(() => {
    //     console.log(shortID);
    // }, [shortID])

  return (
    <>
    

    <div className=' grid grid-cols-1 lg:grid-cols-2'>
        <div className=' bg-slate-50'>
        <Navbar/>
            <div className=' grid grid-cols-1 m-10 lg:mx-16 lg:my-16'>
                <div className=' px-4 py-12 lg:px-4' data-aos="fade-up">
                    <p className=' text-indigo-500 py-2 text-5xl lg:text-8xl font-semibold'>Shorten your</p>
                    <p className=' text-orange-500 py-2 text-5xl lg:text-8xl font-extrabold'> URL !!</p>
                </div>
                <div className=' px-8 py-8 lg:px-10 lg:py-20'>
                    <div className="flex items-center border border-indigo-300 rounded-md overflow-hidden" data-aos="fade-in">
                        <input 
                            type="text" 
                            className="flex-1 p-2 focus:outline-none"
                            placeholder="Enter your URL"
                            value = {url}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleShorten} className="bg-indigo-500 text-white py-2 px-6 hover:bg-indigo-600 transition duration-300">
                            Shorten
                        </button>
                    </div>
                    {error && <div className=' p-10 text-center text-red-500 animate-pulse'>{error}</div>}
                </div>
            </div>
        </div>
        <div className=' relative bg-blue-300' data-aos="fade-in">
            <img className=' absolute' src='https://img.freepik.com/free-vector/abstract-creative-homepage-illustration_23-2149236243.jpg?t=st=1718460716~exp=1718464316~hmac=8d631d6a246f412759ee2daa23c0b224fe117e0dce965432a70c9747bb7aa546&w=1060'/>
            <div className=' relative'>
                {isLoading && <Skeleton/>}
                {result && <Result shortID={shortID}/> }
            </div>
        </div>
    </div>
    </>
  )
}

export default Home