import React from 'react';
import { NavLink } from 'react-router';

import Logo from "../../../B12-A08-Hero-Apps/assets/logo.png"

const Header = () => {
    return (
        <div className="navbar bg-base-100   shadow-2xl">
  <NavLink to="/" className="navbar-start">
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <NavLink
         to="/"
      className={({ isActive }) =>
          isActive
            ? "text-black border-b-2 border-purple-500 px-3 py-2 rounded-md"
            : "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md"
        }
      >
        <li><a>Home</a></li>
      </NavLink>
       <NavLink
      to="/Applist"
      className={({ isActive }) =>
          isActive
            ? "text-black border-b-2 border-purple-500 px-3 py-2 rounded-md"
            : "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md"
        }
      >
        <li><a>Apps</a></li>
      </NavLink>
     <NavLink
      to="/InstallLIst"
      className={({ isActive }) =>
          isActive
            ? "text-black border-b-2 border-purple-500 px-3 py-2 rounded-md"
            : "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md"
        }
      >
        <li><a>Installation</a></li>
      </NavLink>
      </ul>
    </div>
    <img className='w-8.5' src={Logo} alt="" srcset="" />
    <a className="btn btn-ghost text-xl text-purple-500">HERO.IO</a>
  </div>
  </NavLink>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <NavLink
      className={({ isActive }) =>
          isActive
            ? "text-black border-b-2 border-purple-500 px-3 py-2 rounded-md"
            : "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md"
        }
      >
        <li><a>Home</a></li>
      </NavLink>
      <NavLink
      to="/Applist"
      className={({ isActive }) =>
          isActive
            ? "text-black border-b-2 border-purple-500 px-3 py-2 rounded-md"
            : "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md"
        }
      >
        <li><a>Apps</a></li>
      </NavLink>
      <NavLink
      to="/InstallLIst"
      className={({ isActive }) =>
          isActive
            ? "text-black border-b-2 border-purple-500 px-3 py-2 rounded-md"
            : "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md"
        }
      >
        <li><a>Installation</a></li>
      </NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to="https://github.com/ariyan6467">
        <a className="btn flex items-center gap-2 px-4 py-2 rounded-md text-white font-semibold 
bg-gradient-to-r from-[#6E72FC] to-[#AD1DEB] hover:opacity-90 transition ">Contribution</a>
    </NavLink>
  </div>
</div>
    );
};

export default Header;