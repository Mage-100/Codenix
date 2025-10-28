import { useLenis } from "lenis/react";
import codenix_full_logo_white from "../assets/codenix_full_logo_white.png";

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

function Nav() {
    return (
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
    );
}

export default Nav;
