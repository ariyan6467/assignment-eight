import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../src/Component/Home/Home';
import Applist from "../src/Component/Applist/Applist";
import InstallLIst from '../src/Component/InstallList/InstallLIst';
import HomeApp from '../src/Component/HomeApp/HomeApp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage   from "../src/Component/ErrorPage/ErrorPage"
import Details from '../src/Component/Details/Details';

 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
   errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            Component:Home,
             
            loader: async () => {
          const res = await fetch("/HomeApp.json");
          if (!res.ok) throw new Error("Failed to load HomeApp.json");
          return res.json();
        }

        },{
            path:"/Applist",
            Component:Applist,
            loader: async () => {
          const res = await fetch("/AllApps.json");
          if (!res.ok) throw new Error("Failed to load AllApps.json");
          return res.json();
        }
        },
        {
            path:"/InstallLIst",
             loader: async () => {
          const res = await fetch("/AllApps.json");
          if (!res.ok) throw new Error("Failed to load AllApps.json");
          return res.json();
        },
            Component:InstallLIst
        },
        {
            path:"/Details",
            Component:Details
        },
       
        

    ]
  },
]);