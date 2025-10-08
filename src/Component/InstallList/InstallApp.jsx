import React from 'react';
import Download from "../../../B12-A08-Hero-Apps/assets/download.png";
import Ratings from "../../../B12-A08-Hero-Apps/assets/rating.png";
import { removeFromDb } from '../Utility/Utility';
import { ToastContainer, toast } from 'react-toastify';
const InstallApp = ({ app }) => {

const id = app.id;
console.log(id);

const notify = () => toast(`${app.title}App Uninstalled Successfully!`);
const handleUninstall = (id) => {
    removeFromDb(id);
    notify();
}

    return (
        <div className='flex justify-between shadow-2xl items-center border-2 border-gray-300 rounded-md p-5 m-2'>
             <div className='flex items-center gap-5'>
              <img
              className='w-40 rounded-2xl'
              src={app.image} alt="" srcset="" /> 
              <div className='text-left flex flex-col space-y-7 font-bold'>
                <h2 className='text-2xl'><span>{app.title}:</span>{app.companyName}</h2>
                <div className='flex gap-3 text-xl opacity-70 justify-around font-bold'>
                    <p><img src={Download} alt="" srcset="" />
                    <span>{app.downloads}</span>
                    </p>
                    <p><img src={Ratings} alt="" srcset="" />
                    <span>{app.ratingAvg}</span>
                    </p>
                    <p><img src="" alt="" srcset="" />
                    <span>{app.size}MB</span>
                    </p>
                </div>
            </div>   
            </div>  
            <div>
                <button 
                onClick={() => handleUninstall(id)}
                className='btn btn-error' >Uninstall</button>
                 <ToastContainer />
            </div>
           </div>
    );
};

export default InstallApp;