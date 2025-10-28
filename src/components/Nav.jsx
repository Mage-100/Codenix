import { useState } from "react";
import { createPortal } from "react-dom";
import { useLenis } from "lenis/react";
import codenix_full_logo_white from "../assets/codenix_full_logo_white.png";
import logo_white from "../assets/codenix_single.svg";
import { GiCrossMark } from "react-icons/gi";
import "./Nav.css";


function LI({ children }) {
    return (
        <li className="text-lg font-medium group cursor-pointer">
            <span className="opacity-10 group-hover:text-red-500 group-hover:opacity-100">
                {"{ "}
            </span>
            {children}
            <span className="opacity-10 group-hover:text-red-500 group-hover:opacity-100">
                {" }"}
            </span>
        </li>
    );
}

function MobileNav({ isOpen, onClose }) {
    if (!isOpen) {
        // Re-enable scrolling when nav is closed
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'unset';
        }
        return null;
    }

    // Prevent scrolling when nav is open
    if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden';
    }

    return (
        createPortal(<>
            <div
                className="z-1000 fixed inset-0 bg-black/70 backdrop-blur-sm"
            >
                <div
                    className="
                fixed
            top-0 left-0 w-full
                bg-black-10
                p-6
                overflow-y-auto
            "
                >
                    <div className="flex">
                        <span className="grow"></span>
                        <button onClick={() => onClose()} className="text-red-500 text-xl">
                            <GiCrossMark />
                        </button>
                    </div>
                    <hr className="my-3 text-neutral-600/10" />
                    <div>
                        <img src={logo_white} alt="" className="w-8"/>
                    </div>
                    <div className="
                        mobileNav
                        text-center text-white mt-8 grid grid-cols-2 gap-3
                    ">
                        <a href="/">Home</a>
                        <a href="/activity">Activity</a>
                        <a href="/news">News</a>
                        <a href="/#gallery">Gallery</a>
                        <a href="/blogs">Blogs</a>
                        <a href="/about">About</a>
                    </div>
                </div>
            </div>

        </>, document.body)
    )
}

function Nav() {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <>
            <MobileNav isOpen={isMobileNavOpen} onClose={() => setMobileNavOpen(false)}/>
            <div className="hidden xl:flex justify-between items-center p-4 h-10vh">
                <img
                    src={codenix_full_logo_white}
                    alt="codenix_logo"
                    className="h-auto w-[12%]"
                />
                <nav className="">
                    <ul className="flex justify-end pr-4 pt-2 text-white gap-4">
                        <LI><a href="/">Home</a></LI>
                        <LI><a href="/activity">Activity</a></LI>
                        <LI><a href="/news">News</a></LI>
                        <LI><a href="/#gallery">Gallery</a></LI>
                        <LI><a href="/blogs">Blogs</a></LI>
                        <LI><a href="/about">About</a></LI>
                    </ul>
                </nav>
            </div>

            <div className="xl:hidden flex justify-between items-center p-4 h-10vh">
                <img src={logo_white} alt="" className="w-10" />
                <button
                    onClick={() => setMobileNavOpen(true)}
                    className="
                        bg-black-30 rounded-full
                        py-1 px-4 flex items-center
                        gap-2 active:scale-95
                        transition-transform duration-100
                    "
                >
                    <span className="font-bold text-sm text-neutral-300">
                        CODÉNIX
                    </span>
                    <span className="p-px h-4 bg-neutral-500 rounded-full"></span>
                    <span className="flex flex-col items-end justify-center gap-1">
                        <span className="p-px rounded-full w-5 bg-neutral-300"></span>
                        <span className="p-px rounded-full w-3 bg-neutral-300"></span>
                    </span>
                </button>
            </div>
        </>
    );
}

export default Nav;
