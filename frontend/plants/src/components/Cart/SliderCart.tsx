import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Pagination} from "swiper/modules";
import CardOrderCart from "./CardOrderCart.tsx";
import ImgCard1 from "../../assets/Cards/card1.png";
import ImgCard2 from "../../assets/Cards/card2.png";
import ImgCard3 from "../../assets/Cards/card3.png";
import ImgCard4 from "../../assets/Cards/card4.png";
import ImgCard5 from "../../assets/Cards/card5.png";
import CardOrder from "../CardOrder.tsx";
import ImgCard6 from "../../assets/Cards/card6.png";
import ImgCard7 from "../../assets/Cards/card7.png";
import ImgCard8 from "../../assets/Cards/card8.png";
import ImgCard9 from "../../assets/Cards/card9.png";


export default  function SliderCart() {
    return (
        <div className="w-[98%] h-[435px] flex bg-white">
            <Swiper
                modules={[Pagination, A11y, Autoplay]}
                speed={800}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                loop={false}
                pagination={{clickable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {/*1*/}
                <SwiperSlide>
                    <div className="flex justify-between h-[304px] w-full gap-[30px]">
                        <CardOrderCart
                            id={1}
                            category={["House Plants", "New Arrivals"]}
                            image={ImgCard1}
                            title="Aluminum Plant"
                            price={179}
                            size="Small"
                        />
                        <CardOrderCart
                            id={2}
                            category={["Potter Plants"]}
                            image={ImgCard2}
                            title="Barberton Daisy"
                            price={119}
                            size="Medium"
                        />
                        <CardOrderCart
                            id={3}
                            category={["Seeds", "New Arrivals"]}
                            image={ImgCard3}
                            title="Angel Wing Begonia"
                            price={169}
                            size="Large"
                        />
                        <CardOrderCart
                            id={4}
                            category={["Small Plants"]}
                            image={ImgCard4}
                            title="African Violet"
                            price={199}
                            size="Medium"
                        />
                        <CardOrderCart
                            id={5}
                            category={["Big Plants", "Sale"]}
                            image={ImgCard5}
                            title="Beach Spider Lily"
                            price={129}
                            size="Small"
                        />
                    </div>
                </SwiperSlide>

                {/*2*/}
                <SwiperSlide>
                    <div className="flex justify-between h-[304px] w-full gap-[30px]">
                        <CardOrderCart
                            id={5}
                            category={["Big Plants", "Sale"]}
                            image={ImgCard5}
                            title="Beach Spider Lily"
                            price={129}
                            size="Small"
                        />
                        <CardOrderCart
                            id={2}
                            category={["Potter Plants"]}
                            image={ImgCard2}
                            title="Barberton Daisy"
                            price={119}
                            size="Medium"
                        />
                        <CardOrderCart
                            id={3}
                            category={["Seeds", "New Arrivals"]}
                            image={ImgCard3}
                            title="Angel Wing Begonia"
                            price={169}
                            size="Large"
                        />
                        <CardOrderCart
                            id={4}
                            category={["Small Plants"]}
                            image={ImgCard4}
                            title="African Violet"
                            price={199}
                            size="Medium"
                        />
                        <CardOrderCart
                            id={1}
                            category={["House Plants", "New Arrivals"]}
                            image={ImgCard1}
                            title="Aluminum Plant"
                            price={179}
                            size="Small"
                        />
                    </div>
                </SwiperSlide>

                {/*3*/}
                <SwiperSlide>
                    <div className="flex justify-between h-[304px] w-full gap-[30px]">
                        <CardOrder
                            id={6}
                            category={["Succulents", "New Arrivals", "Sale"]}
                            image={ImgCard6}
                            title="Blushing Bromeliad"
                            price={139}
                            size="Large"
                        />
                        <CardOrder
                            id={7}
                            category={["Terrariums", "Sale"]}
                            image={ImgCard7}
                            title="Bird's Nest Fern"
                            price={99}
                            size="Large"
                        />
                        <CardOrder
                            id={8}
                            category={["Gardening", "New Arrivals"]}
                            image={ImgCard8}
                            title="Broadleaf Lady Palm"
                            price={59}
                            size="Small"
                        />
                        <CardOrder
                            id={9}
                            category={["Accessories"]}
                            image={ImgCard9}
                            title="Chinese Evergreen"
                            price={39}
                            size="Medium"
                        />
                        <CardOrderCart
                            id={5}
                            category={["Big Plants", "Sale"]}
                            image={ImgCard5}
                            title="Beach Spider Lily"
                            price={129}
                            size="Small"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
            <style>
                {`
                    .swiper-pagination {
                        position: absolute;
                        bottom: -60px; 
                    }
                    
                    .swiper-pagination-bullet {
                        background-color: white;
                        border: 1px green solid;
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
    )
}