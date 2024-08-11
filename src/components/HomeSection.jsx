import React from 'react'
import { motion } from 'framer-motion'
import { Typography } from '@material-tailwind/react'

const HomeSection = () => {
  return (
    <section className="bg-headerBackground bg-cover bg-no-repeat bg-center w-full min-h-[92vh] flex items-center" id='home'>
    <motion.div 
      variants={{
        hidden: {opacity: 0, x: 100},
        visible: {opacity: 1, x: 0}
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 1,
        delay: 0.5
      }}
      className='leading-none flex flex-col flex-wrap break-all xs:break-normal container mx-auto px-4'>
      <Typography variant='lead'>We Provide</Typography>
      <Typography variant='h1' className='text-blue font-black'>SOFTWARE PRODUCTS</Typography>
      <Typography variant='lead'>And</Typography>
      <Typography variant='h1' className='text-blue font-black'>SERVICES.</Typography>
      <Typography className='md:w-[50%]'>Dedicated to driving innovation and excellence in the software industry. With a focus on quality, efficiency, and customer satisfaction, we deliver robust and scalable software products that empower our clients to achieve their goals.</Typography>
      <div className='font-bold text-xl sm:text-2xl mt-10'>
        <a href='#services' className='p-3 m-4 ml-0 mb-0 bg-white text-[#535bf2] text-base'>Get Started</a>
        <a href='#contact' className='p-3 m-4 ml-0 mb-0 bg-[#535bf2] text-white text-base'>Contact Us</a>
      </div>
    </motion.div>
  </section>
  )
}

export default HomeSection