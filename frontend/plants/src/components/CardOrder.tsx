import {useState} from "react";
import ImgSearch from "../assets/Cards/searchCard.svg"
import ImgBasket from "../assets/Cards/basketCard.svg"
import ImgLike from "../assets/Cards/like.svg"

interface  ProductCardProps {
    image: string;
    title: string;
    price: number;
}


const CardOrder: React.FC<ProductCardProps> = ({image,title,price}) => {
    const [cardActive, setCardActive] = useState(false);

    return (
        <div className="w-[258px] h-[352px]">
            <div className="w-full h-[300px] bg-gray-100 flex justify-center items-center relative hover:cursor-pointer" onMouseEnter={() => setCardActive(true)} onMouseLeave={() => setCardActive(false)}>
                <img src={image} alt={title} className="w-[250px]"/>
                {cardActive && (
                    <>
                        <div className="absolute top-0 w-full h-[2px] bg-green-600"></div>
                        <div className="absolute bottom-[14px] w-full flex flex-row justify-center gap-[26px]">
                            <div
                                className="bg-white w-[35px] h-[35px] flex justify-center items-center rounded-[7px] hover:bg-green-50">
                                <a href="#"><img src={ImgBasket} alt="Img" className="w-[20px] h-[20px] brightness-0"/></a>
                            </div>
                            <div
                                className="bg-white w-[35px] h-[35px] flex justify-center items-center rounded-[7px] hover:bg-green-50">
                                <a href="#"><img src={ImgLike} alt="Img" className="w-[20px] h-[20px]"/></a></div>
                            <div
                                className="bg-white w-[35px] h-[35px] flex justify-center items-center rounded-[7px] hover:bg-green-50">
                                <a href="#"><img src={ImgSearch} alt="Img" className="w-[20px] h-[20px]"/></a></div>
                        </div>
                    </>
                )}
            </div>

            <div className="mt-[12px] mb-[6px]">
                <p>{title}</p>
            </div>
            <div>
                <p className="text-green-600 font-bold">${price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default CardOrder;