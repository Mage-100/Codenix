import NumberGrid from "./NumberGrid";
import {motion} from "motion/react";

function Hero() {
    return (
        <div className="text-white p-4 grow flex flex-col justify-center relative">
            <div className="backdrop absolute top-[50%] left-[50%] translate-[-50%] ">
                <NumberGrid />
            </div>
            <div className="flex flex-col justify-center z-10">
                <motion.h1 
                    className="text-5xl md:text-6xl xl:text-9xl font-extrabold text-center"
                    initial={{
                        opacity:0,
                        translateY: 10
                    }}
                    whileInView={{
                        opacity: 1,
                        translateY: 0
                    }}
                >
                    COD<span className="text-red-500">É</span>NIX
                </motion.h1>
                <h2 className="text-lg md:text-3xl xl:text-4xl text-center">
                    GCU's Official Coding Club
                </h2>
            </div>
        </div>
    );
}

export default Hero;
