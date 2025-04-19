import ImgUser from "../../assets/Profile/User.svg"
import ImgActivity from "../../assets/Profile/Activity.svg"
import ImgTriangle from "../../assets/Profile/Danger Triangle.svg"
import ImgDownload from "../../assets/Profile/Download.svg"
import ImgLocation from "../../assets/Profile/Location.svg"
import ImgLogout from "../../assets/Profile/Logout.svg"
import ImgBasket from "../../assets/Profile/Basket.svg"
import ImgLike from "../../assets/Cards/like.svg"
import {useNavigate} from "react-router-dom";
import AccountDetails from "./AccountDetails.tsx";
import {useState} from "react";
import {ProfileTab} from "./types.ts";
import Address from "./Address.tsx";
import Wishlist from "./Wishlist.tsx";
import Reports from "./Reports.tsx";
import Downloads from "./Downloads.tsx";
import Support from "./Support.tsx";
import Modal_Logout from "./Modal_Logout.tsx";


function Profile() {
        const navigate = useNavigate();
        const [activeTab, setActiveTab] = useState<ProfileTab>("account");

    return (
        <div className="flex flex-row ml-[120px] mt-[70px]">
            <section className="flex flex-col w-[310px] h-[405px] bg-gray-100 items-start leading-[45px]">
                    <h1 className="text-lg font-bold pt-[10px] pl-[15px]">My Account</h1>
                    <button
                        className={`flex flex-row items-center gap-[10px] w-full relative pl-[15px] ${activeTab === "account" ? "text-green-600 bg-white font-semibold" : ""}`}
                        onClick={() => setActiveTab("account")}
                    >
                            {activeTab === "account" && (
                                    <div className="absolute h-full w-1 bg-green-600 left-0 "></div>
                                )}
                                <img src={ImgUser} alt="User" className="w-[22px]"/>
                            Account Details
                    </button>

                    <button
                        className={`flex flex-row items-center gap-[10px] w-full relative pl-[15px] ${activeTab === "address" ? "text-green-600 bg-white font-semibold" : ""}`}
                        onClick={() => setActiveTab("address")}
                    >
                            {activeTab === "address" && (
                                <div className="absolute h-full w-1 bg-green-600 left-0 "></div>
                            )}
                            <img src={ImgLocation} alt="Location" className="w-[22px]"/>
                            Address
                    </button>

                    <button
                        className="flex flex-row items-center gap-[10px] w-full relative pl-[15px]"
                        onClick={() => navigate("/shoppingCart")}
                    >
                            <img src={ImgBasket} alt="Basket" className="w-[22px]"/>
                            Orders
                    </button>

                    <button
                        className={`flex flex-row items-center gap-[10px] w-full relative pl-[15px] ${activeTab === "wishlist" ? "text-green-600 bg-white font-semibold" : ""}`}
                        onClick={() => setActiveTab("wishlist")}
                    >
                            {activeTab === "wishlist" && (
                                <div className="absolute h-full w-1 bg-green-600 left-0 "></div>
                            )}
                            <img src={ImgLike} alt="Like" className="w-[22px]"/>
                            Wishlist
                    </button>

                    <button
                        className={`flex flex-row items-center gap-[10px] w-full relative pl-[15px] ${activeTab === "reports" ? "text-green-600 bg-white font-semibold" : ""}`}
                        onClick={() => setActiveTab("reports")}
                    >
                            {activeTab === "reports" && (
                                <div className="absolute h-full w-1 bg-green-600 left-0 "></div>
                            )}
                            <img src={ImgActivity} alt="Activity" className="w-[22px]"/>
                            Reports
                    </button>

                    <button
                        className={`flex flex-row items-center gap-[10px] w-full relative pl-[15px] ${activeTab === "downloads" ? "text-green-600 bg-white font-semibold" : ""}`}
                        onClick={() => setActiveTab("downloads")}
                    >
                            {activeTab === "downloads" && (
                                <div className="absolute h-full w-1 bg-green-600 left-0 "></div>
                            )}
                            <img src={ImgDownload} alt="Download" className="w-[22px]"/>
                            Downloads
                    </button>

                    <button
                        className={`flex flex-row items-center gap-[10px] w-full relative pl-[15px] ${activeTab === "support" ? "text-green-600 bg-white font-semibold" : ""}`}
                        onClick={() => setActiveTab("support")}
                    >
                            {activeTab === "support" && (
                                <div className="absolute h-full w-1 bg-green-600 left-0 "></div>
                            )}
                            <img src={ImgTriangle} alt="Triangle" className="w-[22px]"/>
                            Support
                    </button>

                    <div className="w-full border-[1px] opacity-10"/>

                    <button className="flex flex-row items-center gap-[10px]  text-[#46A358] font-bold pl-[15px]">
                            <img src={ImgLogout} alt="Logout" className="w-[22px]"/>
                            Logout
                    </button>
            </section>


            <section className="w-[75%] pl-[30px]">
                    {activeTab === "account" && <AccountDetails />}
                    {activeTab === "address" && <Address/>}
                    {activeTab === "wishlist" && <Wishlist/>}
                    {activeTab === "reports" && <Reports/>}
                    {activeTab === "downloads" && <Downloads/>}
                    {activeTab === "support" && <Support/>}
                    {activeTab === "logout" && <Modal_Logout/>}
            </section>
        </div>
    )
}
export default Profile;