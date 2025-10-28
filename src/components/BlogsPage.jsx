import { FaPencil } from "react-icons/fa6";
import Nav from "./Nav";
import Footer from "./Footer";
import { TbHandClick } from "react-icons/tb";
import { useNavigate } from "react-router";


function BlogIntro({ title, author, id }) {
    let navigate = useNavigate();
    return (
        <div
            className="
                bg-black-30 p-4 rounded-md
                inset-shadow-xs
                inset-shadow-white/10
                shadow-xs shadow-black/40
                max-md:w-full
                cursor-pointer
                hover:-translate-y-1
            " 
            onClick={() => navigate(`/blogs/${id}`)}
        >
            <h1 className="text-lg">{title}</h1>
            <div className="mt-1">
                <span className="text-sm text-neutral-500">by - </span>
                <span className="font-medium bg-blue-400/90 px-2 py-0.5 rounded-full">{author}</span>
            </div>
        </div>
    );
}

function BlogsPage() {
    return (
        <div className="font-montserrat bg-black-10 text-white">
            <div className="p-2 pb-1 xl:p-4 xl:pb-2">
                <div className="cool_backdrop_background bg-black-20">
                    <Nav />
                </div>
            </div>

            <div className="p-2 pb-1 xl:p-4 xl:pb-2 min-h-screen">
                <div className="cool_backdrop_background bg-black-20 w-full h-full p-2 xl:p-4">
                    <div>
                        <h1 className="text-xl flex items-center gap-2">
                            <span className="text-2xl">
                                <FaPencil />
                            </span>
                            <span>Blogs</span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-2 my-3 text-neutral-600">
                        <span className="text-xl">
                            <TbHandClick />
                        </span>
                        <h2 className="text-lg">Click to Read</h2>
                    </div>
                    <div className="mt-4">
                        <div className="flex gap-2 flex-wrap">
                            <BlogIntro title="My Smart India Hackathon Experience" author="Akash Bora" id={1}/>
                            <BlogIntro title="React Fatigue is Real. Will Svelte Take Over?" author="Ritanjit Das" id={2}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default BlogsPage;