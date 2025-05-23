import ImgPhoto from "../../assets/Profile/Photo.svg"
import ImgHide from "../../assets/Header/Hide.png"
import ImgShow from "../../assets/Header/Show.png"
import {useState} from "react";

function AccountDetails() {

    const [isCurPasswordVisible, setIsCurPasswordVisible] = useState(false);
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);


    return (
        <div className="flex flex-col">
            <h1 className="font-medium mb-[10px]">Personal Information</h1>
            <div className="grid grid-cols-2 gap-y-4 mb-6">
                <div className="flex flex-col space-y-2">
                    <label>First Name <span className="text-[#F03800]">*</span></label>
                    <input type="text"
                           className="w-[30vw] h-[40px] border border-gray-300"
                           required/>
                </div>

                <div className="flex flex-col space-y-2">
                    <label>Last Name <span
                        className="text-[#F03800]">*</span></label>
                    <input type="text"
                           className="w-[30vw] h-[40px] border border-gray-300"
                           required/>
                </div>

                <div className="flex flex-col space-y-2 ">
                    <label>Email address <span
                        className="text-[#F03800]">*</span></label>
                    <input type="text"
                           className="w-[30vw] h-[40px] border border-gray-300"
                           required/>
                </div>

                <div className="flex flex-col space-y-2 ">
                    <label>Phone number <span
                        className="text-[#F03800]">*</span></label>
                    <div className="flex flex-row gap-4">
                        <select
                            className="w-[5vw] h-[40px] border border-gray-300 indent-[10px]"
                            defaultValue="+7"
                        >
                            <option value="+7 (Ru)">+7</option>
                            <option value="+1 (Uk)">+1</option>
                            <option value="+81 (JP)">+81</option>
                            <option value="+33 (FR)">+33</option>
                        </select>
                        <input type="tel"
                               className="w-[24vw] h-[40px] border border-gray-300"
                               required/>
                    </div>
                </div>

                <div className="flex flex-col space-y-2 ">
                    <label>Username <span
                        className="text-[#F03800]">*</span></label>
                    <input type="text"
                           className="w-[30vw] h-[40px] border border-gray-300"
                           required/>
                </div>

                <div className="flex flex-col space-y-2">
                    <h3>Photo</h3>
                    <div className="flex flex-row gap-4 items-center">
                        <div className="w-[50px] h-[50px] rounded-full border border-gray-300 bg-gray-100 content-center">
                            <img src={ImgPhoto} alt="Photo"
                                 className="w-[4vw] h-[4vh]"/>
                        </div>
                        <button
                            className="border w-[7vw] bg-[#46A358] text-white h-[5vh] rounded-[3px]">Change</button>
                        <button className="w-[7vw] h-[5vh]">Remove</button>
                    </div>
                </div>
            </div>


            <div className="flex flex-col gap-4 relative">
                <h1 className="font-medium">Password change</h1>

                <div className="flex flex-col space-y-2">
                    <label>Current password</label>
                    <input type={isCurPasswordVisible ? "text" : "password"}
                           className="w-[30vw] h-[40px] border border-gray-300 indent-[10px]"
                           required/>
                    <button type="button"
                            onClick={() => setIsCurPasswordVisible(!isCurPasswordVisible)}
                            className="absolute top-[11vh] right-[37.5vw] transform -translate-y-1/2">
                        <img
                            src={isCurPasswordVisible ? ImgShow : ImgHide}
                            alt="Hide/Show"
                            className="w-5 h-1/2 translate-y-1/6"/>
                    </button>
                </div>

                <div className="flex flex-col space-y-2 relative">
                    <label>New password</label>
                    <input type={isNewPasswordVisible ? "text" : "password"}
                           className="w-[30vw] h-[40px] border border-gray-300 indent-[10px]"
                           required/>
                    <button type="button"
                            onClick={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
                            className="absolute top-[6vh] right-[37.5vw] transform -translate-y-1/2">
                        <img
                            src={isNewPasswordVisible ? ImgShow : ImgHide}
                            alt="Hide/Show"
                            className="w-5 h-1/2 translate-y-1/6"/>
                    </button>
                </div>

                <div className="flex flex-col space-y-2 relative">
                    <label>Confirm new password</label>
                    <input type={isConfirmPasswordVisible ? "text" : "password"}
                           className="w-[30vw] h-[40px] border border-gray-300 indent-[10px]"
                           required/>
                    <button type="button"
                            onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                            className="absolute top-[6vh] right-[37.5vw] transform -translate-y-1/2">
                        <img
                            src={isConfirmPasswordVisible ? ImgShow : ImgHide}
                            alt="Hide/Show"
                            className="w-5 h-1/2 translate-y-1/6"/>
                    </button>
                </div>

                <button
                    className="w-[10vw] h-[5vh] border bg-[#46A358] text-white">Save
                    Change
                </button>
            </div>
        </div>
    )
}

export default AccountDetails;