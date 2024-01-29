import React, {useState} from 'react'
import { RiMenuFoldLine } from "react-icons/ri";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='min-h-[10vh] flex mx-[10%]'>
        <div className='w-[50%] my-auto'>
          <h1 className='text-xl md:text-[2.5rem] font-bold italic'>XU Software</h1>
        </div>
        <div className='md:hidden w-[50%] flex justify-end items-center'>
          <RiMenuFoldLine onClick={() => setToggleMenu(!toggleMenu)} className='text-2xl'/>
        </div>
        <div className={`w-[50%] my-auto hidden md:inline ${toggleMenu ? "inline" : "hidden"}`}>
          <ul className='w-full flex justify-end font-bold'>
            <li className='m-5 p-2 rounded'><a>About</a></li>
            <li className='m-5 p-2 rounded'><a>Projects</a></li>
            <li className='m-5 p-2 rounded'><a>Services</a></li>
            <li className='m-5 p-2 rounded'><a>Developers</a></li>
            <li className='m-5 bg-gradient-to-r hover:from-[#7d12ff] hover:to-[#ab20fd] p-2 rounded'><a>Contact</a></li>
          </ul>
        </div>
    </nav>
  )
}

export default Header