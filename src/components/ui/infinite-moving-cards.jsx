import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}) => {
    const containerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty("--animation-direction", "forwards");
            } else {
                containerRef.current.style.setProperty("--animation-direction", "reverse");
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden px-6 md:px-10 py-6", // Added padding for indentation
                "[mask-image:linear-gradient(to_right,transparent,purple_20%,purple_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        key={idx} // Added key prop to avoid React warning
                        className={cn(
                            "group relative flex flex-col items-center flex-shrink-0 rounded-2xl",
                            "w-[190px] h-[200px] sm:w-[180px] sm:h-[200px] md:w-[180px] md:h-[200px]",
                            "lg:w-[180px] lg:h-[220px] xl:w-[190px] xl:h-[230px]",
                            "pt-[22px] sm:px-6 sm:py-8 box bg-white shadow-lg", // Added shadow for better appearance
                            "hover:scale-105 transition-transform duration-300" // Added hover animation for a smooth effect
                        )}
                    >
                        <div className="rounded-full mb-3">
                            <img
                                src={item.img}
                                alt=""
                                className="rounded-full object-cover w-[80px] h-[70px] md:w-[90px] md:h-[90px]"
                            />
                        </div>
                        <p className="text-md sm:text-base md:text-md font-semibold mt-2 text-center">
                            {item.title}
                        </p>
                        <p className="text-sm sm:text-sm md:text-sm text-gray-500 text-center group-hover:text-red-500">
                            {item.desc}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
