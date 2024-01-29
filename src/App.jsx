import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  return (
    <>
      <div className='text-white flex flex-col items-center min-h-[80vh]'>
        <section className="bg-headerBackground bg-cover bg-no-repeat bg-center w-full min-h-[90vh] flex items-center p-4">
          <div className='leading-none md:ml-[10%] flex flex-col flex-wrap break-all xs:break-normal'>
            <p className='text-2xl font-bold'>We Provide</p>
            <h1 className='text-[400%] font-black text-[#535bf2] tracking-tighter'>SOFTWARE PRODUCTS</h1>
            <p className='text-2xl font-bold'>And</p>
            <h1 className='text-[400%] font-black text-[#535bf2] tracking-tighter'>SERVICES.</h1>
            <p className='md:w-[50%] font-semibold leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nostrum velit autem amet quasi molestiae, esse similique odio magni natus minima praesentium modi, dolore ullam voluptatem veritatis maxime repudiandae suscipit.</p>
            <div className='font-bold text-2xl'>
              <button className='rounded p-4 m-4 ml-0 mb-0 bg-white text-[#535bf2]'>Get Started</button>
              <button className='rounded p-4 m-4 ml-0 mb-0 bg-[#535bf2] text-white'>Contact Us</button>
            </div>
          </div>
        </section>
        <section className='w-full h-[86vh] bg-[#222b3c]'>

        </section>
        {/* <section className='w-full h-[86vh] bg-[#222b3c]'>

        </section> */}
      </div>
    </>
  )
}

export default App
