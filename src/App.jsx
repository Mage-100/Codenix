import { useState } from "react";
import ReactLenis from "lenis/react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import "./App.css";

function App() {
    return (
        <>
            <ReactLenis root />
            <div className="font-montserrat">
                <div className="hero-div relative h-screen min-h-screen bg-black-10 p-4">
                    <div className="cool_backdrop_background w-full h-full bg-black-20 flex flex-col">
                        <Nav />
                        <Hero />
                    </div>
                </div>
                <div className="h-screen"></div>
            </div>
        </>
    );
}

export default App;
