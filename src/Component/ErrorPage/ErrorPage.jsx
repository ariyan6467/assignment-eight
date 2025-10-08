import React from 'react';
import ErrorImg from "../../../B12-A08-Hero-Apps/assets/error-404.png"
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='h-screen  flex flex-col justify-center items-center'>
            <img src={ErrorImg} alt="" srcset="" />
            <h1 className='text-5xl font-bold my-3'>Oops,page not Found!</h1>
            <p>The page you are looking for is not found</p>
            <NavLink to="/">
                <button className="btn flex items-center gap-2 px-4 py-2 rounded-md text-white font-semibold 
bg-gradient-to-r from-[#6E72FC] to-[#AD1DEB] hover:opacity-90 transition ">Go Back to Home</button>
            </NavLink>
        </div>
    );
};

export default ErrorPage;