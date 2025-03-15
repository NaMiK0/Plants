import ImgPlants1Modal from "../assets/Slider/plants-modal.png"
import ImgPlants2Modal from "../assets/Slider/BookPlant.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, A11y, Autoplay} from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';

export default function Slider() {
    return (
        <div className="w-full h-[450px] flex justify-between bg-gray-100 mt-3 content-center">
            <Swiper
                modules={[Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,}}
                pagination={{clickable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {/*1*/}
                <SwiperSlide>
                    <div className="flex justify-between content-center h-[450px] w-full">
                        <div className="flex flex-col w-[50%] gap-[7px] pt-[60px] pl-[40px]">
                            <p className="text-[14px] text-gray-800 font-normal leading-[16px] uppercase">Welcome to
                                GreenShop</p>
                            <h1 className="text-[70px] text-gray-900 font-extrabold leading-[77px] uppercase">Let’s Make
                                a <br/>
                                Better <span className="text-green-600">Planet</span></h1>
                            <p className="text-[14px] leading-[30px] font-normal text-gray-500">We are an online plant
                                shop
                                offering a wide range of cheap and
                                trendy plants. Use our plants to create an unique
                                Urban Jungle. Order your favorite plants!
                            </p>

                            <button className="uppercase bg-green-700 text-white w-[140px] h-[40px] mt-[40px] rounded-[8px] hover:bg-green-600
                                    cursor-pointer transition duration-300 font-semibold">
                                shop now
                            </button>
                        </div>
                        <div className="w-[50%] flex justify-end">
                            <img src={ImgPlants1Modal} alt="Img" className="h-full"/>
                        </div>
                    </div>
                </SwiperSlide>

                {/*2*/}
                <SwiperSlide>
                    <div className="flex justify-between content-center h-[450px] w-full">
                        <div className="flex flex-col w-[50%] gap-[7px] pt-[60px] pl-[40px]">
                            <p className="text-[14px] text-gray-800 font-normal leading-[16px] uppercase">Welcome to
                                GreenShop</p>
                            <h1 className="text-[70px] text-gray-900 font-extrabold leading-[77px] uppercase">
                                did you know?
                            </h1>
                            <p className="text-[14px] leading-[30px] font-normal text-gray-500">
                                Plants are more fascinating than you think! Discover amazing facts about how they breathe,
                                grow, and even communicate. Dive into the green world and learn something new today!
                            </p>

                            <button className="uppercase bg-green-700 text-white w-[140px] h-[40px] mt-[40px] rounded-[8px] hover:bg-green-600
                                    cursor-pointer transition duration-300 font-semibold">
                                Read more
                            </button>
                        </div>
                        <div className="w-[44%] flex flex-column justify-end items-end">
                            <img src={ImgPlants2Modal} alt="Img" className="h-[80%]"/>
                        </div>
                    </div>
                </SwiperSlide>

                {/*3*/}
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
            <style>
                {`
            .swiper-pagination-bullet {
                background-color: #ccc;
                opacity: 1;
                width: 10px;
                height: 10px;
                margin: 0 4px !important;
            }

            .swiper-pagination-bullet-active {
                background-color: #4CAF50;
            }
        `}
            </style>
        </div>
    );
}