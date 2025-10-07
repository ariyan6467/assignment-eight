import React from 'react';
import Header from '../src/Component/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../src/Component/Footer/Footer';
import { BrowserRouter } from "react-router-dom";

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
          
      <Header />
   
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;