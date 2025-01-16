import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-purple-600 text-white py-8">
            <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Branding or Name */}
                <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold">MY Portfolio</h3>
                    <p className="text-sm text-gray-300">
                        Designed and developed by Neha Yadav
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row gap-4 items-center lg:visible">
                    <a href="#home" className="hover:text-purple-300">
                        Home
                    </a>
                    <a href="#about" className="hover:text-purple-300">
                        About Me
                    </a>
                    <a href="#projects" className="hover:text-purple-300">
                        Projects
                    </a>
                    <a href="#skills" className="hover:text-purple-300">
                        Skills
                    </a>
                    <a href="#contact" className="hover:text-purple-300">
                        Contact
                    </a>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-6">
                    <a
                        href="https://github.com/Neha626177"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full hover:bg-black transition duration-300"
                    >
                        <FaGithub className="text-xl text-purple-600 hover:text-white" />
                    </a>
                    <a
                        href="https://linkedin.com/in/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center bg-blue-700 rounded-full hover:bg-blue-500 transition duration-300"
                    >
                        <FaLinkedin className="text-xl text-white" />
                    </a>
                    <a
                        href="https://twitter.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center bg-blue-400 rounded-full hover:bg-blue-300 transition duration-300"
                    >
                        <FaTwitter className="text-xl text-white" />
                    </a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-6 text-gray-400 text-sm">
                © {new Date().getFullYear()} Neha Yadav. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
