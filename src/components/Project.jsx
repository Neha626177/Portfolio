import React from "react";
import headImg from "../assets/book1.png";
import data from "../projectInfoData/index";

import Card from "./Card";
// Replace with the actual image path

const Project = () => {
    return (
        <div className="my-[100px] w-11/12 mx-auto px-4 md:px-12">
            <div className="w-[80%] mx-auto">
                {/* Heading Section */}
                <div className="flex items-center justify-center mb-16">
                    <h2 className="text-[1.7rem] sm:text-3xl md:text-[45px] font-bold text-center">
                        Tech <span className="text-purple-600">Projects</span>
                    </h2>
                </div>

                {/* Card Section */}
                <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-6 justify-center items-center">

                    {
                        data.map((items, index) => (
                            <Card title={items.title} desc={items.desc} img={items.img} link={items.link} />

                        ))
                    }

                </div>
            </div>
        

        </div>
    );
};

export default Project;
