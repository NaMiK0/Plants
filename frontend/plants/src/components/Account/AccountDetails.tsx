import ImgPhoto from "../../assets/Profile/Photo.svg"

function AccountDetails() {
    return (
        <div>
            <h1>Personal information</h1>
            <label>First Name</label>
            <input type="text"/>
            <label>Last Name</label>
            <input type="text"/>
            <label>Email address</label>
            <input type="text"/>
            <label>Phone number</label>
            <input type="text"/>
            <label>Username</label>
            <input type="text"/>
            <div>
                <h3>Photo</h3>
                <img src={ImgPhoto} alt="Photo"/>
                <button>Change</button>
                <button>Remove</button>
            </div>
            <h1>Password change</h1>
            <label>Current password</label>
            <input type="password"/>
            <label>New password</label>
            <input type="password"/>
            <label>Confirm new password</label>
            <input type="password"/>
            <button>Save Change</button>
        </div>
    )
}

export default AccountDetails;