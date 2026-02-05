import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return <div className='flex flex-col gap-4 text-white'>
      <SingleInfo text="anchaltiwari042@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 90604 73999" Image={FiPhone} />
      <SingleInfo text="Noida , Uttar Pradesh" Image={IoLocationOutline} />
    </div>
  
}

export default ContactInfo
