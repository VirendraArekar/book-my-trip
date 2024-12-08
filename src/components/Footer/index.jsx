import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import './style.css'

export default function index() {
  return (
    <div className='d-flex justify-content-between align-items-center p-5 footer'>
      <div className='d-inline-block'>
         <FaInstagram size={50} className='mx-3 text-light'/>
         <RiTwitterXLine size={50} className='mx-3 text-light' />
         <FaLinkedin size={50} className='mx-3 text-light'/>
         <FaFacebookF size={50} className='mx-3 text-light'/>
      </div>
      <div className='d-inline-block text-light text-end'>
        <div className='footer-title'>© 2024 MAKEMYTRIP PVT. LTD.</div>
        <div className='footer-dsc'>Country India USA UAE</div>
      </div>
    </div>
  )
}
