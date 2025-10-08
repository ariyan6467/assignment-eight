import React from 'react';
import LoaderImg from "../../../B12-A08-Hero-Apps/assets/logo.png";
import "./Loader.css"
const Loader = () => {
    return (
        <div className='loader'>
            <img src={LoaderImg} alt="Loading..." className='loaderImg' />
           <h1 className='text-lg font-bold'>Loading Data.....</h1>
            
        </div>
    );
};

export default Loader;