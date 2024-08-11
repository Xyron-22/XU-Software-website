import React from 'react'
import { motion } from 'framer-motion'
import { Typography } from '@material-tailwind/react'
import portfolioProfile from "../assets/portfolio-profile.jpeg"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareUpwork } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section className='w-full py-[5%] bg-gray bg-gradient-to-b from-black gap-2' id='about'>
    <div className='container mx-auto px-4 flex flex-col lg:flex-row justify-between gap-10 overflow-hidden'>
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
        <img alt='Profile picture' src={portfolioProfile} height={400} width={400} className='overflow-hidden'></img>
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
  )
}

export default AboutSection