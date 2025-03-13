import ImgLogo from "../assets/Header/Logo.svg"
import ImgSearch from "../assets/Header/search.png"
import ImgBasket from "../assets/Header/basket.png"
import ImgLogout from "../assets/Header/Logout.svg"

export default function Header() {
    return (
        <>
            <header className="flex flex-row justify-between content-center">
                <img src={ImgLogo} alt="Logo" className="w-[150px] h-[34px]" />
                <div className="flex flex-row gap-[50px] font-normal text-gray-700">
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">Plant Care</a>
                    <a href="#">Blogs</a>
                </div>
                <div className="flex flex-row justify-center content-center gap-[30px]">
                    <a href="#"><img src={ImgSearch} alt="" className="w-[30px]"/></a>
                    <a href="#"><img src={ImgBasket} alt="" className="w-[30px] h-[30px]"/></a>
                    <button className="flex flex-row gap-1 justify-center content-center bg-green-700
                     p-1 text-white font-['Noto Sans'] font-semibold w-[100px] h-[35px]
                      rounded-[8px] hover:bg-green-600 cursor-pointer transition duration-300">
                        <img src={ImgLogout} alt="Logout" className="w-[20px] h-[20px] mt-[3px]"/> Login
                    </button>
                </div>
            </header>
            <div className="w-full h-[1px] mt-[18px] bg-gray-300"></div>
        </>
    )
}
