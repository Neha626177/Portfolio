import React, { useState, useEffect, useRef } from 'react';
import wave from '../assets/wave.svg';
import girlImg from '../assets/girl.png';
import latopImg from '../assets/laptop.png';
import { IoLogoGithub } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { TbCodeDots } from "react-icons/tb";
import IntershipCertificate from '../assets/InternCer.pdf'; // Make sure to update the path to your resume

const About = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [questionsCount, setQuestionsCount] = useState(0);
  const [internshipCount, setInternshipCount] = useState(0);
  const [startCounting, setStartCounting] = useState(false);

  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (startCounting) {
      const projectInterval = setInterval(() => {
        if (projectsCount < 15) {
          setProjectsCount(prev => prev + 1);
        } else {
          clearInterval(projectInterval);
        }
      }, 10);

      const questionInterval = setInterval(() => {
        if (questionsCount < 250) {
          setQuestionsCount(prev => Math.min(prev + 30, 250));
        } else {
          clearInterval(questionInterval);
        }
      }, 10);

      const internshipInterval = setInterval(() => {
        if (internshipCount < 2) {
          setInternshipCount(prev => prev + 0.1);
        } else {
          clearInterval(internshipInterval);
        }
      }, 10);

      return () => {
        clearInterval(projectInterval);
        clearInterval(questionInterval);
        clearInterval(internshipInterval);
      };
    }
  }, [startCounting, projectsCount, questionsCount, internshipCount]);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = IntershipCertificate;
    link.download = 'Internship_certificate.pdf';
    link.click();
  };

  return (
    <div className="overflow-x-hidden relative" id='about'>
      <div className="11/12 mt-32" ref={aboutRef}>
        <img src={wave} alt="" className="w-screen absolute" />
        <img
          src={girlImg}
          alt=""
          className="absolute mt-[-60px] md:visible md:mt-[-80px] ml-[-30px] md:mt-[-150px] w-[250px] md:w-[300px]"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src={latopImg}
          alt=""
          className="absolute  md:visible w-[180px] md:w-[200px] right-0 sm:bottom-0 top-[100px]"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <div className="h-[400px] md:h-[400px] bg-purple-600 w-full">
          <h2
            className="sm:text-[1.5rem] text-[1.9rem] md:text-[2.5rem]  xl:text-[45px] text-white font-bold text-center pt-20"
            data-aos="zoom-in"
          >
           About <span className="text-black">Me</span>
          </h2>
          <h2 className="text-white mt-8 text-center px-10 md:px-64 lg:px-80">
            I am a fourth-year student pursuing Electronics and Communication Engineering @ JEC Jabalpur campus. I am always ready to have new experiences, love to interact with new people, and learn new things. Always trying to add efforts for people and impacting the world through my work is gratifying.
          </h2>
        </div>
        <div className="flex w-4/5 md:w-[60%] mt-[-40px] mx-auto items-center justify-center aboutMe  md:visible">
          {/* Projects Section */}
          <a href="https://github.com/Neha626177"
            className=' text-center gap-4 py-[11px] flex items-center justify-center flex-grow cursor-pointer'>
            <div className="bg-yellow-400 rounded-l-[40px] py-4 flex items-center justify-center gap-4 border-r-[1px] flex-grow text-center cursor-pointer">
              <IoLogoGithub className="text-3xl" />
              <div>
                <p className="text-black font-bold text-base sm:text-lg md:text-xl">{projectsCount}+ <span className="text-sm">Projects</span></p>
                <p className="text-gray-600 text-xs text-start">Completed</p>
              </div>
            </div>
          </a>

          {/* Link to GeeksforGeeks */}
          <a
            href="https://www.geeksforgeeks.org/user/nehayadav6261/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#B6E2D3] text-center gap-4 py-[15px] flex items-center justify-center flex-grow cursor-pointer"
          >
            <TbCodeDots className="text-3xl" />
            <div>
              <p className="text-black font-bold text-base sm:text-lg md:text-xl">{questionsCount}+ <span className="text-sm">Questions</span></p>
              <p className="text-gray-600 text-xs text-start text-xs">On GfG</p>
            </div>
          </a>

          {/* Internship with Resume Download */}
          <div
            onClick={handleResumeDownload}
            className="bg-[#B6E2D3] py-4 rounded-r-[40px] flex items-center justify-center gap-4 border-l-[1px] flex-grow text-center cursor-pointer"
          >
            <GrCertificate className="text-3xl text-[#E6]" />
            <div>
              <p className="text-black font-bold text-base sm:text-lg md:text-xl">{internshipCount.toFixed(1)}+ <span className="text-sm">Months</span></p>
              <p className="text-gray-600 text-xs text-start">Internship</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
