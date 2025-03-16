import ImgLogo from "../assets/Header/Logo.svg"
import ImgSearch from "../assets/Header/search.png"
import ImgBasket from "../assets/Header/basket.png"
import ImgLogout from "../assets/Header/Logout.svg"
import ImgX from "../assets/Header/X.svg"
import ImgGoogle from "../assets/Header/Google.png"
import ImgFacebook from "../assets/Header/Facebook.png"
import ImgLine1 from "../assets/Header/Line 7.png"
import ImgLine2 from "../assets/Header/Line 8.png"
import Modal from "./Modal.tsx";
import {useState} from "react";




export default function Header() {
    const [isOpenModal, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <header className="flex flex-row justify-between content-center">
                <img src={ImgLogo} alt="Logo" className="w-[150px] h-[34px]" />
                <div className="flex flex-row gap-[50px] font-medium text-gray-700">
                    <a href="#" className="hover:text-black transition decoration-300">Home</a>
                    <a href="#" className="hover:text-black transition decoration-300">Shop</a>
                    <a href="#" className="hover:text-black transition decoration-300">Plant Care</a>
                    <a href="#" className="hover:text-black transition decoration-300">Blogs</a>
                </div>
                <div className="flex flex-row justify-center content-center gap-[30px]">
                    <a href="#"><img src={ImgSearch} alt="" className="w-[30px]"/></a>
                    <a href="#"><img src={ImgBasket} alt="" className="w-[30px] h-[30px]"/></a>
                    <button onClick={openModal} className="flex flex-row gap-1 justify-center content-center bg-green-700
                     p-1 text-white font-['Noto Sans'] font-semibold w-[100px] h-[35px]
                      rounded-[8px] hover:bg-green-600 cursor-pointer transition duration-300">
                        <img src={ImgLogout} alt="Logout" className="w-[20px] h-[20px] mt-[3px]"/> Login
                    </button>

                    <Modal isOpen={isOpenModal} closeModal={closeModal}>
                        <button onClick={closeModal}
                                className="absolute right-[480px] top-[115px] ">
                            <img src={ImgX} alt="X"/></button>
                        <div className="flex flex-row justify-center content-center gap-[30px] pt-[30px]">
                            <a href="#" className="font-medium text-[20px] leading-[16px]">Login</a>
                            <p className="text-[18px] font-thin leading-[16px] ">I</p>
                            <a href="#" className="font-medium text-[20px] leading-[16px]">Register</a>
                        </div>
                        <div
                            className="flex flex-col gap-[20px] justify-center content-center ">
                            <p className="text-[13px] leading-[16px] flex items-start">Enter
                                your email and password to login.</p>
                            <input type="email"
                                   className="w-[300px] h-[40px] rounded-[5px] border "
                                   placeholder="  qwerty_qwe@mail.ru" required
                                   autoComplete="email"/>
                            <input type="password"
                                   className="w-[300px] h-[40px] rounded-[5px] border relative content: '' absolute bg-[url(../assets/Header/Hide.png)]"
                                   placeholder="  password" required
                                   autoComplete="current-password"/>
                            <a href="#"
                               className="text-[14px] leading-[16px] text-[#46A358] flex justify-end">Forgot
                                Password?</a>
                            <button type="submit"
                                    className="w-[300px] h-[45px] rounded-[5px] border bg-[#46A358] text-center text-white">
                                <span
                                    className="text-[16px] leading-[16px] font-bold">Login</span>
                            </button>
                        </div>


                        <div
                            className="flex flex-col gap-[20px] justify-center content-center">
                            <div
                                className="flex flex-row justify-between items-center ">
                                <img src={ImgLine1} alt="Line1"/>
                                <p className="text-[13px] leading-[16px] text-[#3D3D3D]">Or
                                    login with </p>
                                <img src={ImgLine2} alt="Line2"/>
                            </div>
                            <button
                                className="w-[300px] h-[40px] rounded-[5px] border border-[#EAEAEA] bg-[#FFFFFF] flex flex-row items-center justify-center gap-[10px]">
                                <img src={ImgGoogle} alt="Goggle-icon"
                                     className=" w-[20px] h-[20px] bg-cover bg-no-repeat "/>
                                <span
                                    className="text-[13px] leading-[16px] font-medium text-center text-[#727272]">Login with Google</span>
                            </button>
                            <button
                                className="w-[300px] h-[40px] rounded-[5px] border border-[#EAEAEA] bg-[#FFFFFF] flex flex-row items-center justify-center gap-[10px]">
                                <img src={ImgFacebook} alt="Facebook-icon"
                                     className="w-[20px] h-[20px] bg-cover bg-no-repeat "/>
                                <span
                                    className="text-[13px] leading-[16px] font-medium text-center text-[#727272]">Login with Facebook</span>
                            </button>
                        </div>
                        <div className="w-full h-[10px] bg-[#46A358] relative bottom-[-20px]"></div>
                    </Modal>
                </div>
            </header>
            <div className="w-full h-[1px] mt-[18px] bg-gray-300"></div>
        </>
    )
}
