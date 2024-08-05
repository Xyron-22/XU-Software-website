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
import { motion, useScroll, useSpring } from "framer-motion"
import sampleLogo from "./assets/sample-logo.jpg"
import profilePicture from "./assets/profile.jpg"
import {servicesData} from "./data/services-data"
import {contactData} from "./data/contact-data"
import { FaLinkedin, FaGithub, FaFacebook, FaCheck, FaPhoneAlt, FaArrowDown } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareUpwork } from "react-icons/fa6";


function App() {

  const [toggle, setToggle] = useState(false)

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress)

  return (
    <>
    <motion.div className='fixed top-19 left-0 right-0 h-1 bg-blue origin-left z-10' style={{ scaleX }}/>
    <motion.div 
          variants={{
            hidden: { opacity: 0, y: 0},
            visible: { opacity: 1, y: 0}
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.2,
            delay: 0.1
          }}
          className='w-full'
        >
      <div className='text-white flex flex-col items-center min-h-[80vh]'>
        <section className="bg-headerBackground bg-cover bg-no-repeat bg-center w-full min-h-[90vh] flex items-center" id='home'>
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
        <section className='w-full py-[5%] bg-gray bg-gradient-to-b from-black gap-2' id='about'>
          <div className='container mx-auto px-4 flex flex-col lg:flex-row justify-between gap-10'>
            <motion.div
              variants={{
                hidden: {opacity: 0, x: -100},
                visible: {opacity: 1, x: 0}
              }}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 1,
                delay: 0.5
              }}
             className='border border-lightGray p-2 w-fit mx-auto lg:mx-0'>
              <img alt='this is an image sample' src={sampleLogo} height={400} width={400} className='overflow-hidden'></img>
            </motion.div>
            <motion.div
               variants={{
                hidden: {opacity: 0, x: 0},
                visible: {opacity: 1, x: 0}
              }}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 1,
                delay: 0.5
              }}
             className='flex flex-row lg:flex-col gap-2 text-lightGray'>
              <div className='p-1 border border-lightGray text-5xl hover:text-white'> 
                  <a href='https://github.com/Xyron-22' target='_blank'><FaGithub className='hover:scale-110 hover:cursor-pointer'></FaGithub></a>
              </div>
              <div className='p-1 border border-lightGray text-5xl hover:text-white'> 
                  <a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsTPLdWXZDrvSCqBlMHqgTwfcwKDSPQtmpsdjFdBrrFCrRhSKHXTrmkFpgqLdnkRLqBSsmfG' target='_blank'><SiGmail className='hover:scale-110 hover:cursor-pointer'></SiGmail></a>
              </div>
              <div className='p-1 border border-lightGray text-5xl hover:text-white'> 
                  <a href='https://www.linkedin.com/in/xyron-uy-b5a915213/' target='_blank'><FaLinkedin className='hover:scale-110 hover:cursor-pointer'></FaLinkedin></a>
              </div>
              <div className='p-1 border border-lightGray text-5xl hover:text-white'> 
                  <a href='https://www.upwork.com/freelancers/~0166e6120ac6cdb97d' target='_blank'><FaSquareUpwork className='hover:scale-110 hover:cursor-pointer'></FaSquareUpwork></a>
              </div>
            </motion.div>
            <motion.div 
              variants={{
                hidden: {opacity: 0, x: 100},
                visible: {opacity: 1, x: 0}
              }}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 1,
                delay: 0.5
              }}
            className='lg:w-[50%]'>
              <Typography variant='h2' className='mb-10'>About Me.</Typography>
              <Typography variant='lead' className='text-lightColor mb-5'>Hi I am Xyron Uy a Fullstack Developer.</Typography>
              <Typography id='works'>Graduate of Bachelor of Science in Mechanical Engineering. I am a fullstack developer with expertise in Javascript, How I got into programming was I am looking for a skill where I can apply my analytical, logical, and problem solving abilities, while surfing the internet I found software development, Tried doing it, got hooked to it, and fell in love doing it since. Now I am looking for ways to connect my skill to other people so I can bring them value that benefits them.</Typography>
            </motion.div>
          </div>
        </section>
        <section className='w-full py-5 bg-geoBackground bg-center bg-no-repeat bg-cover bg-blend-darken my-2'>
          <div className='container mx-auto px-4 mb-5'>
            <Typography variant='h4' className='mb-5 text-lightColor text-center'>We've Worked With.</Typography>
            <div className='w-full gap-2 flex flex-col items-center'>
              <img src={sampleLogo} alt='company-image' className='w-[40%] md:w-[10%] overflow-hidden'></img>
            </div>
          </div>
        </section>
        <section className='w-full py-[5%] bg-light' id='services'>
          <div className='container mx-auto px-4'>
            <Typography variant='h2' className='mb-5'>Services.</Typography>
            <Typography variant='h4' color='white' className='w-full md:w-96 font-light mb-10'>We design and develop software technology that drives growth to your business.</Typography>
            <div className='w-full h-full flex flex-wrap gap-2 xl:gap-10 items-center justify-center mb-10'>
              {servicesData.map(({imageSource, alt, cardHeader, cardBody}, index) => {
                return (
                  <motion.div
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
                  <Card key={index} className="mt-6 w-full md:w-96 h-[550px] rounded-none bg-medium relative overflow-hidden">
                    <div className={`transition-all duration-1000 ${toggle === index + 1 && "-translate-y-[19.2rem]"}`}>
                  <CardHeader color="blue-gray" className="relative h-80 rounded-none">
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
        <section className='w-full py-[5%]' id='contact'>
          <div className='flex flex-col lg1:flex-row w-full m-auto shadow-xl container mx-auto px-4'>
              <motion.div 
              variants={{
                hidden: {opacity: 0, x: -100},
                visible: {opacity: 1, x: 0}
              }}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 1,
                delay: 0.5
              }}
              className='w-full lg1:w-[60%] py-7 text-black'>
                  <Typography variant='h4' color='blue-gray' className='mb-5'>Get in touch</Typography>
                  <Typography color='blue-gray'>Send an email without leaving this page using this form.</Typography>
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
                  <Button variant='gradient' className='bg-blue mb-5 rounded-none'>Submit</Button>
              </motion.div>
              <motion.div 
               variants={{
                 hidden: {opacity: 0, x: 100},
                 visible: {opacity: 1, x: 0}
               }}
               initial="hidden"
               whileInView="visible"
               transition={{
                 duration: 1,
                 delay: 0.5
               }}
              className='w-full lg1:w-[40%] py-7 px-5 rounded bg-blue break-all'>
                <Typography variant='h4' className='text-white mb-2'>Contact us</Typography>
                <Typography variant='lead' className='font-light mb-5'>Keep connected to us!</Typography>
                <div className='flex flex-col gap-5 my-2'>
                  <Typography as="a" href='tel:+639945266314' target='_self' className='flex flex-row gap-2'><FaPhoneAlt className='text-lg min-w-10 mt-1'></FaPhoneAlt>Phone: +63 994 526 6314</Typography>
                  <Typography as="a" href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsTPLdWXZDrvSCqBlMHqgTwfcwKDSPQtmpsdjFdBrrFCrRhSKHXTrmkFpgqLdnkRLqBSsmfG' target='_blank' className='flex flex-row gap-2'><SiGmail className='text-lg min-w-10 mt-1'></SiGmail>Email: xyronuysoftware@gmail.com</Typography>
                  <Typography as="a" href='https://www.linkedin.com/in/xyron-uy-b5a915213/' target='_blank' className='flex flex-row gap-2'><FaLinkedin className='text-lg min-w-10 mt-1'></FaLinkedin>LinkedIn: Xyron Uy</Typography>
                  <Typography as="a" href='https://www.upwork.com/freelancers/~0166e6120ac6cdb97d' target='_blank' className='flex flex-row gap-2'><FaSquareUpwork className='text-lg min-w-10 mt-1'></FaSquareUpwork>UpWork: Xyron U.</Typography>
                </div>
              </motion.div>
          </div>
        </section>
      </div>
      </motion.div>
    </>
  )
}

export default App
