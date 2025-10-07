import React from 'react';
import { useLoaderData } from 'react-router';

const HomeApp = () => {
    const apps = useLoaderData();
    console.log(apps);
    return (
        <div>
            <h1>Trending Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
           <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      <span>Card:</span><span>Title</span>
     
    </h2>
   
    <div className="card-actions flex justify-between">
       <div className="btn btn-success">NEW</div>
       <div className="btn btn-warning">NEW</div>
    </div>
  </div>
</div>
           </div>
        </div>
    );
};

export default HomeApp;