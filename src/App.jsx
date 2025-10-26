import { useState } from "react";
import { motion } from "motion/react";
import ReactLenis from "lenis/react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import RecentActivity from "./components/RecentActivity.jsx";
import "./App.css";
import UpcomingActivity from "./components/UpcomingActivity.jsx";
import NewsAnouncements from "./components/NewsAnnouncements.jsx";
import Gallery from "./components/Gallery.jsx";

function App() {
    return (
        <>
            <ReactLenis root />
            <div className="font-montserrat bg-black-10">
                <div className="hero-div relative h-screen min-h-screen p-2 xl:p-4 overflow-x-hidden">
                    <div className="cool_backdrop_background w-full h-full bg-black-20 flex flex-col">
                        <Nav />
                        <Hero />
                    </div>
                </div>
                <div className="text-white p-2 xl:p-4 flex gap-4 flex-wrap">
                    <RecentActivity />
                    <UpcomingActivity />
                </div>
                <div className="p-2 xl:p-4 text-white">
                    <NewsAnouncements />
                </div>
                <div className="min-h-screen p-2 xl:p-4 text-white">
                    <Gallery />
                </div>
            </div>
        </>
    );
}

export default App;
