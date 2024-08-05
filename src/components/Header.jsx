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
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-lightColor">
      <Typography
        as="li"
        variant="large"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center hover:text-white">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="large"
        className="p-1 font-normal"
      >
        <a href="#about" className="flex items-center hover:text-white">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="large"
        className="p-1 font-normal"
      >
        <a href="#works" className="flex items-center hover:text-white">
          Works
        </a>
      </Typography>
      <Typography
        as="li"
        variant="large"
        className="p-1 font-normal"
      >
        <a href="#services" className="flex items-center hover:text-white">
          Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="large"
        className="p-1 font-normal"
      >
        <a href="#contact" className="flex items-center hover:text-white">
          Contact
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
    </>
  )
}

export default Header