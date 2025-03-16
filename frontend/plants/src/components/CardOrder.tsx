

interface  ProductCardProps {
    image: string;
    title: string;
    price: number;
}


const CardOrder: React.FC<ProductCardProps> = ({image,title,price}) => {
    return (
        <div className="w-[258px] h-[352px]">
            <div className="w-full h-[300px] bg-gray-100">
                <img src={image} alt={title} className="w-full"/>
            </div>
        </div>
    )
}