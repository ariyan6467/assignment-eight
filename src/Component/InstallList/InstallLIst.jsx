import React, { useEffect, useState } from 'react';
import { getStoredApp } from '../Utility/Utility';

import { useLoaderData } from 'react-router';
import InstallApp from './InstallApp';


const InstallLIst = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const storedApp = getStoredApp(); 
    console.log(storedApp);
    const Apps = useLoaderData();
    console.log(Apps);
   
     useEffect(() => {
       const filtered = Apps.filter(app => storedApp.includes(app.id));
       setInstalledApps(filtered);
    },[Apps])

    function handleSortByLowToHigh() {
        const sorted = [...installedApps].sort((a, b) => a.downloads - b.downloads);
        setInstalledApps(sorted);
        console.log(sorted);

    }

    function handleSortByHighToLow() {
        const sorted = [...installedApps].sort((a, b) => b.downloads - a.downloads);
        setInstalledApps(sorted);
        console.log(sorted);
    }

   

    return (
       
           <div className='text-center my-10  '>
           <h1 className='text-3xl font-bold my-5'>Your Installed Apps</h1>
           <p className='text-sm mb-7 opacity-75'>Explore All Apps on the Market developed by us. We code for Millions</p>
           <div className='flex justify-between items-center my-5 font-bold'>
           <p> <span>({installedApps.length})</span> Apps Found</p>
          <div className="dropdown dropdown-end border-1 border-gray-400">
  <div tabIndex={0} role="button" className="btn m-1">Sorted by:⬇️</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={handleSortByLowToHigh} ><a>Low to High</a></li>
    <li onClick={handleSortByHighToLow}><a>High To Low</a></li>
  </ul>
</div>
           </div>

           <div>
            {
                installedApps.map(app => <InstallApp key={app.id} app={app}></InstallApp>)
            }
           </div>
            
        </div>
       
    );
};

export default InstallLIst;