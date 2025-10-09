import React from 'react';
import AppErrorImg from "../../../B12-A08-Hero-Apps/assets/App-Error.png"
import { NavLink } from 'react-router';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center max-h-screen'>
            <img src={AppErrorImg} alt="" srcset="" />
           <h1 className='text-4xl mt-7 mb-4 font-semibold'>OPPS!! APP NOT FOUND</h1>
           <p className='text-sm text-gray-500 mb-2'>The App you are requesting is not found on our system.  please try another apps</p>
           <NavLink to="/">
            <button className="btn flex items-center gap-2 px-4 py-2 rounded-md text-white font-semibold 
bg-gradient-to-r from-[#6E72FC] to-[#AD1DEB] hover:opacity-90 transition ">Go Back To Home</button>
           </NavLink>
        </div>
    );
};

export default NotFound;