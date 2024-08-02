import { useState } from 'react'
import viteLogo from '/vite.svg'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
  Textarea,
  IconButton,
} from "@material-tailwind/react";
// import './App.css'
import sampleLogo from "./assets/sample-logo.jpg"
import profilePicture from "./assets/profile.jpg"
import {servicesData} from "./data/services-data"
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function App() {

  return (
    <>
      <div className='text-white flex flex-col items-center min-h-[80vh]'>
        <section className="bg-headerBackground bg-cover bg-no-repeat bg-center w-full min-h-[90vh] flex items-center">
          <div className='leading-none flex flex-col flex-wrap break-all xs:break-normal container mx-auto px-4'>
            <Typography variant='lead'>We Provide</Typography>
            <Typography variant='h1' className='text-blue font-black'>SOFTWARE PRODUCTS</Typography>
            <Typography variant='lead'>And</Typography>
            <Typography variant='h1' className='text-blue font-black'>SERVICES.</Typography>
            <Typography className='md:w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nostrum velit autem amet quasi molestiae, esse similique odio magni natus minima praesentium modi, dolore ullam voluptatem veritatis maxime repudiandae suscipit.</Typography>
            <div className='font-bold text-xl sm:text-2xl'>
              <Button className='rounded p-4 m-4 ml-0 mb-0 bg-white text-[#535bf2]'>Get Started</Button>
              <Button className='rounded p-4 m-4 ml-0 mb-0 bg-[#535bf2] text-white'>Contact Us</Button>
            </div>
          </div>
        </section>
        <section className='w-full py-[5%] bg-gray bg-gradient-to-b from-black gap-2' id='about'>
          <div className='container mx-auto px-4 flex flex-col lg:flex-row justify-between gap-10'>
            <div className='border border-lightGray p-2 w-fit mx-auto lg:mx-0'>
              <img alt='this is an image sample' src={sampleLogo} height={400} width={400} className='overflow-hidden'></img>
            </div>
            <div className='flex flex-row lg:flex-col gap-2 text-lightGray'>
              <div className='p-1 border border-lightGray text-5xl hover:text-white'> 
                  <FaLinkedin className='hover:scale-110'></FaLinkedin>
              </div>
              <div className='p-1 border border-lightGray text-5xl'> 
                <FaGithub></FaGithub>
              </div>
              <div className='p-1 border border-lightGray text-5xl'> 
                <SiGmail></SiGmail>
              </div>
              <div className='p-1 border border-lightGray text-5xl'> 
                <FaFacebook></FaFacebook>
              </div>
            </div>
            <div className='lg:w-[50%]'>
              <Typography variant='h2' className='mb-10'>About Me.</Typography>
              <Typography variant='lead' className='text-lightColor mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maiores corrupti quae qui sunt sapiente rerum maxime, voluptas, odio optio reiciendis eveniet blanditiis fuga pariatur temporibus! Eum reprehenderit harum minima.</Typography>
            </div>
          </div>
        </section>
        <section className='w-full py-[2.5%] md:px-[10%] bg-geoBackground bg-center bg-no-repeat bg-cover bg-blend-darken'>
          <div className='w-full gap-2 flex flex-col items-center container mx-auto px-4'>
            <img src={sampleLogo} alt='company-image' className='w-[40%] md:w-[10%] rounded-full overflow-hidden'></img>
          </div>
        </section>
        {/* <section className='w-full bg-medium py-[5%] text-white flex flex-col justify-center items-center'>
          <h1 className='text-center text-2xl md:text-4xl font-bold'>Products</h1>
          <p className='text-xl'>Coming soon...</p>
        </section> */}
        <section className='w-full py-[5%] bg-light'>
          {/* <h1 className='text-center text-2xl md:text-4xl font-bold text-white'></h1> */}
          <div className='container mx-auto px-4'>
            <Typography variant='h4' color='white' className='w-full md:w-96 font-light mb-10'>We design and develop software technology that drives growth to your business.</Typography>
            <div className='w-full h-full flex flex-wrap gap-2 xl:gap-10 items-center justify-center mb-10'>
              {servicesData.map(({imageSource, alt, cardHeader, cardBody}, index) => {
                return (
                  <Card key={index} className="mt-6 w-full sm:w-full md:w-96">
                  <CardHeader color="blue-gray" className="relative h-80">
                    <img
                      className='object-cover object-bottom w-full h-full'
                      src={imageSource}
                      alt={alt}
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {cardHeader}
                    </Typography>
                    <Typography color='blue-gray'>
                      {cardBody}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button className='bg-blue' variant='gradient'>Read More</Button>
                  </CardFooter>
                </Card>
                )
              })}
            </div>
            <div className='w-full'>
              <Typography variant='h3' color='white' className='font-semibold'>Let us turn your ideas into high quality innovation</Typography>
              <Typography variant='lead' className='font-light text-lightColor'>Provide us the details and we will get in touch with you to discuss the project.</Typography>
            </div>
          </div>
        </section>
        {/* <section className='w-full h-[86vh] py-[5%] bg-lightGray'>
          <h1 className='text-center text-2xl md:text-4xl font-bold text-white'>Developers</h1>
        </section> */}
        <section className='w-full py-[5%] px-[10%]'>
          {/* <h1 className='text-center text-2xl md:text-4xl font-bold text-lightGray'></h1> */}
          <div className='flex flex-col lg1:flex-row w-full m-auto shadow-xl container mx-auto px-4'>
              <div className='w-full lg1:w-[60%] py-7 text-black'>
                  <Typography variant='h4' color='blue-gray' className='mb-10'>Get in touch</Typography>
                  <div className='my-2 w-[40%]'>
                    <Input type='text' label='Name' variant='standard' className='w-full'></Input>
                  </div>
                  <div className='my-2 w-[40%]'>
                    <Input type='text' label='Email' variant='standard'  className='w-full'></Input>
                  </div>
                  <div className='my-2 w-[80%]'> 
                    <Input type='text' label='Subject' variant='standard' className='w-full'></Input>
                  </div>
                  <div className='my-2 w-[80%]'>
                    <Textarea label='Message' variant='standard' className='w-full h-32 resize-none'></Textarea>
                  </div>
                  <Button variant='gradient' className='bg-blue mb-5'>Submit</Button>
              </div>
              <div className='w-full lg1:w-[40%] py-7 px-5 rounded bg-blue'>
                <Typography variant='h4' className='text-white'>Contact us</Typography>
              </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
