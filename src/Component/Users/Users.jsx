import React from "react";

const Users = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-white 
  bg-gradient-to-r from-[#6E72FC] to-[#AD1DEB] hover:opacity-90 transition">
      <h2 className="
      text-2xl md:text-5xl mt-8 font-semibold mb-6
      ">Trusted by Millions, Built for You</h2>
      <div className="flex flex-col md:flex-row mb-9 space-x-9 items-center">
        <div className="flex flex-col items-center space-y-3">
            <p className="text-sm">Total Downloads</p>
            <h3 className="text-5xl font-bold">29.6M</h3>
            <p className="text-sm"> 21% More THan Last Month</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
            <p className="text-sm">Reviews</p>
            <h3 className="text-5xl font-bold">906K</h3>
            <p className="text-sm"> 40% More Than Last MOnth</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
            <p className="text-sm">Active Apps</p>
            <h3 className="text-5xl font-bold">132+</h3>
            <p className="text-sm"> 31 More Will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Users;
