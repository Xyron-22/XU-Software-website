import React, {useState} from 'react'
import { RiMenuFoldLine } from "react-icons/ri";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
    <nav className='min-h-[10vh] flex justify-evenly mx-auto bg-black sticky top-0'>
        <div className='w-[40%] my-auto text-center xl:text-start'>
          <h1 className='text-2xl md:text-[2.5rem] font-bold italic text-white'>XU Software</h1>
        </div>
        <div className='lg:hidden w-[40%] flex justify-end items-center'>
          <RiMenuFoldLine onClick={() => setToggleMenu(!toggleMenu)} className='text-4xl md:text-5xl text-white'/>
        </div>
        <div className={`w-full lg:w-auto my-auto lg:inline left-0 top-[10vh] lg:top-0 absolute lg:relative ${toggleMenu ? "inline bg-black bg-opacity-50 backdrop-blur-sm" : "hidden"}`}>
          <ul className={`flex lg:justify-end lg:flex-row font-bold text-white text-xl cursor-pointer flex-col`}>
            <li className='m-3 p-1 rounded lg:hover:scale-110 hover:text-[#535bf2]'><a href='#about'>About</a></li>
            <li className='m-3 p-1 rounded lg:hover:scale-110 hover:text-[#535bf2]'><a>Projects</a></li>
            <li className='m-3 p-1 rounded lg:hover:scale-110 hover:text-[#535bf2]'><a>Products</a></li>
            <li className='m-3 p-1 rounded lg:hover:scale-110 hover:text-[#535bf2]'><a>Services</a></li>
            <li className='m-3 p-1 rounded lg:hover:scale-110 hover:text-[#535bf2]'><a>Developers</a></li>
            <li className='m-3 p-1 rounded lg:hover:scale-110 hover:text-[#535bf2]'><a>Contact</a></li>
          </ul>
        </div>
    </nav>
    </>
  )
}

export default Header