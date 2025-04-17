import {products} from "./ProductSearch/products.tsx"
import {useParams} from "react-router-dom";
import ImgCard4 from "../assets/Cards/card4.png";
import {useState} from "react";

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
                    <div className="mb-[10px]"><p className="font-[700] text-[28px] text-[#3D3D3D]">Barberton Daisy</p></div>
                    <div>
                        <p className="text-[22px] font-[700] text-[#46A358]">${(product.price).toFixed(2)}</p>
                        {/*Review*/}

                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProductInfo;