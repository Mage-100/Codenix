import NumberGrid from "./NumberGrid";
import {motion} from "motion/react";

function Hero() {
    return (
        <div className="text-white p-4 grow flex flex-col justify-center relative">
            <motion.div className="absolute top-[50%] left-[50%] translate-[-50%]
             w-120 aspect-square
            bg-gray-50
            bg-linear-to-tr
            from-red-500
            to-gray-50
        opacity-2
             -rotate-45 
              "></motion.div>
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
        <div className="absolute bottom-4 right-4">
        <span className="text-sm font-light mr-2 block">powered by</span>
        <span className="text-lg xl:text-2xl font-medium">Girijananda Chowdhury University</span>
        </div>
        </div>
    );
}

export default Hero;
