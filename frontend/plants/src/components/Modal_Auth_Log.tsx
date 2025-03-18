import ImgX from "../assets/Header/X.svg";

// @ts-ignore
const Modal_Auth_Log = ({isOpen, closeModal, children, isRegistering}) => {
    if(!isOpen){ return null }

    return (
        <div
            className="fixed top-0 w-full h-screen bg-black/30 flex justify-center items-center z-10 right-0">
            <div
                className={'relative bg-white w-[500px] justify-center' +
                    ' items-center text-center flex flex-col shadow-sm gap-[50px] transition-all duration-300' +
                    `${isRegistering ? "h-[700px]" : "h-[600px]"}`}>
                <button onClick={closeModal}
                        className="absolute top-4 right-4">
                    <img src={ImgX} alt="X"/></button>
                {children}
            </div>
        </div>
    )
}

export default Modal_Auth_Log