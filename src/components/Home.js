import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Img from '../assets/HomeImg.webp';

import Resume from '../assets/ResNeha.pdf'; // Update with the correct path to your resume file

const Home = () => {
  // Function to handle resume download
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = Resume; // Path to your resume
    link.download = 'Neha_Yadav_Resume.pdf'; // Desired file name for download
    link.click();
  };

  return (
    <div id='home' className=' w-full md:w-11/12 mx-auto mt-32 md:mt-24 px-4 items-center md:px-14 mt-7 flex flex-col md:flex-row'>
      {/* Left Section: Text */}
      <div className='text-center md:text-left mt-[10rem] md:mt-[5rem]'>
        <h1 className='text-4xl sm:text-5xl md:text-4xl font-bold'>
          Hello
        </h1>

        <h2 className='text-5xl sm:text-4xl md:text-5xl font-bold'>
          I am{' '}
          <span className='text-purple-600'>
            <Typewriter
              words={['Neha Yadav', 'Coder...', 'Frontend Developer']}
              loop={0} // Number of times to loop; set to 0 for infinite
              cursor
              cursorStyle="|"
              typeSpeed={90} // Typing speed
              deleteSpeed={90} // Deletion speed
              delaySpeed={1000} // Delay before starting next word
            />
          </span>
        </h2>

        <h3 className='text-gray-400 mt-4 text-sm md:text-base'>
    Student at jabalpur Engineering College, Jabalpur. Currently pursuing Electronics and Communication Engineering.
        </h3>

        <button
          onClick={handleResumeDownload} // Add click event to download the resume
          className='bg-orange-500  hover:bg-orange-400 mt-6 p-2 px-3 rounded-md transition-all ease-in-out hover:scale-110 text-white'
        >
          Resume
        </button>
      </div>

      {/* Right Section: Image */}
      <div className='mt-6 md:mt-12'>
        <img src={Img} alt="Home Image" className='w-[300px] sm:w-[350px] md:w-[400px]' />
      </div>
    </div>
  );
};

export default Home;
