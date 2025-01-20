import React from 'react';

import CalcuatorImg from '../assets/projectImg/calculator.png';
import CounterImg from '../assets/projectImg/counter.png';
import digitalClockImg from '../assets/projectImg/digitalClock.png';
import portfolioImg from '../assets/projectImg/portfolio.png';
import musicApp from '../assets/projectImg/music.png';
import razorpayImg from '../assets/projectImg/razorpay.png';
import tictacteoImg from '../assets/projectImg/tictacteo.png';
import timerImg from '../assets/projectImg/timer.png';
import toDo from '../assets/projectImg/todo.png';
//add keepNote and password generator
const data = [
    {
        title: 'Portfolio',
        desc: 'A responsive portfolio website showcasing personal projects, skills, and achievements. Built using React.js, it features reusable components and a modern UI.',
        img: portfolioImg,
        link:'https://portfolio-one-jet-73.vercel.app/'
    },
    // {
    //     title: 'Weather App',
    //     desc: 'A real-time weather application using JavaScript, HTML, and CSS. It provides current temperature, weather conditions, and more, powered by a weather API.',
    //     img: weatherImg,
    // },
    {
        title: 'Razorpay Clone',
        desc: 'A static frontend clone of the Razorpay website created using HTML and Tailwind CSS, focusing on responsive design and layout replication.',
        img: razorpayImg,
    },
    {
        title: 'Calculator',
        desc: 'A basic calculator app allowing users to perform arithmetic operations like addition, subtraction, multiplication, and division. Built using JavaScript.',
        img: CalcuatorImg,
    },
    {
        title: 'Counter App',
        desc: 'A simple counter app to increment, decrement, or reset values. It demonstrates state management concepts in JavaScript.',
        img: CounterImg,
    },
    {
        title: 'Digital Clock',
        desc: 'A digital clock displaying real-time updates every second. Built using JavaScript, HTML, and CSS, with a clean and intuitive design.',
        img: digitalClockImg,
    },
    // {
    //     title: 'Discord Clone',
    //     desc: 'A frontend clone of Discord UI, developed using HTML and Tailwind CSS. It replicates the layout and responsiveness of the original design.',
    //     img: discordImg,
    // },
    // {
    //     title: 'Keep Note App',
    //     desc: 'A note-keeping application inspired by Google Keep, built using React.js. Users can add, edit, and delete notes dynamically.',
    //     img: keepApp,
    // },
    // {
    //     title: 'Joke Creator',
    //     desc: 'A fun app built using React.js that fetches random jokes via an API and displays them to the user with dynamic rendering.',
    //     img: jockCreater,
    // },
    // {
    //     title: 'Leap Year Checker',
    //     desc: 'A simple app to check whether a given year is a leap year. Built using JavaScript, it validates user input and provides instant results.',
    //     img: LeapYear,
    // },
    {
        title: 'Music App',
        desc: 'A basic music player app allowing users to play, pause, and switch between tracks. Developed using JavaScript, HTML, and CSS.',
        img: musicApp,
    },
    {
        title: 'Tic-Tac-Toe Game',
        desc: 'A classic Tic-Tac-Toe game for two players. Built using JavaScript, HTML, and CSS, it includes logic to determine winners or ties.',
        img: tictacteoImg,
    },
    {
        title: 'Timer App',
        desc: 'A timer app where users can set custom durations. Built with JavaScript, it includes smooth animations and alerts when the timer ends.',
        img: timerImg,
    },
    {
        title: 'To-Do App',
        desc: 'A task management app where users can add, edit, and delete tasks. Built using JavaScript with local storage for task persistence.',
        img: toDo,
    },
];

export default data;
