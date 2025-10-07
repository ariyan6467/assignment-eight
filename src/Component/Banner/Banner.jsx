import React from "react";
import Hero from "../../../B12-A08-Hero-Apps/assets/hero.png"
import AppStore from "../../../B12-A08-Hero-Apps/assets/appstore.png"
import PLayStore from "../../../B12-A08-Hero-Apps/assets/playstore.png"
import { NavLink } from "react-router";

const Banner = () => {
  return (
    <div className=" flex flex-col items-center justify-center text-center">
      <h1 className="md:text-6xl text-4xl font-bold mt-18 mb-4 text-gray-600">
        We Build <br></br><span className="text-purple-500">Productive</span> Apps
      </h1>
      <p className="font-mono text-gray-500 mb-8 w-3/5">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex gap-4 mb-8">
        <NavLink to="https://play.google.com/store/games?hl=en">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl border-1 border-gray-500">
            <img src={PLayStore} alt="" srcset="" />
            Google PPlay</button>
        </NavLink>
        <NavLink to="https://www.apple.com/app-store">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl border-1 border-gray-500">
            <img src={AppStore} alt="" srcset="" />
            App Store</button>
        </NavLink>
      </div>
      <div className="">
        <img
        className="max-h-[400px]" src={Hero} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Banner;
