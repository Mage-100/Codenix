import ReactLenis from "lenis/react";
import Nav from "./Nav";
import Footer from "./Footer";
import Modal from "./Modal";
import { BiSolidMegaphone } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

function HackathonTag() {
    return (
        <div className="cursor-pointer py-1 px-2 text-sm bg-purple-500/10 text-purple-400 rounded-md font-medium">
            # Hackathon
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

function NewsTag() {
    return (
        <div className="cursor-pointer py-1 px-2 text-sm bg-blue-500/10 text-blue-400 rounded-md font-medium">
            # News
        </div>
    );
}

function News({ count, title, by, date, tags }) {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div
            className="
            p-4 bg-black-30 rounded-md
            inset-shadow-xs
            inset-shadow-white/10
            shadow-xs shadow-black/40
        "
        >
            <div className="text-2xl font-medium">
                <span className="text-neutral-600 font-bold">{"{ "}</span>
                <span>{count}</span>
                <span className="text-neutral-600 font-bold">{" }"}</span>
            </div>
            <div className="text-3xl mt-4 font-bold">
                <h1>{title}</h1>
            </div>
            <div className="mt-2">
                <p className="xl:w-[75ch]">
                    Based on the scores provided by the judges, the following
                    teams participating in the ACITE SIH Internal Round held on
                    16th September 2025 have been selected. The team rankings
                    are listed in the table.
                </p>
            </div>
            <button
                onClick={() => setModalOpen(true)}
                className="
                    cursor-pointer my-4 py-2 px-3 bg-green-500/5
                    text-green-500 font-medium rounded-md
                    transition-all duration-100
                    shadow-xs
                    shadow-black/10
                    hover:shadow-md
                    hover:shadow-black/20
                    active:scale-98
                    flex items-center gap-3
"
            >
                <span>View More</span>
                <span>
                    <FaEye />
                </span>
            </button>
            <hr className="my-2 text-neutral-600" />
            <div className="flex gap-2 xl:justify-between flex-wrap flex-row xl:flex-column">
                <div className="flex flex-wrap gap-2 items-center">
                    <div className="py-1 px-2 text-sm bg-neutral-600 text-white rounded-md">
                        Tags:
                    </div>
                    {tags}
                </div>
                <div className="bg-neutral-100/10 text-white w-fit px-2 py-1 rounded-lg flex items-center gap-2">
                    <span className="text-sm font-light">by</span>
                    <span className="text-sm font-medium">{by}</span>
                    <span className="text-md font-black text-white/10">·</span>
                    <span className="text-sm font-medium">
                        {date}
                    </span>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <div className="cool_backdrop_background text-white bg-black-20 p-4">
                    <table className="table-auto text-sm xl:text-base">
                        <caption>Here are the selected teams</caption>
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>Team Leader Name</th>
                                <th>Rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>8Bit</td>
                                <td> Ajwad Jahan</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Team DeepIQ</td>
                                <td>Akash Kuman Boro</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Team Sampriti</td>
                                <td>Suvradeep Dutta</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Team Arcane</td>
                                <td>Devaditya Bhattacharyya</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Medicoders</td>
                                <td>Riky Rabha</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Team Astranova</td>
                                <td>Krishnayan Kashyap Pathak</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>Team Horizon</td>
                                <td>Ansh Sharma</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>CrediFy</td>
                                <td>Akash Boro</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>Team SynTech</td>
                                <td>Neeraj Saikia</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>Subh</td>
                                <td>Subhajeet Das</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Yuva</td>
                                <td>Ankur Ranjan Chanda</td>
                                <td>11</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Modal>
        </div>
    );
}

function NewsPage() {
    return (
        <>
            <ReactLenis root />
            <div className="font-montserrat bg-black-10 text-white">
                <div className="p-2 pb-1 xl:p-4 xl:pb-2">
                    <div className="cool_backdrop_background bg-black-20 w-full h-full">
                        <Nav />
                    </div>
                </div>
                <div className="p-2 pb-1 xl:p-4 xl:pb-2">
                    <div className="cool_backdrop_background bg-black-20 w-full h-full p-4">
                        <div>
                            <h1 className="text-xl flex items-center gap-2">
                                <span className="text-3xl">
                                    <BiSolidMegaphone />
                                </span>
                                <span>News And Announcements</span>
                            </h1>
                        </div>
                        <div className="mt-4 flex flex-col gap-2">
                            <News
                                count={1}
                                title="SIH - Internal Hackathon Results"
                                by="Akash Bora"
                                date="18th September 2025"
                                tags={<><HackathonTag /> <LatestTag /> <NewsTag /></>}
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default NewsPage;
