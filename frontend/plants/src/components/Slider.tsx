import ImgPlants1Modal from "../assets/Slider/plants-modal.png"


export default function Slider() {
    return (
        <div className="w-full h-[450px] flex justify-between bg-gray-50 mt-3 content-center">
            <div className="flex flex-col w-[60%] gap-[7px] pt-[60px] pl-[40px]">
                <p className="text-[14px] font-normal leading-[16px] uppercase">Welcome to GreenShop</p>
                <h1 className="text-[70px] font-black leading-[70px] uppercase">Let’s Make a <br/>
                    Better <span className="text-green-600">Planet</span></h1>
                <p className="text-[14px] leading-[24px] font-normal text-gray-500">We are an online plant shop offering a wide range of cheap and
                    trendy plants. Use our plants to create an unique
                    Urban Jungle. Order your favorite plants!
                </p>

                <button className="uppercase bg-green-700 text-white w-[140px] h-[40px] mt-[40px] rounded-[8px] hover:bg-green-600
                 cursor-pointer transition duration-300 font-semibold">shop now</button>
            </div>
            <div className="w-[40%] flex justify-end">
                <img src={ImgPlants1Modal} alt="Img" className="h-full"/>
            </div>
        </div>
    );
}