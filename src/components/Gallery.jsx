import { motion } from "motion/react";
import { BsFillGridFill } from "react-icons/bs";
import SIH_Winner from "../assets/gallery/SIH_Winner.jpg";
import Activity_26_Aug_1 from "../assets/gallery/Activity-26-Aug_1.jpg";
import Activity_15_Sept_2 from "../assets/gallery/Activity-15-Sept_2.jpg";

function Gallery() {
    return (
        <motion.div className="cool_backdrop_background w-full h-ful bg-black-20 p-4 ">
            <motion.h1 className="text-xl flex items-center gap-2">
                <span className="text-3xl">
                    {/* <BsGrid1X2Fill /> */}
                    <BsFillGridFill />
                </span>
                <span>Gallery</span>
            </motion.h1>
        {/* 1st IMG */}
            <div
                className="
                    mt-4
                    grid md:grid-cols-1
                    xl:grid-cols-8 xl:grid-row-12 gap-2
                "
            >
                <div 
                    className="
                        rounded-xl bg-black-30 p-2
                        inset-shadow-xs inset-shadow-white/10
                        shadow-xs shadow-black/40
                        flex flex-col gap-2
                        md:col-span-1
                        xl:col-span-8 xl:row-span-8"
                >
                    <img 
                        className="
                            w-full h-120 object-cover rounded-md
                        "
                        src={SIH_Winner} alt="sih_winner_2024_image" />
                    <span className="text-sm block text-neutral-400 font-firaCode">[001]</span>
                    <h1 className="font-medium">SIH Winner 2024</h1>
                </div>
        {/* 2nd IMG */}
                <div 
                    className="
                        rounded-xl bg-black-30 p-2
                        inset-shadow-xs inset-shadow-white/10
                        shadow-xs shadow-black/40
                        flex flex-col gap-2
                        md:col-span-1
                        xl:row-start-9 xl:col-span-4 xl:row-span-4
                    "
                >
                    <img 
                        className="
                            w-full basis-full object-cover rounded-md
                        "
                        src={Activity_26_Aug_1} alt="sih_winner_2024_image" />
                    <span className="text-sm block text-neutral-400 font-firaCode">[002]</span>
                    <h1 className="font-medium">Smart India Hackathon - Roadmap - 2025</h1>
                </div>
        {/* 3rd IMG */}
                <div 
                    className="
                        rounded-xl bg-black-30 p-2
                        inset-shadow-xs inset-shadow-white/10
                        shadow-xs shadow-black/40
                        flex flex-col gap-2
                        md:col-span-1
                        xl:col-start-5 xl:row-start-9 xl:col-span-4 xl:row-span-4
                    "
                >
                    <img 
                        className="
                            w-full basis-full object-cover rounded-md
                        "
                        src={Activity_15_Sept_2} alt="sih_winner_2024_image" />
                    <span className="text-sm block text-neutral-400 font-firaCode">[003]</span>
                    <h1 className="font-medium">Ideathon - 2025</h1>
                </div>
        {/* 4th IMG */}
                <div 
                    className="
        hidden
                        rounded-xl bg-black-30 p-2
                        inset-shadow-xs inset-shadow-white/10
                        shadow-xs shadow-black/40
                        flex flex-col gap-2
                        col-start-9 col-span-4 row-span-6
                    "
                >

                    <img 
                        className="
                            w-full basis-full object-cover rounded-md
                        "
                        src={Activity_26_Aug_1} alt="sih_winner_2024_image" />
                    <span className="text-sm block text-neutral-400 font-firaCode">[004]</span>
                    <h1 className="font-medium">SIH Winner 2024</h1>
                </div>
        {/* 5th IMG */}
                <div 
                    className="
                    hidden
                        rounded-xl bg-black-30 p-2
                        inset-shadow-xs inset-shadow-white/10
                        shadow-xs shadow-black/40
                        flex flex-col gap-2
                        col-start-9 row-start-7 col-span-4 row-span-6
                    "
                >

                    <img 
                        className="
                            w-full basis-full object-cover rounded-md
                        "
                        src={Activity_26_Aug_1} alt="sih_winner_2024_image" />
                    <span className="text-sm block text-neutral-400 font-firaCode">[005]</span>
                    <h1 className="font-medium">SIH Winner 2024</h1>
                </div>
            </div>
        </motion.div>
    );
}

export default Gallery;
