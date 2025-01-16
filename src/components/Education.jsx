import React from 'react';
import headImg from '../assets/book1.png';
import eduImg from '../assets/edu1.jpg';

const Education = () => {
  return (
    <div className='my-[80px] w-11/12 mx-auto px-4 md:px-12' id='education'>

      <div className='flex items-center justify-center '>

        {/* Skill Image with Animation */}
        <img
          src={headImg}
          alt="education"
          className='w-[80px] sm:w-[50px] md:w-[100px] skillImg ' data-aos="fade-down"
        />

        {/* Heading  */}
        <h2 className='sm:text-[1.5rem] text-[1.9rem] md:text-[2.5rem]  xl:text-[45px] font-bold text-center'>
          Academic <span className='text-purple-600'>Background</span>
        </h2>

      </div>

      {/* Education detail Section */}
      <div className='w-full flex flex-col md:flex-row justify-center items-center mt-[10px] md:mt-[40px]' data-aos="fade-right">

        {/* Description section */}
        <div className='p- md:w-[55%]'>
          {/* College Information */}
          <div className='mt-10 mb-2'>
            <h2 className='font-semibold text-[1.6rem] text-purple-600'>
              Jabalpur Engineering College <span className='text-black'>(B.Tech)</span>
            </h2>
            <p className='EduText text-yellow-300 text-lg text-bold'>Electronics and Telecommunication Engineering</p>
            <p>Current CGPA: 8.08</p>
          </div>

          {/* 12th Information */}
          <div>
            <h2 className='font-semibold text-2xl'>
              Little Step High Secondary School <span className='text-lg'>(12th Grade)</span>
            </h2>
            <p>Science Stream</p>
            <p>Percentage: 97%</p>
          </div>

          {/* 10th Information */}
          <div>
            <h2 className='font-semibold text-2xl'>Excellence Sunflower School</h2>
            <p>State Board</p>
            <p>Percentage: 96.6%</p>
          </div>
        </div>

        {/* Image section */}
        <div className='md:w-[45%] mt-6 md:mt-0'>
          <img
            src={eduImg}
            alt="education"
            className='w-full h-full object-cover' // Makes the image cover the div properly
            data-aos="fade-left"
          />
        </div>
      </div>

    </div>
  );
};

export default Education;
