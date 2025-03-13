import ImgLogo from "../assets/Header/Logo.svg"
import ImgSearch from "../assets/Header/Search.svg"
export default function Header() {
    return (
        <header className="flex flex-row justify-between">
            <img src={ImgLogo} alt="Logo" className="w-[150px] h-[34px]" />
            <div className="flex flex-row gap-[50px]">
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">Plant Care</a>
                <a href="#">Blogs</a>
            </div>
            <div>
                <a href="#"><img src={ImgSearch} alt=""/></a>
            </div>
        </header>
    )
}
