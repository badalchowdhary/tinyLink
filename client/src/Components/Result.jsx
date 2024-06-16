import React from 'react'
import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import CopyToClipboard from 'react-copy-to-clipboard';
import { MdDownload, MdContentCopy } from "react-icons/md";
import { FaShareNodes } from "react-icons/fa6";
import domtoimage from 'dom-to-image-more';
import { saveAs } from 'file-saver';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Result = ({ shortID }) => {
    const redirect_BASE_URL = 'http://localhost:8000/url/'
    const [copied, setCopied] = useState(false);
    const shortURL = redirect_BASE_URL + shortID;

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    const handleDownload = async () => {
        var node = document.getElementById('qr-code');

        domtoimage
            .toPng(node)
            .then(function (dataUrl) {
                var img = new Image();
                img.src = dataUrl;
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
        
            domtoimage.toBlob(document.getElementById('qr-code')).then(function (blob) {
                window.saveAs(blob, 'qr-code.png');
            });
    }

    useEffect(() => {
        AOS.init();
    }, [])
    
  return (
    <div className='flex justify-center items-center lg:h-screen'>
        <div className=' bg-gray-50 shadow-xl rounded-lg grid grid-cols-1' data-aos="fade-up">
            <div className=' mx-4 my-2 p-4 lg:mx-10 lg:px-10 '>
                <h2 className=' py-6 text-center text-2xl text-yellow-600 font-semibold'> Your short URL !</h2>
                <div className='flex justify-center items-center'>
                    <div id='qr-code' className=' bg-grey-100 rounded-md max-h-40 max-w-40'>
                        <QRCode value={shortURL} className=' bg-slate-50 p-3 max-h-40 max-w-40'/>
                    </div>
                </div>
                <div className=' my-4 flex justify-center items-center'>
                    <button onClick={handleDownload} className='  rounded-md bg-indigo-500 text-white py-2 px-6 hover:bg-indigo-600 transition duration-300'>
                        <MdDownload className=' ' />
                    </button>
                    {/* <button className=' bg-indigo-500 rounded-md text-white mx-2 py-1 px-4 hover:bg-indigo-600 transition duration-300'>
                        <FaShareNodes className=' '/>
                    </button> */}
                </div>
            </div>
            <div className=' mx-4 my-1 lg:mx-10 lg:my-2 '>
                <div className='my-4 w-full flex items-center border border-indigo-300 rounded-md overflow-hidden'>
                    <input 
                        type="text" 
                        className="flex-1 p-2"
                        value = {shortURL}
                        disabled
                    />
                </div>
                <div className=' my-4 flex justify-center items-center'>
                    <CopyToClipboard text={shortURL} onCopy={handleCopy}>
                    <button className=" rounded-md bg-indigo-500 text-white py-2 px-6 hover:bg-indigo-600 transition duration-300">
                        <MdContentCopy className=''/>
                    </button>
                    </CopyToClipboard>
                </div>
                {copied && <div className=' my-2 text-center text-green-500'>{"Copied to clipboard"}</div>}
            </div>
        </div>
    </div>
  )
}

export default Result