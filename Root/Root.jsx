import React, { createContext, useState } from 'react';
import Header from '../src/Component/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../src/Component/Footer/Footer';
import { BrowserRouter } from "react-router-dom";

export const BookDetails = createContext([]);

const Root = () => {
    const [details,setDetails] =useState([]);

    const contextValue ={
        details,setDetails
    }
    return (
        <div className='max-w-7xl mx-auto'>
          
      <Header />
   <BookDetails.Provider value={contextValue}>
     <Outlet></Outlet>
   </BookDetails.Provider>
           
           <Footer></Footer>
        </div>
    );
};

export default Root;