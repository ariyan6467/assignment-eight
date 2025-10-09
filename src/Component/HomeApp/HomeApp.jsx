import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import Apps from './Apps';

const HomeApp = () => {
    const apps = useLoaderData();
    console.log(apps);
    return (
        <div className='text-center my-10 p-5 flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold my-5'>Trending Apps</h1>
            <p className='text-sm mb-7 opacity-75'>Explore All Trending Apps on the Market developed by us</p>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                apps.map(app=><Apps key={app.id} app={app} />)
            }
            
           </div>
            <NavLink  to="/Applist">
        <a className="btn flex items-center gap-2 px-4 py-2 my-7 rounded-md text-white w-fit font-semibold 
bg-gradient-to-r from-[#6E72FC] to-[#AD1DEB] hover:opacity-90 transition ">Show All</a>
    </NavLink>
        </div>
    );
};

export default HomeApp;