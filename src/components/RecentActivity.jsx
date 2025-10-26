import { motion } from "motion/react";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { MdTimeline } from "react-icons/md";

function Card({ title, date, delay = 1 }) {
    return (
        <motion.div
            // border-t border-solid border-white/10
            className="
                card p-4 bg-black-30 min-w-80
                rounded-xl 
                inset-shadow-xs
                inset-shadow-white/10
                shadow-xs shadow-black/40
                w-full
            "
            initial={{
                opacity: 0,
                x: -100,
            }}
            whileInView={{
                opacity: [0.0, 0.5, 1.0],
                x: [-100, -5, 0],
            }}
            transition={{
                delay: 1 * delay,
            }}
            viewport={{ once: true }}
        >
            <h1 className="font-medium">{title}</h1>
            <span className="text-white/30">{date}</span>
            <button
                className="
                    flex items-center gap-2 mt-4 bg-blue-500/5 
                    rounded-md py-2 px-3 text-blue-500 font-medium cursor-pointer
                    hover:gap-3 transition-all duration-300 group
                    inset-shadow-lg
                    inset-shadow-white
                    shadow-xs
                    shadow-black/10
                    hover:shadow-md
                    hover:shadow-black/20
                    active:scale-98
                "
            >
                <span>Read More</span>
                <GoArrowUpRight className="text-lg transition-transform duration-300 group-hover:-rotate-12" />
            </button>
        </motion.div>
    );
}

function RecentActivity() {
    return (
        <motion.div
            className="cool_backdrop_background bg-black-20 p-4 inline-block max-md:block w-fit"
            initial={{
                opacity: 0,
                y: 100,
            }}
            whileInView={{
                opacity: [0.0, 0.9, 1.0],
                y: [100, 10, 0],
            }}
            transition={{
                duration: 0.9,
                delay: 0.1,
            }}
            viewport={{
                once: true,
                amount: "some",
                margin: "-15px 0px 15px 0px",
            }}
        >
            <motion.h1
                className="text-xl flex items-center gap-2"
                initial={{
                    opacity: 0,
                    y: 100,
                }}
                whileInView={{
                    opacity: [0.0, 0.9, 1.0],
                    y: [100, 10, 0],
                }}
                transition={{
                    duration: 0.7,
                    delay: 0.1,
                }}
                viewport={{ once: true }}
            >
                <span className="text-3xl">
                    <MdTimeline />
                </span>
                <span>Recent Activity</span>
            </motion.h1>
            <div className="cards mt-4 flex flex-wrap gap-4 max-md:flex-col">
                <Card
                    title="Smart India Hackathon - Internal Round"
                    date="16th September 2025"
                    delay={0.2}
                />
                <Card title="Ideathon" date="15th September 2025" delay={0.5} />
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
                initial={{ opacity: 0, y: 100 }}
                animate={{
                    opacity: [0, 0.5, 1],
                    y: [100, 5, 0],
                }}
                transition={{
                    duration: 0.3,
                    delay: 0.55,
                }}
            >
                <span>Explore Events</span>
                <span>
                    <GoArrowRight />
                </span>
            </motion.button>
        </motion.div>
    );
}

export default RecentActivity;
