import React from 'react';
import {Link} from 'react-scroll';

const links = [
  {link: "About Me" , section:"about"},
  {link:"Skills" , section:"skills"},
//   {link:"Experience" , section:"experience"},
  {link:"Projects" , section:"projects"},
  {link:"Contact" , section:"contact"},
];

const NavbarLinks = () => {
  return (
    <ul className="flex flex-col lg:flex-row gap-6 text-white font-body text-md lg:relative absolute top-full left-1/2 transform -translate-x-1/2 lg:top-0 lg:left-0 lg:transform-none text-center bg-cyan/30 backdrop-blur-lg lg:bg-black w-full lg:w-auto py-4 lg:py-0">

       {links.map((link , index) =>(
         
            <li key={index} className='group'>
             <Link
              to={link.section} 
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className='cursor-pointer text-white hover:text-cyan transition-all duration-500'
              >
                {link.link}
              </Link>
             <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
           </li>

          ))}
    </ul>
  );
};

export default NavbarLinks
