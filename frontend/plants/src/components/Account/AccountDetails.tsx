import ImgPhoto from "../../assets/Profile/Photo.svg"

function AccountDetails() {
    return (
        <div className="">
            <h1>Personal Information</h1>
            <div className="grid grid-cols-2 gap-4 justify-center">
                <div className="space-y-1">
                    <label>First Name</label>
                    <input type="text"
                           className="w-full border border-gray-300"/>
                </div>

                <div className="flex flex-col space-y-1">
                    <label>Last Name</label>
                    <input type="text"
                           className="w-[380px] border border-gray-300"/>
                </div>

                <div className="space-y-1 ">
                    <label>Email address</label>
                    <input type="text"
                           className="w-full border border-gray-300"/>
                </div>

                <div className="space-y-1 ">
                    <label>Phone number</label>
                    <input type="text"
                           className="w-full border border-gray-300"/>
                </div>

                <div className="space-y-1 ">
                    <label>Username</label>
                    <input type="text"
                           className="w-full border border-gray-300"/>
                </div>

                <div className="space-y-1 ">
                    <h3>Photo</h3>
                    <img src={ImgPhoto} alt="Photo"/>
                    <button>Change</button>
                    <button>Remove</button>
                </div>
            </div>


            <div className="flex flex-col">
                <h1>Password change</h1>
                <label>Current password</label>
                <input type="password" className="w-full border border-gray-300"/>
                <label>New password</label>
                <input type="password" className="w-full border border-gray-300"/>
                <label>Confirm new password</label>
                <input type="password" className="w-full border border-gray-300"/>
                <button>Save Change</button>
            </div>
        </div>
    )
}

export default AccountDetails;