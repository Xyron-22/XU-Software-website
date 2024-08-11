import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import { motion, useScroll } from 'framer-motion'
import { 
  Typography,
  Input,
  Button,
  Textarea,
  Alert
} from '@material-tailwind/react'
import { FaLinkedin, FaPhoneAlt, FaCheck } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareUpwork, FaXmark } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const ContactSection = () => {

  const form = useRef();

  const [toggleResult, setToggleResult] = useState(false)
  const [result, setResult] = useState(false)
  const [disableButtons, setDisableButtons] = useState(false)
  
  const handleEmailResult = (content) => {
    setToggleResult(true)
    setTimeout(() => {
      setResult(content)
      setToggleResult(false)
    }, 250)
    setTimeout(() => {
      setToggleResult(true)
    }, 2000)
    setTimeout(() => {
      setResult(false)
      setToggleResult(false)
    }, 2250)
  }

  const sendEmail = (e) => {
    e.preventDefault() //important. without this the page reloads and tampers with the processes inside this function
    setDisableButtons(true)
          emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
          .then((response) => {
            handleEmailResult(<>Email sent <FaCheck className='text-limeGreen text-2xl min-w-10 mt-1'></FaCheck></>)
          }, (err) => {
            handleEmailResult(<>Email not sent <FaXmark className='text-redBrick text-2xl min-w-10 mt-1'></FaXmark></>)
          });
      e.target.reset();
    setDisableButtons(false)
  };

  return (
    <section className='w-full py-[5%]' id='contact'>
          <div className='flex flex-col lg1:flex-row w-full m-auto shadow-xl container mx-auto px-4 overflow-hidden'>
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
                <form ref={form} onSubmit={sendEmail}>
                  <Typography variant='h4' color='blue-gray' className={`mb-5 flex gap-1 transition-all duration-300 ${toggleResult && "opacity-0"}`}>{result ? result : "Get in touch"}</Typography>
                  <Typography color='blue-gray'>Send an email without leaving this page using this form.</Typography>
                  <div className='my-2 w-[40%]'>
                    <Input type='text' name="user_name" label='Name' variant='standard' className='w-full' required></Input>
                  </div>
                  <div className='my-2 w-[40%]'>
                    <Input type='email' name="user_email" label='Email' variant='standard' className='w-full' required></Input>
                  </div>
                  <div className='my-2 w-[80%]'> 
                    <Input type='text' name="subject" label='Subject' variant='standard' className='w-full' required></Input>
                  </div>
                  <div className='my-2 w-[80%]'>
                    <Textarea name="message" label='Message' variant='standard' className='w-full h-32 resize-none text-black' required></Textarea>
                  </div>
                  <Button type='submit' variant='gradient' className='bg-blue mb-5 rounded-none flex items-center gap-2 pl-4' disabled={disableButtons}><IoIosSend className='text-xl'></IoIosSend>Send</Button>
               </form>
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
  )
}

export default ContactSection