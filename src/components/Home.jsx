import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import './Home.css';
import searchLogo from '../assets/images/searchLogo.png';
import { HomePageContent } from './HomePageContent';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { CgMenuGridO } from "react-icons/cg";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
      setMenuOpen(false); // Close the menu when resizing
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="home">
      <div className="py-2">
  <div className="flex flex-col items-center sm:flex-row sm:justify-between px-4 sm:px-10 pt-2">
    <div className="mb-2 sm:mb-0 inline-flex items-center">
      <div className="">
       <img className='ml-0 md:ml-14' src={logo} alt="Logo" />

      </div>
      <div className="hidden sm:block vl ml-2"></div>

    </div>
    <div className="flex flex-col sm:flex-row items-center">
      <div className="flex justify-end p-1 bg-slate-200 border rounded-md h-10 w-auto px-3 sm:mr-4 shadow-inner mb-2 sm:mb-0">
        <div className="flex items-center">
          <input
            type="text"
            id="search-bar"
            placeholder=""
            className="border-none bg-slate-200 focus:outline-none"
          />
          <img src={searchLogo} className="h-8 w-8 ml-2" alt="Search Icon" />
        </div>
      </div>
      <div>
        <button className="border rounded-3xl h-10 px-6 sm:px-10 bg-slate-200 shadow-inner text-[17px]">
          Register
        </button>
      </div>
    </div>
  </div>
</div>

      <div className="hor mx-4 sm:mx-[100px]"></div>
      {isSmallScreen && (
        <>
          <div className='flex justify-center mt-3 '>
        <button className="flex-none font-bold text-xl text-center" onClick={handleMenuToggle}>
           <CgMenuGridO className='text-3xl' />
            </button>
            </div>
        <div className="flex flex-col mx-[100px] mt-4">
          
          {menuOpen && (
            <div className="flex flex-col mb-5">
              <button className="flex-auto ml-4 mt-2 font-bold text-xl">Home</button>
              <button className="flex-auto ml-4 mt-2 font-bold text-xl">About Us</button>
              <button className="flex-auto ml-4 mt-2 font-bold text-xl">Blogs</button>
              <button className="flex-auto ml-4 mt-2 font-bold text-xl">Gallery</button>
              <button className="flex-auto ml-4 mt-2 font-bold text-xl">What we do</button>
              <button className="flex-auto ml-4 mt-2 font-bold text-xl">Contact Us</button>
              <button className="border rounded-3xl h-10 px-6 sm:px-10 mt-2 bg-slate-200 shadow-inner text-[17px]">
                Login
              </button>
            </div>
          )}
          </div>
          </>
      )}
      {!isSmallScreen && (
        <div className="flex mx-[100px] mt-4">
          <button className="flex-none font-bold text-xl">Home</button>
          <button className="flex-auto ml-4 font-bold text-xl">About Us</button>
          <button className="flex-auto font-bold text-xl">Blogs</button>
          <button className="flex-auto font-bold text-xl">Gallery</button>
          <button className="flex-auto font-bold text-xl">What we do</button>
          <button className="flex-auto font-bold text-xl">Contact Us</button>
          <div>
            <button className="border rounded-3xl h-10 px-12 mt-2 bg-slate-200 shadow-inner text-[17px]">
              Login
            </button>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center">
        <div>
          <IoIosArrowBack className="text-3xl" />
        </div>
        <div className="px-4 sm:px-[180px]">
          <HomePageContent />
        </div>
        <div>
          <IoIosArrowForward className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Home;
