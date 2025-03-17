interface  ProductCardProps {
    image: string;
    title: string;
    price: number;
}


const CardOrder: React.FC<ProductCardProps> = ({image,title,price}) => {
    return (
        <div className="w-[258px] h-[352px]">
            <div className="w-full h-[300px] bg-gray-100 flex justify-center items-center">
                <img src={image} alt={title} className="w-[250px]"/>
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