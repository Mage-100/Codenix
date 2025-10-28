import { useParams } from "react-router";
import AkashBora from "./BlogContent/AkashBora";
import RitanjitDas from "./BlogContent/RitanjitDas";
import Page404 from "./Page404";
import { FaArrowLeft } from "react-icons/fa";

function Blog({ children, title, author }) {
    return (
        <div
            className="
                bg-black-20
                p-7 xl:p-10
                "
        >
            <button
                className="
                        cursor-pointer py-4
                        text-2xl
                        mb-3
                    "
            >
                <a href="/blogs">
                    <FaArrowLeft />
                </a>
            </button>
            <div className="text-2xl">
                <h1>{title}</h1>
            </div>
            <div className="text-lg text-neutral-500">
                <span className="text-base">written by - </span>
                <span className="font-medium text-neutral-400">{author}</span>
            </div>
            <div className="mt-2 md:text-base xl:text-xl xl:w-[75ch] text-justify">
                {children}
            </div>
        </div>
    )
}

function ReadBlogPage() {
    const { id } = useParams();
    if ((id != 1) && (id != 2)) {
        return (
            <Page404 />
        )
    }
    return (
        <div className="bg-black-10 font-montserrat text-neutral-300 flex justify-center">
            {
                id == 1 ? (

                    <Blog title={"My Smart India Hackathon Experience"} author={"Akash Bora"}>
                        <AkashBora />
                    </Blog>
                ) : (

                    <Blog title={"React Fatigue is Real. Will Svelte Take Over ?"} author={"Ritanjit Das"}>
                        <RitanjitDas />
                    </Blog>
                )
            }
        </div>
    )
}

export default ReadBlogPage;