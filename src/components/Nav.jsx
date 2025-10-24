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
                    <a href="/">
                        <LI>Home</LI>
                    </a>
                    <a href="">
                        <LI>Activity</LI>
                    </a>
                    <a href="">
                        <LI>Achievements</LI>
                    </a>
                    <a href="">
                        <LI>About</LI>
                    </a>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
