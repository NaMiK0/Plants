import ImgLogo from "../assets/Header/Logo.svg"
import ImgBasket from "../assets/Header/basket.png"
import ImgLogout from "../assets/Header/Logout.svg"
import ImgGoogle from "../assets/Header/Google.png"
import ImgFacebook from "../assets/Header/Facebook.png"
import ImgLine1 from "../assets/Header/Line 7.png"
import ImgLine2 from "../assets/Header/Line 8.png"
import ImgHide from "../assets/Header/Hide.png"
import ImgShow from "../assets/Header/Show.png"
import Modal_Auth_Log from "./Modal_Auth_Log.tsx";
import {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import ProductSearch from "./ProductSearch/ProductSearch.tsx"



export default function Header() {
    const [isOpenModal, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const [isRegistering, setIsRegistering] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="m-0 pt-[25px] pr-[120px] pl-[120px] pb-[0] font-['Montserrat']">
            <header className="flex flex-row justify-between content-center">
                <img src={ImgLogo} alt="Logo" className="w-[150px] h-[34px]" />
                <div className="flex flex-row gap-[50px] font-medium text-gray-700">
                    <button
                        onClick={() => navigate("/")}
                        className={`relative flex cursor-pointer 
                    ${location.pathname === "/" ? "text-green-600" : "hover:text-black transition decoration-300"}`}>
                        Home
                        {location.pathname === "/" && (
                            <span
                                className="absolute left-0 bottom-[-14px] w-full h-[4px] bg-green-700 rounded-[5px]"></span>
                        )}
                    </button>
                    <button className={`relative flex cursor-pointer 
                    ${location.pathname === "/shoppingCart" ? "text-green-600" : "hover:text-black transition decoration-300"}`}>
                        Shop
                        {location.pathname === "/shoppingCart" && (
                            <span
                                className="absolute left-0 bottom-[-14px] w-full h-[4px] bg-green-700 rounded-[5px]"></span>
                        )}
                    </button>
                    <button className="hover:text-black transition decoration-300 flex cursor-pointer">Plant Care</button>
                    <button className="hover:text-black transition decoration-300 flex cursor-pointer">Blogs</button>
                </div>
                <div className="flex flex-row justify-center content-center gap-[30px]">
                    <ProductSearch/>
                    <a href="#"><img src={ImgBasket} alt="" className="w-[30px] h-[30px]" onClick={() => navigate("/shoppingCart")}/></a>
                    <button onClick={openModal} className="flex flex-row gap-1 justify-center content-center bg-green-700
                     p-1 text-white font-['Noto Sans'] font-semibold w-[100px] h-[35px]
                      rounded-[8px] hover:bg-green-600 cursor-pointer transition duration-300">
                        <img src={ImgLogout} alt="Logout" className="w-[20px] h-[20px] mt-[3px]"/> Login
                    </button>

                    <Modal_Auth_Log isOpen={isOpenModal} closeModal={closeModal} isRegistering={isRegistering}>
                        <div className="flex flex-row justify-center content-center gap-[30px] pt-[30px]">
                            <a
                                href="#"
                                className={`font-medium text-[20px] leading-[16px] ${!isRegistering ? "text-[#46A358]" : ""}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsRegistering(false);
                                }}
                            >Login</a>
                            <p className="text-[18px] font-thin leading-[16px] ">I</p>
                            <a
                                href="#"
                                className={`font-medium text-[20px] leading-[16px] ${isRegistering ? "text-[#46A358]" : ""}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsRegistering(true);
                                }}
                            >Register</a>
                        </div>
                        <div
                            className="flex flex-col gap-[20px] justify-center content-center ">
                            <p className="text-[13px] leading-[16px] flex items-start">
                                {isRegistering ? "Enter your email and" +
                                    " password to register." : "Enter your" +
                                    " email and password to login."} </p>

                            {isRegistering && (
                                <input type="text"
                                       className="w-[300px] h-[40px] rounded-[5px] border"
                                       style={{textIndent: "10px"}}
                                       placeholder="Username"
                                       required
                                       autoComplete="username"/>
                            )}
                            <input type="email"
                                   className="w-[300px] h-[40px] rounded-[5px] border "
                                   style={{textIndent: "10px"}}
                                   placeholder={isRegistering ? "Enter" +
                                       " your email address" : "Email"}
                                   required
                                   autoComplete="email"/>
                            <div className="relative">
                                <input type={isPasswordVisible ? "text" : "password"}
                                       className="w-[300px] h-[40px] rounded-[5px] border relative content: '' absolute bg-[url(../assets/Header/Hide.png)]"
                                       style={{textIndent: "10px"}}
                                       placeholder="Password"
                                       required
                                       autoComplete="current-password"/>

                                <button type="button"
                                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                        className="absolute top-1/2 right-3 transform -translate-y-1/2">
                                    <img src={isPasswordVisible ? ImgShow : ImgHide} alt="Hide/Show"
                                         className="w-5 h-5"/>
                                </button>
                            </div>

                            {isRegistering && (
                                <div className="relative">
                                    <input type={isConfirmPasswordVisible ? "text" : "password"}
                                           className="w-[300px] h-[40px] rounded-[5px] border"
                                           style={{textIndent: "10px"}}
                                           placeholder="Confirm password"
                                           required
                                           autoComplete="new-password"/>

                                    <button type="button"
                                            onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                                            className="absolute top-1/2 right-3 transform -translate-y-1/2">
                                        <img
                                            src={isConfirmPasswordVisible ? ImgShow : ImgHide}
                                            alt="Hide/Show"
                                            className="w-5 h-5"/>
                                    </button>
                                </div>
                            )}

                            {!isRegistering && (
                                <a href="#"
                                   className="text-[14px] leading-[16px] text-[#46A358] flex justify-end">Forgot
                                    Password?</a>
                            )}

                            <button type="submit"
                                    className="w-[300px] h-[45px] rounded-[5px] border bg-[#46A358] text-center text-white">
                                <span
                                    className="text-[16px] leading-[16px] font-bold">{isRegistering ? "Register" : "Login"}</span>
                            </button>
                        </div>


                        <div
                            className="flex flex-col gap-[20px] justify-center content-center">
                            <div
                                className="flex flex-row justify-between items-center ">
                                <img src={ImgLine1} alt="Line1"/>
                                <p className="text-[13px] leading-[16px] text-[#3D3D3D]"> {isRegistering ? "Or continue with" : "Or login with"}  </p>
                                <img src={ImgLine2} alt="Line2"/>
                            </div>
                            <button
                                className="w-[300px] h-[40px] rounded-[5px] border border-[#EAEAEA] bg-[#FFFFFF] flex flex-row items-center justify-center gap-[10px]">
                                <img src={ImgGoogle} alt="Goggle-icon"
                                     className=" w-[20px] h-[20px] bg-cover bg-no-repeat "/>
                                <span
                                    className="text-[13px] leading-[16px] font-medium text-center text-[#727272]">{isRegistering ? "Continue with Google" : "Login with Google"}</span>
                            </button>
                            <button
                                className="w-[300px] h-[40px] rounded-[5px] border border-[#EAEAEA] bg-[#FFFFFF] flex flex-row items-center justify-center gap-[10px]">
                                <img src={ImgFacebook} alt="Facebook-icon"
                                     className="w-[20px] h-[20px] bg-cover bg-no-repeat "/>
                                <span
                                    className="text-[13px] leading-[16px] font-medium text-center text-[#727272]">{isRegistering ? "Continue with Facebook" : "Login with Facebook"}</span>
                            </button>
                        </div>
                        <div className="w-full h-[10px] bg-[#46A358] relative bottom-[-10px]"></div>
                    </Modal_Auth_Log>
                </div>
            </header>
            <hr className="text-gray-300 mt-[13px]"/>
        </div>
    )
}
