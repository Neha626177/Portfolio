import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
// import cImg from "../assets/css.png"; // Correctly importing the image
import cImg from "../assets/c.png"; 
import cppImg from "../assets/cpp.png"; 
import cssImg from "../assets/css1.png"; 
import htmlImg from "../assets/html.png"; 
import jsImg from "../assets/js.jpg"; 
import reactjs from '../assets/React.png'
import mongodbImg from "../assets/MongoDB.png"; 
import expressjsImg from "../assets/Express.png"; 
import dbmsImg from '../assets/dbms.png'


export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[25rem] rounded-md flex flex-col antialiased   items-center justify-center relative overflow-hidden"
    >
      <InfiniteMovingCards items={skills} direction="right" speed="slow" />
    </div>
  );
}

const skills = [
  {
    img: cImg, // Correctly referencing the imported image
    title: "C",
    desc: "Programming Language",
  },
   {
    img: cppImg, // Correctly referencing the imported image
    title: "C++",
    desc: "Programming Language",
  },
   {
    img: cssImg, // Placeholder for additional items
    title: "CSS",
    desc: "Styling Language",
  },

  {
    img: htmlImg, // Placeholder for additional items
    title: "HTML",
    desc: "Styling Language",
  },
  
   {
    img: jsImg, // Placeholder for additional items
    title: "JAVASCRIPT",
    desc: "Scripted Language",
  },
   {
    img: reactjs, // Placeholder for additional items
    title: "REACTJS",
    desc: "Js Library",
  },
   {
    img: expressjsImg, // Placeholder for additional items
    title: "EXPRESSJS",
    desc: "Backend",
  },
   {
    img: mongodbImg, // Placeholder for additional items
    title: "MONGODB",
    desc: "Database",
  },
   {
    img: cppImg, // Placeholder for additional items
    title: "BASIC DSA",
    desc: "Coding",
  },
  {
    img: dbmsImg, // Placeholder for additional items
    title: "DBMS",
    desc: "",
  },
  // Add more skill objects as needed
];
