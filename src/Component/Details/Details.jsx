import React, { useContext, useEffect, useState } from "react";
import { BookDetails } from "../../../Root/Root";
import Download from "../../../B12-A08-Hero-Apps/assets/download.png";
import Ratings from "../../../B12-A08-Hero-Apps/assets/rating.png";
import REview from "../../../B12-A08-Hero-Apps/assets/review.png";
import { addToDb, getStoredApp } from "../Utility/Utility";
import "./Details.css";
import { ToastContainer, toast } from "react-toastify";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis
} from "recharts";
const Details = () => {
  const { details } = useContext(BookDetails);
  console.log(details);
  const id = details.id;

  const [installed, setInstalled] = useState(false);
  const [installing, setInstalling] = useState("Install Now");

  const notify = () => toast(`${details.title}App Installed Successfully!`);
  const handleInstall = (id) => {
    addToDb(id);
    setInstalled(true);
    setInstalling("Installed");
    notify();
  };

  useEffect(() => {
    const storedApp = getStoredApp();
    if (storedApp.includes(id)) {
      setInstalled(true);
      setInstalling("Installed");
    }
  }, [id]);

  const RatingsData = details.ratings;
  
  const newArray = RatingsData.map(item => ({
 name: Number(item.name.split(" ")[0]), // convert "1" → 1
  count: item.count
}));

console.log(newArray);

  return (
    <div>
      {/* Details Container */}
      <div className="flex items-center border-b-1 border-gray-500">
        <div className="ml-8 mr-5 my-8  p-2 ">
          <img
            className="w-[390px] rounded-2xl"
            src={details.image}
            alt=""
            srcset=""
          />
        </div>
        <div className=" w-full my-12 ">
          <h1 className="font-bold text-3xl uppercase">
            <span>{details.title}:</span>
            <span>{details.companyName}</span>
          </h1>
          <p className="text-sm text-gray-700 my-2">
            Developed by: <span>{details.companyName}</span>
          </p>
          <div className="border-1 opacity-70 border-gray-500 w-full"></div>
          <div className="flex space-x-28 mt-10">
            <div className="flex flex-col items-center text-center space-y-2">
              <img src={Download} alt="" srcset="" />
              <p> Downloads</p>
              <span className="text-3xl font-bold">{details.downloads}</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <img src={Ratings} alt="" srcset="" />
              <p>Average Ratings</p>
              <span className="text-3xl font-bold">{details.ratingAvg}</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <img className="w-[25px]" src={REview} alt="" srcset="" />
              <p>Total Reviews</p>
              <span className="text-3xl font-bold">{details.reviews}</span>
            </div>
          </div>
          <button
            disabled={installed}
            onClick={() => handleInstall(id)}
            className=" bg-green-700 px-4 py-2 rounded-2xl  text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {installing}
          </button>
          <ToastContainer />
        </div>
      </div>

      {/* Ratings Container */}
      <div className="w-full h-96 flex justify-center items-center">
        <ResponsiveContainer width="80%" height="100%">
          <BarChart data={newArray}>
            <XAxis dataKey="count" label={{ value: " Coount of Rating", position: "insideTopRight", offset: 20,}}></XAxis>
            <YAxis label={{ value: "Stat", position: "insideTopRight", offset: 60,angle: -90}} ></YAxis>
            <Bar dataKey="count" barSize={35} fill="pink"></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* DescripTion Container */}
      <div>
        <h1 className="text-2xl font-semibold my-4">Describtion</h1>
        <p>{details.description}</p>
      </div>
    </div>
  );
};

export default Details;
