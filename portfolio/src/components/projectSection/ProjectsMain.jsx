import React from 'react'
import Projectstext from './Projectstext'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion';
import { fadeIn } from '../framerMotion/variants';

const projects = [{
     name: 'Book Management',
     year:'Mar2025',
     align:'right',
     image:'../../images/bookstore.png',
     link:'#',
},
{
     name: 'Food Recipe App',
     year:'May2025',
     align:'left',
     image:'../../images/FoodRecipe.png',
      link:'#',
},
{
    name: 'BrainWave',
    year:'Mar2025',
    align:'right',
    image:'../../images/BrainWave.png',
     link:'https://brainwave-gules-seven.vercel.app/',
},
{
    name: 'Sundown',
    year:'Mar2024',
    align:'left',
    image:'../../images/Sundown.png',
     link:'https://sundown-umber.vercel.app/',
},
{
    name: 'Product Explorer',
    year:'Nov2025',
    align:'right',
    image:'../../images/productExplorer.png',
    link:'https://product-explorer-one.vercel.app',
},
{
    name:'DSA BOT',
    year:'JAn2026',
    align:'left',
    image:'../../images/Coding Instructor AI.png',
    link:'https://dsa-bot-kappa.vercel.app/',
},
]

const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
       <motion.div
       variants={fadeIn('up' , 0.2)}
               initial = 'hidden'
               whileInView='show'
               viewport={{once: false, amount:0}}
       >
        <Projectstext/></motion.div>
       <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
         {projects.map((item , index) => {
             return <SingleProject 
             key={index} 
             name={item.name} 
             year={item.year} 
             align={item.align} 
             image={item.image}
             link={item.link} 
             />
         })}
       </div>
    </div>
  )
}

export default ProjectsMain
