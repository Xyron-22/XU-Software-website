import React from 'react'

const Header = () => {
  return (
    <nav className='h-[10vh] flex mx-[10%]'>
        <div className='w-[50%] my-auto'>
          <h1 className='text-[2.5rem] font-bold italic text-white'>XU Software</h1>
        </div>
        <div className='w-[50%] my-auto'>
          <ul className='w-full flex justify-end font-bold'>
            <li className='m-5'><a>About</a></li>
            <li className='m-5'><a>Projects</a></li>
            <li className='m-5'><a>Services</a></li>
            <li className='m-5'><a>Developers</a></li>
            <li className='m-5'><a>Contact</a></li>
          </ul>
        </div>
    </nav>
  )
}

export default Header