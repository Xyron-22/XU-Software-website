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
            <p className='text-xl sm:text-2xl font-bold'>We Provide</p>
            <h1 className='text-[300%] sm:text-[400%] font-black text-[#535bf2] tracking-tighter'>SOFTWARE PRODUCTS</h1>
            <p className='text-xl sm:text-2xl font-bold'>And</p>
            <h1 className='text-[300%] sm:text-[400%] font-black text-[#535bf2] tracking-tighter'>SERVICES.</h1>
            <p className='md:w-[50%] font-semibold leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nostrum velit autem amet quasi molestiae, esse similique odio magni natus minima praesentium modi, dolore ullam voluptatem veritatis maxime repudiandae suscipit.</p>
            <div className='font-bold text-xl sm:text-2xl'>
              <button className='rounded p-4 m-4 ml-0 mb-0 bg-white text-[#535bf2]'>Get Started</button>
              <button className='rounded p-4 m-4 ml-0 mb-0 bg-[#535bf2] text-white'>Contact Us</button>
            </div>
          </div>
        </section>
        <section className='w-full min-h-[50vh] bg-[#222b3c] flex flex-col items-center p-4'>
          <h1 className='text-center m-4 mt-10 text-2xl md:text-4xl font-bold' id='about'>About Us</h1>
          <p className='text-center lg:w-[70%] font-semibold'>We are a team of developers that offer software solutions, Founded in 2023. In XU Software Solutions we provide software design, development, and deployment, fully customized to tailor the needs and requirements of our clients, users, and partners. We create Software solutions for businesses and other industry. Our products and services are built from scratch with various latest techonologies chosen to best suit the requirements so we can give seamless software experience to our customers.</p>
          <h1 className='text-center m-4 mt-10 text-2xl md:text-4xl font-bold'>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea eligendi cumque, animi tempora cum provident temporibus iusto fuga molestias, accusamus eum, in impedit. Rerum fugiat necessitatibus quisquam assumenda possimus?</p>
          <h1 className='text-center m-4 mt-10 text-2xl md:text-4xl font-bold'>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea eligendi cumque, animi tempora cum provident temporibus iusto fuga molestias, accusamus eum, in impedit. Rerum fugiat necessitatibus quisquam assumenda possimus?</p>
        </section>
        <section className='w-full h-[86vh] bg-white'>
          <h1 className='text-center m-4 mt-10 text-2xl md:text-4xl font-bold text-blue' id='about'>Projects</h1>
        </section>
        <section className='w-full h-[86vh] bg-black'>
          <h1 className='text-center m-4 mt-10 text-2xl md:text-4xl font-bold text-blue' id='about'>Products</h1>
        </section>
        <section className='w-full h-[86vh] bg-blue'>
          <h1 className='text-center m-4 mt-10 text-2xl md:text-4xl font-bold text-white' id='about'>Services</h1>
        </section>
        <section className='w-full h-[86vh] bg-white'>
          <h1 className='text-center m-4 mt-10 text-2xl md:text-4xl font-bold text-black' id='about'>Developers</h1>
        </section>
      </div>
    </>
  )
}

export default App
