import React from 'react'
import { Typography } from "@material-tailwind/react";
import { contactData } from '../data/contact-data';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareUpwork } from "react-icons/fa6";
 
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
      <footer className="relative w-full bg-geoBackground text-white py-6">
    <div className="mx-auto w-full max-w-7xl px-8">
      <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
        <Typography variant="h4" className='text-white mb-6'>
          XU Software
        </Typography>
        <div className="grid grid-cols-3 justify-between gap-4">
          {contactData.map(({ title, items }) => (
            <ul key={title}>
              <Typography
                variant="paragraph"
                color='white'
                className="mb-3 font-bold"
              >
                {title}
              </Typography>
              {items.map(({item, link, target}) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href={link}
                    target={target ? target : "_blank"}
                    color="gray"
                    className="py-1.5 font-normal transition-colors hover:text-lightColor"
                  >
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
        <Typography
          variant="small"
          className="mb-4 text-center font-normal md:mb-0"
        >
          &copy; {currentYear} <a href="/">XU Software</a>. All
          Rights Reserved.
        </Typography>
        <div className="flex gap-4 text-lightColor sm:justify-center">
          <Typography as="a" href="https://github.com/Xyron-22" target='_blank' className="opacity-60 transition-opacity hover:opacity-100">
            <FaGithub className='text-3xl'></FaGithub>
          </Typography>
          <Typography as="a" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsTPLdWXZDrvSCqBlMHqgTwfcwKDSPQtmpsdjFdBrrFCrRhSKHXTrmkFpgqLdnkRLqBSsmfG" target='_blank' className="opacity-60 transition-opacity hover:opacity-100">
            <SiGmail className='text-3xl'></SiGmail>
          </Typography>
          <Typography as="a" href="https://www.linkedin.com/in/xyron-uy-b5a915213/" target='_blank' className="opacity-60 transition-opacity hover:opacity-100">
            <FaLinkedin className='text-3xl'></FaLinkedin>
          </Typography>
          <Typography as="a" href="https://www.upwork.com/freelancers/~0166e6120ac6cdb97d" target='_blank' className="opacity-60 transition-opacity hover:opacity-100">
            <FaSquareUpwork className='text-3xl'></FaSquareUpwork>
          </Typography>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer