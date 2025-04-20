import {products} from "./ProductSearch/products.tsx"
import {useParams} from "react-router-dom";
import ImgCard4 from "../assets/Cards/card4.png";
import {useState} from "react";
import {Reviews} from "./Cart/Reviews.tsx";
import {useCart} from "../components/Cart/ContextCart.tsx";
import Alert1 from "./Alert1.tsx";

function ProductInfo() {
    const {id} = useParams<{id:string}>();
    const product = products.find(p => p.id === Number(id));

    const [selectedImage, setSelectedImage] = useState(0); // Состояние для выбранного изображения
    if(!product)
    {
        return <div className="text-center py-20">Product not found</div>
    }

    const productImages = [
        product.image,
        ImgCard4,
        product.image,
        product.image
    ]

    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const {addToCart } = useCart();
    const [count, setCount] = useState(1);
    const [showAlert, setShowAlert] = useState(false);
    return (
        <div className="m-0 pt-[25px] pr-[120px] pl-[120px] pb-[0] font-['Montserrat']">
            <div className="flex flex-row gap-[52px]">
                {/*left*/}
                <section className="flex flex-row w-[50%] h-[500px] gap-4">
                    {/*4 images*/}
                    <div className="flex flex-col justify-between">
                        {productImages.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`flex items-center justify-center w-[100px] h-[100px] bg-gray-100 cursor-pointer border-2 ${
                                    selectedImage === index
                                        ? 'border-green-600 bg-green-50'
                                        : 'border-gray-100 hover:border-green-700'
                                }`}
                            >
                                <img src={image} alt="Image"/>
                            </button>
                        ))}
                    </div>
                    {/*1 image*/}
                    <div className="flex items-center justify-center w-full h-full bg-gray-100">
                        <img src={productImages[selectedImage]} alt={product.title}/>
                    </div>
                </section>
                {/*right*/}
                <section className="w-[50%] flex flex-col">
                    <div className="mb-[10px]"><p className="font-[700] text-[28px] text-[#3D3D3D]">Barberton Daisy</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p className="text-[22px] font-[700] text-[#46A358]">${(product.price).toFixed(2)}</p>
                        {/*Review*/}
                        <Reviews rating={4} reviewCount={product.id + 3}/>
                    </div>
                    <hr className="text-gray-200 mt-[11px] mb-[15px]"/>
                    <div>
                        <p className="text-[15px] font-[500] text-[#3D3D3D] mb-[10px]">Short Description:</p>
                        <p className="text-[14px] font-[400] text-[#727272] mb-[24px]">The ceramic cylinder planters
                            come with a wooden stand to help elevate your plants off the ground.
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the
                            ground.
                        </p>
                    </div>
                    <div className="mb-[23px]">
                        <p className="text-[15px] font-[500] text-[#3D3D3D] mb-[10px]">Size:</p>
                        <div className="flex flex-row gap-3">
                            {[
                                {label: 'S', value: 'Small'},
                                {label: 'M', value: 'Medium'},
                                {label: 'L', value: 'Large'},
                                {label: 'XL', value: 'Extra Large'}
                            ].map((size) => {
                                const isAvailable = product.size.includes(size.value);
                                const isSelected = selectedSize === size.value;

                                return (
                                    <button
                                        key={size.label}
                                        onClick={() => {
                                            if (isAvailable) {
                                                setSelectedSize(isSelected ? null : size.value);
                                            }
                                        }}
                                        className={`rounded-[50px] w-[28px] h-[28px] border-1 transition-colors ${
                                            isAvailable
                                                ? isSelected
                                                    ? 'border-green-500 bg-green-100 cursor-pointer' // Выбранный размер
                                                    : 'border-gray-400 bg-gray-100 cursor-pointer hover:border-green-300' // Доступный но не выбранный
                                                : 'border-gray-300 bg-gray-100 opacity-50'
                                        }`}
                                        disabled={!isAvailable}
                                    >
                                        {size.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-row gap-[16px]">
                        <button
                            className={`w-[21px] h-[25px] rounded-[14px]  
                                            ${count === 1 ? "bg-gray-300" : "bg-green-700 cursor-pointer hover:bg-green-600 transition duration-300"}`}
                            onClick={() => setCount(prevCount => Math.max(prevCount - 1, 1))}
                            disabled={count === 1}
                        >
                            <p className="text-[12px] text-white font-[800] mb-[6px]">_</p>
                        </button>
                        <p className="w-[20px] flex justify-center">{count}</p>
                        <button
                            className={`w-[21px] h-[25px] rounded-[14px] 
                                            ${count === 45 ? "bg-gray-300" : "bg-green-700 cursor-pointer hover:bg-green-600 transition duration-300"}`}
                            onClick={() => setCount(prev => Math.min(prev + 1, 45))}
                            disabled={count === 45}
                        >
                            <p className="text-[16px] text-white font-[500] mt-[1px]">+</p>
                        </button>
                        <div className="flex flex-row gap-[10px] ml-2">
                            <button
                                className="w-[130px] h-[40px] bg-green-700 text-white rounded-[5px] hover:bg-green-600 cursor-pointer transition duration-300 font-[700]">
                                Buy NOW
                            </button>
                            <button
                                className="w-[130px] h-[40px] bg-white text-green-700 border-1 rounded-[5px] hover:bg-green-600 hover:text-white cursor-pointer transition duration-300 font-[700]"
                                onClick={() => {
                                    if(!selectedSize) {
                                        alert("Please select a size");
                                        return;
                                    }
                                    addToCart({
                                        id: product.id,
                                        title: product.title,
                                        price: product.price,
                                        image: product.image,
                                        quantity: count,
                                        size: null
                                    });
                                    setShowAlert(true);
                                }}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>


                </section>
            </div>
            {showAlert && <Alert1 onClose={() => setShowAlert(false)} />}
        </div>
    )
}

export default ProductInfo;