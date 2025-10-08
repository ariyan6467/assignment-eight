import React, { useContext } from 'react';
import Ratings from "../../../B12-A08-Hero-Apps/assets/rating.png"
import Downloads from "../../../B12-A08-Hero-Apps/assets/download.png"
import { NavLink } from 'react-router';
import { BookDetails } from '../../../Root/Root';

const Apps = ({ app }) => {
    const {details,setDetails} =useContext(BookDetails);
    console.log(details)

function handleDetails(){
    setDetails(app);
    
}
    return (
        <NavLink to="/Details" onClick={handleDetails} >
            <div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      <span>{app.title}:</span><span>{app.companyName}</span>
     
    </h2>
   
    <div className="card-actions flex justify-between">
       <div className="btn btn-success bg-green-200 border-0">
        <img  src={Downloads} alt="Downloads" />
        {app.downloads}</div>
       <div className="btn btn-warning bg-yellow-500 border-0">
        <img src={Ratings} alt="Ratings" />
        {app.ratingAvg}</div>
    </div>
  </div>
</div>
        </NavLink>
    );
};

export default Apps;