// import ImgPlants1Modal from "../assets/Header/plants-modal.png"
//
//
// export default function SwapMenu() {
//     return (
//         <div className="w-full h-[450px] flex justify-between bg-gray-50 mt-3 content-center">
//             <div className="flex flex-col w-[60%] gap-[7px] pt-[60px] pl-[40px]">
//                 <p className="text-[14px] font-normal leading-[16px] uppercase">Welcome to GreenShop</p>
//                 <h1 className="text-[70px] font-black leading-[70px] uppercase">Let’s Make a <br/>
//                     Better <span className="text-green-600">Planet</span></h1>
//                 <p className="text-[14px] leading-[24px] font-normal text-gray-500">We are an online plant shop offering a wide range of cheap and
//                     trendy plants. Use our plants to create an unique
//                     Urban Jungle. Order your favorite plants!
//                 </p>
//
//                 <button className="uppercase bg-green-700 text-white w-[140px] h-[40px] mt-[40px] rounded-[8px] hover:bg-green-600
//                  cursor-pointer transition duration-300 font-semibold">shop now</button>
//             </div>
//             <div className="w-[40%] flex justify-end">
//                 <img src={ImgPlants1Modal} alt="Img" className="h-full"/>
//             </div>
//         </div>
//     )
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import { Carousel } from "@material-tailwind/react";

export default function SwapMenu() {
    return (
        <Carousel
            className="rounded-xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>
            <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
            />
        </Carousel>
    );
}
