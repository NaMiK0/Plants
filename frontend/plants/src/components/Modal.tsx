const Modal = ({isOpen, closeModal, children}) => {
    if(!isOpen){ return null }

    return (
        <div
            className="fixed w-full h-full bg-black/30 flex justify-center items-center z-10 right-0 ">
            <div
                className="bg-white w-[500px] h-[600px] justify-center items-center text-center flex flex-col shadow-sm gap-[50px]">
                {children}
            </div>
        </div>
    )
}

export default Modal