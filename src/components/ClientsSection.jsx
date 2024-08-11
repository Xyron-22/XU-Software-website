import React from 'react'
import { Typography } from '@material-tailwind/react'
import westernBrothersLogo from "../assets/westernBrothersLogo.jpg"

const ClientsSection = () => {
  return (
    <section className='w-full py-5 bg-geoBackground bg-center bg-no-repeat bg-cover bg-blend-darken my-2'>
    <div className='container mx-auto px-4 mb-5'>
      <Typography variant='h4' className='mb-5 text-lightColor text-center'>We've Worked With.</Typography>
      <div className='w-full flex flex-wrap gap-4 justify-center'>
        <img src={westernBrothersLogo} alt='westernBrothersInc-logo' className='w-28 overflow-hidden rounded'></img>
      </div>
    </div>
  </section>
  )
}

export default ClientsSection