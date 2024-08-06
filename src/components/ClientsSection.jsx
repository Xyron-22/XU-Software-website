import React from 'react'
import { Typography } from '@material-tailwind/react'
import sampleLogo from "../assets/sample-logo.jpg"

const ClientsSection = () => {
  return (
    <section className='w-full py-5 bg-geoBackground bg-center bg-no-repeat bg-cover bg-blend-darken my-2'>
    <div className='container mx-auto px-4 mb-5'>
      <Typography variant='h4' className='mb-5 text-lightColor text-center'>We've Worked With.</Typography>
      <div className='w-full gap-2 flex flex-col items-center'>
        <img src={sampleLogo} alt='company-image' className='w-[40%] md:w-[10%] overflow-hidden'></img>
      </div>
    </div>
  </section>
  )
}

export default ClientsSection