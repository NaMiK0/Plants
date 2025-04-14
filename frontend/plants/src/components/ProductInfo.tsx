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


    return (
        <div className="m-0 pt-[25px] pr-[120px] pl-[120px] pb-[0] font-['Montserrat']">
            <div className="">
                {/*left*/}
                <section className="flex flex-row w-[50%] h-[500px] gap-4">
                    {/*4 images*/}
                    <div className="flex flex-col justify-between">
                        {/*1*/}
                        <button className="flex items-center justify-center w-[100px] h-[100px] bg-gray-100 cursor-pointer border-[2px] border-gray-100 hover:border-[2px] hover:border-green-700">
                            <img src={product.image} alt={product.title}/>
                        </button>
                        {/*2*/}
                        <button className="flex items-center justify-center w-[100px] h-[100px] bg-gray-100 cursor-pointer border-[2px] border-gray-100 hover:border-[2px] hover:border-green-700">
                            <img src={ImgCard4} alt={product.title}/>
                        </button>
                        {/*3*/}
                        <button className="flex items-center justify-center w-[100px] h-[100px] bg-gray-100 cursor-pointer border-[2px] border-gray-100 hover:border-[2px] hover:border-green-700">
                            <img src={product.image} alt={product.title}/>
                        </button>
                        {/*4*/}
                        <button className="flex items-center justify-center w-[100px] h-[100px] bg-gray-100 cursor-pointer border-[2px] border-gray-100 hover:border-[2px] hover:border-green-700">
                            <img src={product.image} alt={product.title}/>
                        </button>
                    </div>
                    {/*1 image*/}
                    <div className="flex items-center justify-center w-full h-full bg-gray-100">
                        <img src={product.image} alt={product.title}/>
                    </div>
                </section>
                {/*right*/}
                <section>

                </section>
            </div>
        </div>
    )
}

export default ProductInfo;