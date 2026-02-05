import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";


const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link="https://www.linkedin.com/in/tiwariaanchal/" Icon={FaLinkedinIn} />
        <SingleContactSocial link="https://github.com/Aanchal42" Icon={FiGithub} />
      
    </div>
  )
}

export default ContactSocial
