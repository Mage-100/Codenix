import { BsPersonCircle } from "react-icons/bs";
import { motion } from "motion/react";
import Nav from "./Nav";
import Footer from "./Footer";
import { FaGear } from "react-icons/fa6";
import { FaCode, FaUserGraduate } from "react-icons/fa";

function Card({ title, role, delay }) {
    return (
        <motion.div
            className="
                bg-black-30 p-4 rounded-lg
                max-md:w-full 
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
                opacity: [0, 0.5, 1],
                y: [20, 5, 0]
            }}
            transition={{
                duration: 0.5,
                delay: 1 * delay
            }}
            viewport={{once: true}}
        >
            <span className="text-3xl">
                <BsPersonCircle />
            </span>
            <h1 className="mt-3 text-2xl font-medium">{title}</h1>
            {
                role == "President" ? (
                    <h1 className="text-base  text-red-500 font-bold">{role}</h1>
                ) : (
                    <h1 className="text-base text-neutral-500">{role}</h1>
                )
            }
        </motion.div>
    );
}

function About() {
    return (
        <div className="font-montserrat bg-black-10 text-white">
            <div className="p-2 pb-1 xl:p-4 xl:pb-2">
                <div className="cool_backdrop_background bg-black-20">
                    <Nav />
                </div>
            </div>
            <div className="p-2 pb-1 xl:p-4 xl:pb-2">
                <div className="cool_backdrop_background bg-black-20 w-full h-full p-4 pt-15">
                    <div>
                        <h1 className="text-4xl xl:text-6xl text-center font-bold">Want to know about us ?</h1>
                    </div>
                    <div>
                        <h1 className="my-6 text-center text-4xl xl:text-4xl font-bold">What we do</h1>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <motion.div className="
                                bg-black-30 p-8
                                flex flex-col items-center gap-2
                                rounded-lg w-fit
                                border-2 border-solid border-green-400
                                "
                                initial={{ opacity: 0, x: 100 }}
                                animate={{
                                    opacity: [0, 0.5, 1],
                                    x: [100, 98, 0]
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0,
                                    damping: 150
                                }}

                            >
                                <span className="text-5xl ">
                                    <FaGear />
                                </span>
                                <h1 className="mt-6 font-bold text-2xl text-green-400 text-center">Workshop & Sessions</h1>
                                <p className="w-[20ch] text-center">
                                    In-depth training on essential tools like Git & GitHub and other modern technologies.
                                </p>
                            </motion.div>
                            <motion.div className="
                                bg-black-30 p-8
                                flex flex-col items-center gap-2
                                rounded-lg w-fit
                                border border-solid border-purple-400
                                "
                                initial={{ opacity: 0, x: 100 }}
                                animate={{
                                    opacity: [0, 0.5, 1],
                                    x: [100, 98, 0]
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.25,
                                    damping: 150
                                }}
                            >
                                <span className="text-5xl">
                                    <FaCode />
                                </span>
                                <h1 className="mt-6 font-bold text-2xl text-purple-400 text-center">Ideathons and Hackathons</h1>
                                <p className="w-[20ch] text-center">
                                    Fostering innovation and collaborative problem-solving.
                                </p>
                            </motion.div>
                            <motion.div className="
                                bg-black-30 p-8
                                flex flex-col items-center gap-2
                                rounded-lg w-fit
                                border border-solid border-blue-400
                                "
                                initial={{ opacity: 0, x: 100 }}
                                animate={{
                                    opacity: [0, 0.5, 1],
                                    x: [100, 98, 0]
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.5,
                                    damping: 150
                                }}
                            >
                                <span className="text-5xl">
                                    <FaUserGraduate />
                                </span>
                                <h1 className="mt-6 font-bold text-2xl text-blue-400">Career Guidance</h1>
                                <p className="w-[25ch] text-center">
                                    Providing a clear roadmap and guidance for prestigious competitions like the Smart India Hackathon (SIH), and other career advices.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <div>
                        <h1 className="my-6 mt-10 text-center text-4xl xl:text-4xl font-bold">Meet Our Members</h1>
                        <div className="flex justify-center flex-wrap md:w-full xl:w-auto gap-2 mt-8 text-white">
                            <Card delay={0.2} title="Adarsh Pradhan" role="Teacher Coordinator" />
                            <Card delay={0.3} title="Ritanjit Das" role="President" />
                            <Card delay={0.4} title="Subhrojyoti Goswami" role="Vice President" />
                            <Card delay={0.5} title="Kuman Jigyas Pritam" role="Secretary" />
                        </div>
                        <h1 className="my-6 mt-10 text-center text-2xl xl:text-3xl font-bold">Committee Members</h1>
                        <div className="flex justify-center gap-2 mt-8 text-white flex-wrap">
                            <Card delay={0.2} title="Akash Bora" role="Committee Member" />
                            <Card delay={0.3} title="Debasish Kashyab" role="Committee Member" />
                            <Card delay={0.4} title="Suvradeep Dutta" role="Committee Member" />
                            <Card delay={0.5} title="Rishav Kumar Singh" role="Committee Member" />
                            <Card delay={0.6} title="Neelam Chakraborty" role="Committee Member" />
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </div>
    )
}

export default About;