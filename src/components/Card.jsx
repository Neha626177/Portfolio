import React from 'react';
import projectImg from "../assets/kingsman.jpg";

const Card = ({title,desc}) => {
    return (
        <>
            <section className="flex justify-center items-center">
                <div className="w-[300px] h-[350px] bg-transparent cursor-pointer group perspective">
                    {/* Card Container */}
                    <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                        {/* Front Side */}
                        <div className="absolute backface-hidden w-full h-full border-2">
                            <img
                                src={projectImg}
                                alt="Project"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Back Side */}
                        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                            <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 pb-20">
                                <h1 className="text-3xl font-semibold">{title}</h1>
                                
                                <p className="text-sm">
                                   {desc}
                                </p>
                                <a
                                    href="#"
                                    className="bg-orange-500 px-3 py-2 text-sm font-semibold text-white rounded-full absolute -bottom-10 delay-100 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-100"
                                >
                                    Click it
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Card;
