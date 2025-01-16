import React from 'react';
import bgImage from '../assets/bg.png';
import wave1 from '../assets/wave.svg'
import wave2 from '../assets/wave2.svg'

import skillImg from '../assets/skill.png';
// import html from '../assets/html.jpg'
import { InfiniteMovingCardsDemo } from './InfiniteMovingCardsDemo';
import skilltopImg from '../assets/laptop.png'

const Skills = () => {



  return (
    <div className="overflow-x-hidden relative mb-30" id='skills'>
      <div className="11/12 bg-purple-600 mt-8 md:mt-20">
        <img src={wave1} alt="" className="w-screen absolute  cover-fit " />
        
        <img
          src={skilltopImg}
          alt=""
          className="absolute  md:visible w-[200px] md:w-[220px] right-0 bottom-[px]"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <div >
          <div className='  w-full flex items-center justify-center relative '>
            {/* Skill Image with Animation */}
            {/* <img
            src={skillImg}
            alt=""
            className='w-[120px] mt-[45px] skillImg' data-aos="fade-down"
          /> */}
            {/* Skills & Expertise Title */}
            <h2 className='sm:text-[1.5rem] text-[1.9rem] md:text-[2.5rem]  xl:text-[45px] text-white font-bold text-center mt-[100px] md:mt-[100px]'>
              Skills & <span className='text-black'>Expertise</span>
            </h2>
          </div>


          <InfiniteMovingCardsDemo />


        </div>
      </div>
      
    </div>
    
  );
};

export default Skills;
