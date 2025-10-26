import { motion } from "motion/react";
import { MdNotifications } from "react-icons/md";

function UpcomingActivity() {
    return (
        <motion.div
            className="cool_backdrop_background min-h-50 bg-black-20 p-4 inline-block max-md:block grow"
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
                    <MdNotifications />
                </span>
                <span>Upcoming Activity</span>
            </motion.h1>
            <div className="h-full flex justify-center items-center">
                <h1 className="text-2xl text-neutral-400 font-medium">
                    Stay tuned <span className="text-blue-500 font-bold">:)</span>
                </h1>
            </div>
        </motion.div>
    );
}

export default UpcomingActivity;
