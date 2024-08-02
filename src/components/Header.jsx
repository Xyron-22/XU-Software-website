import React, {useState} from 'react'
import { RiMenuFoldLine } from "react-icons/ri";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";




const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 lg:py-4 bg-black bg-opacity-100 border-none">
        <div className='container mx-auto'>
        <div className="flex items-center justify-between text-white">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
            variant='h4'
          >
            XU Software
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
        </div>
      
      </Navbar>
    {/* <nav className='min-h-[10vh]'>
      <div className='h-full container mx-auto flex justify-evenly bg-black sticky top-0 z-50'>
      <div className='w-[40%] my-auto text-center xl:text-start'>
          <h1 className='text-2xl md:text-[2.5rem] font-bold italic text-lightColor'>XU Software</h1>
        </div>
        <div className='lg:hidden w-[40%] flex justify-end items-center'>
          <RiMenuFoldLine onClick={() => setToggleMenu(!toggleMenu)} className='text-4xl md:text-5xl text-white'/>
        </div>
        <div className={`w-full lg:w-auto my-auto lg:inline left-0 top-[10vh] lg:top-0 absolute lg:relative ${toggleMenu ? "inline bg-black bg-opacity-50 backdrop-blur-sm" : "hidden"}`}>
          <ul className={`flex lg:justify-end lg:flex-row font-bold text-white text-xl cursor-pointer flex-col`} onClick={() => setToggleMenu(!toggleMenu)}>
            <li className='m-3 p-1 rounded lg:hover:scale-110 hover:text-[#535bf2]'><a href='#about'>About</a></li>
            <li className='m-3 p-1 rounded lg:hover:scale-110 hover:text-[#535bf2]'><a>Projects</a></li>
            <li className='m-3 p-1 rounded lg:hover:scale-110 hover:text-[#535bf2]'><a>Products</a></li>
            <li className='m-3 p-1 rounded lg:hover:scale-110 hover:text-[#535bf2]'><a>Services</a></li>
            <li className='m-3 p-1 rounded lg:hover:scale-110 hover:text-[#535bf2]'><a>Developers</a></li>
            <li className='m-3 p-1 rounded lg:hover:scale-110 hover:text-[#535bf2]'><a>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav> */}
    </>
  )
}

export default Header