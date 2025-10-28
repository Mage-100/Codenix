import { FaInstagram, FaLinkedin } from "react-icons/fa";
import GCU_LOG_WHITE from "../assets/GCU-Logo-White.png";
import codenix_full_logo_white from "../assets/codenix_full_logo_white.png";

function Footer() {
    return (
        <div className="p-6 bg-black-20 min-h-[50vh]">
            <div className="w-full flex gap-3 justify-around">
                <div className="h-full flex flex-col justify-between">
                    <img className="w-60" src={codenix_full_logo_white} alt="" />
                    <img className="w-80" src={GCU_LOG_WHITE} alt="" />
                </div>
                <div>
                    <h1 className="font-bold text-white">Links</h1>
                    <ul className="text-neutral-500 flex flex-col gap-4 mt-4">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/blogs">Blogs</a></li>
                        <li><a href="/news">News</a></li>
                        <li><a href="/activity">Activity</a></li>
                    </ul>
                </div>
                <div className="text-white">
                    <h1 className="font-bold">Contact</h1>
                    <div>
                        <div className="mt-4">
                            <div className="flex flex-col gap-1 text-neutral-600">
                                <a href="mailto:coding_club@gcuniversity.ac.in">coding_club@gcuniversity.ac.in</a>
                                <a href="mailto:info@gcuniversity.ac.in">info@gcuniversity.ac.in</a>
                            </div>
                        </div>
                    </div>
                    <h1 className="font-bold mt-4">Social Media</h1>
                    <div className="mt-2">
                        <div className="flex gap-1 text-neutral-600 text-xl">
                                <a className="cursor-pointer" href="https://www.linkedin.com/company/cod%C3%A9nix">
                                    <FaLinkedin />
                                </a>
                                <a className="cursor-pointer" href="https://www.instagram.com/codenix_gcu">
                                    <FaInstagram />
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;