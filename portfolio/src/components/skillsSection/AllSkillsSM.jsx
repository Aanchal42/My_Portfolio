import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import SingleSkill from './SingleSkill';
import {motion} from 'framer-motion';
import { fadeIn } from '../framerMotion/variants';

const skills = [
    {
     skill : 'HTML',
     icon:FaHtml5
    },
    {
        skill : 'CSS',
        icon: FaCss3Alt
       },
    {
        skill : 'Javascript',
        icon: IoLogoJavascript
    },
    {
        skill : 'ReactJS',
        icon: RiReactjsFill
     }, 
     {
        skill : 'TailwindCSS',
        icon: RiTailwindCssFill
       },
       {
        skill : 'NodeJS',
        icon: FaNodeJs
       },
       {
        skill : 'Express',
        icon: SiExpress
       },
       {
        skill : 'Mongodb',
        icon: BiLogoMongodb
       },
       {
        skill : 'Git',
        icon: FaGithub
       },
       {
        skill : 'Java',
        icon: FaJava
       },
]
const AllSkillsSM = () => {
  return <div className='grid md:grid-cols-5 sm:grid-cols-2 gap-12 my-12'>
      {skills.map((item , index) =>{
        return <motion.div 
        variants={fadeIn('up' ,0.2)}
        initial = 'hidden'
        whileInView='show'
        viewport={{once: false, amount:0.7}}
        key={index} className='flex flex-col items-center'>
           <item.icon className='text-7xl text-orange'/>
           <p className='text-center mt-4 text-white'>{item.skill}</p>
        </motion.div>
      })}
    </div>
};

export default AllSkillsSM
