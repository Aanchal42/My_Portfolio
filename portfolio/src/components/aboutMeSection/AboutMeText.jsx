import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col  md:items-start sm:items-center md:text-left sm:text-center'>
       <h1 className='text-6xl text-cyan mb-10'>About Me</h1>
       <p className='text-white'>I'm Aanchal Tiwari, a passionate full stack developer and a fresher with a strong interest in web development and problem-solving. I enjoy building responsive websites and also practice data structures and algorithms using Java. I'm a quick learner, always exploring new technologies and improving my skills through hands-on projects.</p>
       <button className='border border-orange rounded-full py-2 px-4 text-lg items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:sefl-start sm:self-center text-white hover:text-cyan'>My Projects</button>
    </div>
  )
};

export default AboutMeText;
