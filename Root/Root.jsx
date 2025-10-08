import React, { createContext, useEffect, useState } from 'react';
import Header from '../src/Component/Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../src/Component/Footer/Footer';
import { BrowserRouter } from "react-router-dom";
import Loader from "../src/Component/Loader/Loader"

export const BookDetails = createContext([]);

const Root = () => {
    const [details,setDetails] =useState([]);
  const navigation = useNavigation();
  
    const contextValue ={
        details,setDetails
    }

    

   
    return (
      <>
      
        <div className='max-w-7xl mx-auto'>
          
      <Header />
   <BookDetails.Provider value={contextValue}>
       {navigation.state === "loading" ? <Loader /> : <Outlet />}
   </BookDetails.Provider>
           
           <Footer></Footer>
        </div>
        </>
    );
};

export default Root;