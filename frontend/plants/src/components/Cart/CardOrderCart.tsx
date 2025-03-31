import {useState} from "react";
import ImgSearch from "../../assets/Cards/searchCard.svg"
import ImgBasket from "../../assets/Cards/basketCard.svg"
import ImgLike from "../../assets/Cards/like.svg"
import { useCart } from "./ContextCart.tsx";

import {motion} from "framer-motion";

interface  ProductCardProps {
    id: number;
    category: string[];
    image: string;
    title: string;
    price: number;
    size: string;
}


const CardOrderCart: React.FC<ProductCardProps> = ({id, image,title,price}) => {
    const [cardActive, setCardActive] = useState(false);
    const { addToCart } = useCart();

    return (
        <div className="w-[219px] h-[255px]">
            <div className="w-full h-[300px] bg-gray-100 flex justify-center items-center relative hover:cursor-pointer group" onMouseEnter={() => setCardActive(true)} onMouseLeave={() => setCardActive(false)}>
                <img src={image} alt={title} className="w-[212px]"/>
                {cardActive && (
                    <>
                        <motion.div
                            className="absolute top-0 w-full h-[2px] bg-green-600"
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "100%" }}
                            transition={{ duration: 0.3 }}
                        ></motion.div>
                        <motion.div
                            className="absolute bottom-[14px] w-full flex flex-row justify-center gap-[26px]"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div
                                className="bg-white w-[35px] h-[35px] flex justify-center items-center rounded-[7px] hover:bg-green-50"
                            >
                                <button onClick={() => addToCart({ id, title, price, image, quantity: 1 })}><img src={ImgBasket} alt="Img" className="w-[20px] h-[20px] brightness-0 cursor-pointer"/></button>
                            </div>
                            <div
                                className="bg-white w-[35px] h-[35px] flex justify-center items-center rounded-[7px] hover:bg-green-50">
                                <button><img src={ImgLike} alt="Img" className="w-[20px] h-[20px] cursor-pointer"/></button>
                            </div>
                            <div
                                className="bg-white w-[35px] h-[35px] flex justify-center items-center rounded-[7px] hover:bg-green-50">
                                <button><img src={ImgSearch} alt="Img" className="w-[20px] h-[20px] cursor-pointer"/></button>
                            </div>
                        </motion.div>
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

export default CardOrderCart;