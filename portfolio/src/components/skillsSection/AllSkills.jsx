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
const AllSkills = () => {
  return (
    <div>
        <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
             <motion.div
                     key={item.skill}   // ✅ key goes HERE
                     variants={fadeIn('up' , `0.${index}`)}
                      initial = 'hidden'
                      whileInView='show'
                      viewport={{once: false, amount:0}}
             >
               <SingleSkill
               // key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
             </motion.div>
          
          );
        })}
      </div>
    </div>
  )
}

export default AllSkills
