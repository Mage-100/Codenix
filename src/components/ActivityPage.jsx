import ReactLenis from "lenis/react";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import { MdLocationPin, MdOutlineTimeline } from "react-icons/md";
import Sep_16_2025 from "./ActivitesContent/Sep_16_2025.jsx";
import Sep_15_2025 from "./ActivitesContent/Sep_15_2025.jsx";
import Sep_9_2025 from "./ActivitesContent/Sep_9_2025.jsx";
import Aug_26_2025 from "./ActivitesContent/Aug_26_2025.jsx";
import Aug_19_2025 from "./ActivitesContent/Aug_19_2025.jsx";

function HackathonTag() {
    return (
        <div className="cursor-pointer py-1 px-2 text-sm bg-purple-500/10 text-purple-400 rounded-md font-medium">
            # Hackathon
        </div>
    );
}

function IdeathonTag() {
    return (
        <div className="cursor-pointer py-1 px-2 text-sm bg-yellow-500/10 text-yellow-400 rounded-md font-medium">
            # Ideathon
        </div>
    );
}

function LatestTag() {
    return (
        <div className="cursor-pointer py-1 px-2 text-sm bg-green-500/10 text-green-500 rounded-md font-medium">
            # Latest
        </div>
    );
}

function GitTag() {
    return (
        <div className="cursor-pointer py-1 px-2 text-sm bg-orange-500/10 text-orange-500 rounded-md font-medium">
            # Git
        </div>
    );
}

function GithubTag() {
    return (
        <div className="cursor-pointer py-1 px-2 text-sm bg-slate-900/10 text-slate-400 rounded-md font-medium">
            # Github
        </div>
    );
}

function OpensourceTag() {
    return (
        <div className="cursor-pointer py-1 px-2 text-sm bg-stone-900/10 text-stone-100 rounded-md font-medium">
            # OpenSource
        </div>
    );
}

function FOSSTag() {
    return (
        <div className="cursor-pointer py-1 px-2 text-sm bg-emerald-600/10 text-emerald-600 rounded-md font-medium">
            # FOSS
        </div>
    );
}

function NoneTag() {
    return (
        <div className="cursor-pointer py-1 px-2 text-sm bg-white text-black rounded-md font-medium">
            None
        </div>
    );
}

function Activity({ children, count, title, date, loc, tags }) {
    return (
        <div
            className="
                                    p-4 bg-black-30 rounded-md
                                    inset-shadow-xs
                                    inset-shadow-white/10
                                    shadow-xs shadow-black/40
                                "
        >
            <div className="text-2xl bg-white text-black font-bold w-10 h-10 rounded-full grid place-items-center">
                {count}
            </div>
            <h1 className="text-xl font-medium mt-4">{title}</h1>
            <span className="text-neutral-400">{date}</span>
            <div className="my-2 flex items-center gap-2">
                <span className="text-red-500">
                    <MdLocationPin />
                </span>
                <span>{loc}</span>
            </div>
            <div>{children}</div>
            <hr className="my-2 text-neutral-600" />
            <div className="flex flex-wrap gap-2">
                <div className="py-1 px-2 text-sm bg-neutral-600 text-white rounded-md">
                    Tags:
                </div>
                {tags}
            </div>
        </div>
    );
}

function ActivityPage() {
    return (
        <>
            <ReactLenis root />
            <div className="font-montserrat bg-black-10 text-white">
                <div className=" p-2 pb-1 xl:p-4 xl:pb-2">
                    <div className="cool_backdrop_background w-full h-full bg-black-20">
                        <Nav />
                    </div>
                </div>
                <div className="p-2 pb-1 xl:p-4 xl:pb-2 ">
                    <div className="cool_backdrop_background p-4 w-full h-full bg-black-20">
                        <div className="text-3xl flex items-center gap-2">
                            <span className="text-4xl">
                                <MdOutlineTimeline />
                            </span>
                            <h1 className="">Activity</h1>
                        </div>
                        <div className="mt-4">
                            <div className="flex flex-col gap-4">
                                <Activity
                                    title="Smart India Hackathon - Internal Round"
                                    count={1}
                                    date="16th September 2025"
                                    loc="MCA Lab, GIMT Building"
                                    tags={
                                        <>
                                            <HackathonTag /> <LatestTag />
                                        </>
                                    }
                                >
                                    <Sep_16_2025 />
                                </Activity>
                                <Activity
                                    title="Ideathon"
                                    count={2}
                                    date="15th September 2025"
                                    loc="MCA Lab, GIMT Building"
                                    tags={
                                        <>
                                            <IdeathonTag />{" "}
                                        </>
                                    }
                                >
                                    <Sep_15_2025 />
                                </Activity>
                                <Activity
                                    title="Git & Github for Beginners"
                                    count={3}
                                    date="9th September 2025"
                                    loc="MCA Lab, GIMT Building"
                                    tags={
                                        <>
                                            <GitTag /> <GithubTag /> <FOSSTag />{" "}
                                            <OpensourceTag />
                                        </>
                                    }
                                >
                                    <Sep_9_2025 />
                                </Activity>
                                <Activity
                                    title="SIH Hackathon Roadmap Guide"
                                    count={4}
                                    date="26th August 2025"
                                    loc="MCA Lab, GIMT Building"
                                    tags={
                                        <>
                                            <HackathonTag />
                                        </>
                                    }
                                >
                                    <Aug_26_2025 />
                                </Activity>
                                <Activity
                                    title="Freshers' Interactive Kickoff Session"
                                    count={5}
                                    date="19th August 2025"
                                    loc="MCA Lab, GIMT Building"
                                    tags={<><NoneTag /> </>}
                                >
                                    <Aug_19_2025 />
                                </Activity>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default ActivityPage;
