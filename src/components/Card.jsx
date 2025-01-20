import React from 'react';

const Card = ({ title, desc, img,link }) => {
    return (
        <>
            <section className=" flex justify-center items-center my-0">
                <div className="w-[250px] h-[300px] bg-transparent cursor-pointer group perspective">
                    {/* Card Container */}
                    <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-lg rounded-lg">
                        {/* Front Side */}
                        <div className="absolute backface-hidden w-full h-full">
                            <img
                                src={img}
                                alt="Project"
                                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        {/* Back Side */}
                        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 rounded-lg overflow-hidden shadow-md">
                            <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 pb-20">
                                <h1 className="text-2xl font-bold mb-4">{title}</h1>
                                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                    {desc || "No description provided"}
                                </p>
                                <a
                                    href={link}
                                    className="bg-orange-500 px-3 py-2 sm:text-xs md:text-sm font-semibold text-white rounded-full absolute -bottom-10 delay-100 duration-500 group-hover:bottom-10 group-hover:scale-100 scale-0 transition-all"
                                >
                                    Learn More
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
