import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Apps from '../HomeApp/Apps';

const Applist = () => {
    const apps = useLoaderData();
    console.log(apps);
    const [search, setSearch] = useState('');

   const filteredApps = (apps || []).filter((app) =>
  app?.title?.toLowerCase().includes(search?.toLowerCase() || "")
);
    return (
        <div className='text-center my-10  '>
           <h1 className='text-3xl font-bold my-5'>Our All Applications</h1>
           <p className='text-sm mb-7 opacity-75'>Explore All Apps on the Market developed by us. We code for Millions</p>
           <div className='flex justify-between items-center my-5 font-bold'>
           <p> <span>({filteredApps.length})</span> Apps Found</p>
           <input
          onChange={(e) => setSearch(e.target.value)}
           className='border-2 border-gray-300 rounded-md p-2'
           type="search" name="search" placeholder='Search Apps...' id="" />
           </div>
              {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    filteredApps.map(app=><Apps key={app.id} app={app}></Apps>)
                }
              </div> */}
              {
                filteredApps.length > 0 ? (
                     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    filteredApps.map(app=><Apps key={app.id} app={app}></Apps>)
                }
              </div>

                ):(
                     <p className="text-center text-gray-500 text-3xl">
          ❌ No matching apps found.
        </p>
                )
              }
        </div>
    );
};

export default Applist;