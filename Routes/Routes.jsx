import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../src/Component/Home/Home';
import Applist from '../src/Component/Applist/Applist';
import InstallLIst from '../src/Component/InstallList/InstallLIst';
import HomeApp from '../src/Component/HomeApp/HomeApp';

 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component:Home

        },{
            path:"/Applist",
            Component:Applist
        },
        {
            path:"/InstallLIst",
            Component:InstallLIst
        },
        {
            path:"/HomeApp",
             loader:()=>fetch("/HomeApp.json"),
            Component:HomeApp
        }

    ]
  },
]);