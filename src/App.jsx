import React from 'react'
import ContactSection from './components/ContactSection';
import ServicesSection from './components/ServicesSection';
import ClientsSection from './components/ClientsSection';
import AboutSection from './components/AboutSection';
import HomeSection from './components/HomeSection';
import { motion, useScroll, useSpring } from "framer-motion"


function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress)

  return (
    <>
    <motion.div className='fixed top-19 left-0 right-0 h-1 bg-blue origin-left z-10' style={{ scaleX }}/>
    <motion.div 
          variants={{
            hidden: { opacity: 0},
            visible: { opacity: 1}
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
        <HomeSection></HomeSection>
        <AboutSection></AboutSection>
        <ClientsSection></ClientsSection>
        <ServicesSection></ServicesSection>
        <ContactSection></ContactSection>
      </div>
      </motion.div>
    </>
  )
}

export default App
