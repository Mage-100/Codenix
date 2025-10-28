import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";

function Modal({ children, isOpen, onClose }) {
    if (!isOpen) return null;

    return createPortal(
        <div className="
            fixed inset-0 font-montserrat
            bg-neutral-950/90
            p-4 overflow-y-scroll
            "
        >
            <div
                className="
                    flex gap-4 items-center justify-start flex-col               
                "
            >

                <div className="cool_backdrop_background text-white p-4 bg-black-20 basis-full grid place-content-center">
                    <button 
                        className="cursor-pointer p-1 text-2xl font-bold"
                        onClick={() => onClose()}>
                            <MdOutlineClose />
                        </button>
                </div>
                {children}
            </div>
        </div>
        , document.body)
}

export default Modal;