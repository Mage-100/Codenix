import { motion } from "motion/react";
import { BiSolidMegaphone } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

function NewsAnouncements() {
    return (
        <motion.div
            className="cool_backdrop_background bg-black-20 p-4"
            initial={{
                opacity: 0,
                y: 100,
            }}
            whileInView={{
                opacity: [0.0, 0.5, 1.0],
                y: 0,
            }}
            transition={{
                duration: 0.7,
                delay: 0.5,
                type: "spring",
                damping: 20,
            }}
            viewport={{
                once: true,
            }}
        >
            <motion.h1 className="text-xl flex items-center gap-2">
                <span className="text-3xl">
                    <BiSolidMegaphone />
                </span>
                <span>News And Announcements</span>
            </motion.h1>
            <div className="mt-4 ">
                <div
                    className="
                        p-2
                        w-full
                        bg-black-30
                        rounded-xl
                    "
                >
                    <div className="py-1 px-2 bg-purple-500/10 text-purple-500 font-medium inline-block rounded-lg ">
                        <h1>Hackathon</h1>
                    </div>
                    <div className="text-2xl font-black px-2 py-4">
                        <p>SIH - Internal Hackathon Results</p>
                        <p className="text-lg font-normal w-full xl:w-[75ch]">
                            Based on the scores provided by the judges, the
                            following teams participating in the ACITE SIH
                            Internal Round held on 16th September 2025 have been
                            selected. The team rankings are listed in the table.
                        </p>
                    </div>
                    <button
                        className="
                        cursor-pointer mb-4 py-2 px-3 bg-green-500/5
                        text-green-500 font-medium rounded-md
                        transition-all duration-100
                        shadow-xs
                        shadow-black/10
                        hover:shadow-md
                        hover:shadow-black/20
                        active:scale-98
                        flex items-center gap-3
                    "
                    >
                        <span>View More</span>
                        <span>
                            <FaEye />
                        </span>
                    </button>
                    <div className="bg-neutral-100/10 text-white w-fit px-2 py-1 rounded-lg flex items-center gap-2">
                        <span className="text-sm font-light">by</span>
                        <span className="text-sm font-medium">Akash Bora</span>
                        <span className="text-md font-black text-white/10">
                            ·
                        </span>
                        <span className="text-sm font-medium">
                            18th September 2025
                        </span>
                    </div>
                </div>
                <motion.button
                    className="
                                cursor-pointer
                                mt-4 px-2 py-3 
                                text-black font-bold bg-neutral-200 
                                w-full rounded-xl
                                shadow-xs shadow-black/40 hover:shadow-none
                                transition-all duration-300
                                flex justify-center items-center gap-2
                                hover:gap-3
                                active:scale-98
                            "
                >
                    <span>View All</span>
                    <span>
                        <GoArrowRight />
                    </span>
                </motion.button>
            </div>
        </motion.div>
    );
}

export default NewsAnouncements;
