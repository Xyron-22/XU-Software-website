import React, { useState } from "react";
import { servicesData } from "../data/services-data";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion } from "framer-motion"
import { FaCheck, FaArrowDown } from "react-icons/fa";

const ServicesSection = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <section className='w-full py-[5%] bg-light' id='services'>
    <div className='container mx-auto px-4'>
      <Typography variant='h2' className='mb-5'>Services.</Typography>
      <Typography variant='h4' color='white' className='w-full md:w-96 font-light mb-10'>We design and develop software technology that drives growth to your business.</Typography>
      <div className='w-full h-full flex flex-wrap gap-2 xl:gap-10 items-center justify-center mb-10'>
        {servicesData.map(({imageSource, alt, cardHeader, cardBody}, index) => {
          return (
            <motion.div
            key={index}
            variants={{
              hidden: {opacity: 0, y: 100},
              visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1,
              delay: 0.5
            }}
            >
            <Card className="mt-6 w-full md:w-96 h-[550px] rounded-none bg-medium relative overflow-hidden">
              <div className={`transition-all duration-1000 ${toggle === index + 1 && "-translate-y-[26.8rem]"}`}>
            <CardHeader color="blue-gray" className="relative h-[440px] rounded-none">
              <img
                className='object-cover object-bottom w-full h-full'
                src={imageSource}
                alt={alt}
              />
            </CardHeader>
            <CardBody className={`h-[493px] ${toggle === index + 1 && "overflow-auto scroll-smooth"}`}>
              <Typography variant="h5" className="mb-2 text-white">
                {cardHeader}
              </Typography>
              <Typography className='text-lightColor'>
                {cardBody}
              </Typography>
            </CardBody>
            </div>
            <CardFooter className="pt-2 absolute bottom-0 bg-medium w-full">
              {toggle === index + 1 ? 
              <FaArrowDown className='animate-bounce text-4xl hover:cursor-pointer p-2 rounded-full text-white bg-blue'  onClick={() => setToggle(!toggle)}></FaArrowDown>
              : 
              <Button className='bg-blue rounded-none' variant='gradient' onClick={() => setToggle(index + 1)}>READ MORE</Button>
              }
            </CardFooter>
          </Card>
          </motion.div>
          )
        })}
      </div>
      <div className='w-full'>
        <Typography variant='h3' color='white' className='font-semibold'>Let us turn your ideas into high quality innovation</Typography>
        <Typography variant='lead' className='font-light text-lightColor mb-10'>Provide us the details and we will get in touch with you to discuss the project.</Typography>               
        <div className='flex flex-col gap-5 break-words md:pl-10'>
        <Typography variant='lead' className='flex gap-5'>
          <FaCheck className='text-blue text-3xl min-w-10 mt-[.7]'></FaCheck>
            Intuitive design based on requirements.</Typography>
        <Typography variant='lead' className='flex gap-5'>
          <FaCheck className='text-blue text-3xl min-w-10 mt-[.7]'></FaCheck>
          Designed to be responsive and fit in any device.
        </Typography>
        <Typography variant='lead' className='flex gap-5'>
          <FaCheck className='text-blue text-3xl min-w-10 mt-[.7]'></FaCheck>
          Fast and precise progressive development.
        </Typography>
        <Typography variant='lead' className='flex gap-5'>
          <FaCheck className='text-blue text-3xl min-w-10 mt-[.7]'></FaCheck>
          Thorough testing.
        </Typography>
        <Typography variant='lead' className='flex gap-5'>
          <FaCheck className='text-blue text-3xl min-w-10 mt-[.7]'></FaCheck>
          Deployment.
        </Typography>
        <Typography variant='lead' className='flex gap-5'>
          <FaCheck className='text-blue text-3xl min-w-10 mt-[.7]'></FaCheck>
          Seamless result.
        </Typography>
        </div>
        <Typography variant='lead' className='font-light mt-10 break-words'>We prioritize quality over anything else. Looking forward working with you.</Typography> 
      </div>
      <div className='w-full mt-10'>
        <Typography variant='h2' className='mb-5'>Products.</Typography>
        <Typography variant='h4' color='white' className='w-full md:w-96 font-light mb-10'>Currently in progress...</Typography>
      </div>
    </div>
  </section>
  )
}

export default ServicesSection