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


function Profile() {

        const navigate = useNavigate();
        const [activeTab, setActiveTab] = useState<ProfileTab>("account");


    return (
        <div className="flex flex-row ml-[120px] mt-[70px]">
            <section className="flex flex-col w-[300px] bg-gray-100 items-start leading-[45px] pl-[15px]  ">
                    <h1 className="text-lg font-bold pt-[10px]">My Account</h1>
                    <button
                        className="flex flex-row items-center gap-[10px] w-full"
                        onClick={() => setActiveTab("account")}>
                            <img src={ImgUser} alt="User" className="w-[22px]"/>
                            Account Details</button>
                    <button className="flex flex-row items-center gap-[10px] w-full">
                            <img src={ImgLocation} alt="Location" className="w-[22px]"/>
                            Address</button>
                    <button
                        className="flex flex-row items-center gap-[10px] w-full"
                        onClick={() => navigate("/shoppingCart")}
                    >
                            <img src={ImgBasket} alt="Basket" className="w-[22px]"/>
                            Orders</button>
                    <button className="flex flex-row items-center gap-[10px] w-full">
                            <img src={ImgLike} alt="Like" className="w-[22px]"/>
                            Wishlist</button>
                    <button className="flex flex-row items-center gap-[10px] w-full">
                            <img src={ImgActivity} alt="Activity" className="w-[22px]"/>
                            Reports</button>
                    <button className="flex flex-row items-center gap-[10px] w-full">
                            <img src={ImgDownload} alt="Download" className="w-[22px]"/>
                            Downloads</button>
                    <button className="flex flex-row items-center gap-[10px] w-full">
                            <img src={ImgTriangle} alt="Triangle" className="w-[22px]"/>
                            Support</button>
                    <div className="w-full border-[1px] opacity-10"/>
                    <button className="flex flex-row items-center gap-[10px]  text-[#46A358] font-bold">
                            <img src={ImgLogout} alt="Logout" className="w-[22px]"/>
                            Logout</button>
            </section>


            <section>
                    {activeTab === "account" && <AccountDetails />}
            </section>
        </div>
    )
}
export default Profile;