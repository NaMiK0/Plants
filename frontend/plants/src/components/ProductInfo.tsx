import {products} from "./ProductSearch/products.tsx"
import {useParams} from "react-router-dom";
import ImgCard4 from "../assets/Cards/card4.png";
import {useState} from "react";
import {Reviews} from "./Cart/Reviews.tsx";
import {useCart} from "../components/Cart/ContextCart.tsx";
import Alert1 from "./Alert1.tsx";
import SliderCart from "./Cart/SliderCart.tsx";
import ImgFooter1_1 from "../assets/Cart/FooterCart1/Frame.svg";
import ImgFooter1_2 from "../assets/Cart/FooterCart1/Frame-1.svg";
import ImgFooter1_3 from "../assets/Cart/FooterCart1/Ellipse 9.svg";
import ImgFooter2_1 from "../assets/Cart/FooterCart2/Frame.svg";
import ImgFooter2_2 from "../assets/Cart/FooterCart2/Frame-1.svg";
import ImgFooter3_1 from "../assets/Cart/FooterCart3/Frame-1.svg";
import ImgFooter3_2 from "../assets/Cart/FooterCart3/Frame.svg";
import ImgLogo from "../assets/Header/Logo.svg";
import ImgMap from "../assets/Cart/FooterGgeen/map.svg";
import ImgMessage from "../assets/Cart/FooterGgeen/Message.svg";
import ImgPhone from "../assets/Cart/FooterGgeen/Phone.svg";
import ImgFacebook from "../assets/Cart/FooterLast/Facebook.svg";
import ImgInstagram from "../assets/Cart/FooterLast/Instagram.svg";
import ImgLinkedin from "../assets/Cart/FooterLast/Linkedin.svg";
import ImgTwitter from "../assets/Cart/FooterLast/Twitter.svg";
import ImgUnion from "../assets/Cart/FooterLast/Union.svg";
import ImgCreditCard from "../assets/Cart/FooterLast/CreditCard.png";


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
                                                    ? 'border-green-500 bg-green-100 cursor-pointer'
                                                    : 'border-gray-400 bg-gray-100 cursor-pointer hover:border-green-300'
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
                    <div className="flex flex-row gap-[16px] items-center">
                        <button
                            className={`w-[27px] h-[31px] rounded-[14px]  
                                            ${count === 1 ? "bg-gray-300" : "bg-green-700 cursor-pointer hover:bg-green-600 transition duration-300"}`}
                            onClick={() => setCount(prevCount => Math.max(prevCount - 1, 1))}
                            disabled={count === 1}
                        >
                            <p className="text-[12px] text-white font-[800] mb-[9px]">_</p>
                        </button>
                        <p className="w-[20px] flex justify-center">{count}</p>
                        <button
                            className={`w-[27px] h-[31px] rounded-[14px] 
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
                                    if (!selectedSize) {
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
                            <button
                                className="w-[40px] h-[40px] flex justify-center items-center bg-white text-green-700 border-1 rounded-[5px] hover:text-red-700 transition-colors cursor-pointer duration-300 font-[700]"
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"
                                     className="transition-colors"
                                >
                                    <path
                                        d="M10 18.8873C9.71527 18.8873 9.44077 18.7842 9.22684 18.5968C8.41888 17.8903 7.63992 17.2264 6.95267 16.6408L6.94916 16.6377C4.93423 14.9207 3.19427 13.4378 1.98364 11.9771C0.630341 10.3441 0 8.79578 0 7.10434C0 5.46097 0.563507 3.94485 1.58661 2.83508C2.62192 1.71219 4.04251 1.09375 5.58716 1.09375C6.74164 1.09375 7.79892 1.45874 8.72955 2.1785C9.19922 2.54181 9.62494 2.98645 10 3.5051C10.3752 2.98645 10.8008 2.54181 11.2706 2.1785C12.2012 1.45874 13.2585 1.09375 14.413 1.09375C15.9575 1.09375 17.3782 1.71219 18.4135 2.83508C19.4366 3.94485 20 5.46097 20 7.10434C20 8.79578 19.3698 10.3441 18.0165 11.9769C16.8059 13.4378 15.0661 14.9205 13.0515 16.6374C12.363 17.224 11.5828 17.8889 10.773 18.5971C10.5592 18.7842 10.2846 18.8873 10 18.8873ZM5.58716 2.26532C4.37363 2.26532 3.25882 2.74963 2.44781 3.62915C1.62476 4.52194 1.17142 5.75607 1.17142 7.10434C1.17142 8.52692 1.70013 9.79919 2.88559 11.2296C4.03137 12.6122 5.73563 14.0645 7.70889 15.7462L7.71255 15.7492C8.4024 16.3371 9.18442 17.0036 9.99832 17.7153C10.8171 17.0023 11.6003 16.3347 12.2916 15.7458C14.2647 14.0642 15.9688 12.6122 17.1146 11.2296C18.2999 9.79919 18.8286 8.52692 18.8286 7.10434C18.8286 5.75607 18.3752 4.52194 17.5522 3.62915C16.7413 2.74963 15.6264 2.26532 14.413 2.26532C13.524 2.26532 12.7078 2.54791 11.9872 3.10516C11.3449 3.60199 10.8975 4.23004 10.6352 4.66949C10.5003 4.89548 10.2629 5.03036 10 5.03036C9.73709 5.03036 9.49966 4.89548 9.36478 4.66949C9.10263 4.23004 8.65524 3.60199 8.01285 3.10516C7.29218 2.54791 6.47598 2.26532 5.58716 2.26532Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col mt-[20px] gap-[10px]">
                        <p className="text-[15px] text-gray-500"><span
                            className="text-gray-400">SKU:</span> 1995751877966
                        </p>
                        <p className="text-[15px] text-gray-500"><span
                            className="text-gray-400">Categories: </span>Potter Plants
                        </p>
                        <p className="text-[15px] text-gray-500"><span
                            className="text-gray-400">Tags: </span>Home, Garden, Plants
                        </p>
                        <div className="flex flex-row mt-[7px] gap-2">
                            <p className="text-[#3D3D3D] font-[500] text-[15px]">Share this products: </p>
                            <div className="flex flex-row justify-center items-center">
                                <button
                                    className="text-black hover:text-gray-400 cursor-pointer w-[15px] h-[15px] mr-2">
                                    <svg width="8" height="16" viewBox="0 0 8 16" fill="currentColor"
                                         className="transition-colors"
                                    >
                                        <path
                                            d="M2 5.33333H0V8H2V16H5.33333V8H7.73333L8 5.33333H5.33333V4.2C5.33333 3.6 5.46667 3.33333 6.06667 3.33333H8V0H5.46667C3.06667 0 2 1.06667 2 3.06667V5.33333Z"/>
                                    </svg>
                                </button>
                                <button
                                    className=" text-black hover:text-gray-400 cursor-pointer w-[15px] h-[15px] mr-3">
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.03186 13.0036C11.0699 13.0036 14.3718 8.00118 14.3718 3.66357C14.3718 3.52144 14.3689 3.38005 14.3624 3.2392C15.0033 2.77588 15.5605 2.19756 16 1.53953C15.4118 1.80085 14.7789 1.97682 14.1149 2.05616C14.7926 1.64981 15.313 1.0067 15.5585 0.24021C14.9241 0.616357 14.2217 0.889688 13.4742 1.03709C12.8749 0.399076 12.0218 0 11.0779 0C9.26483 0 7.79464 1.4702 7.79464 3.28233C7.79464 3.54001 7.82357 3.79041 7.87962 4.0308C5.1516 3.89377 2.73239 2.58735 1.11352 0.601253C0.831273 1.08622 0.668767 1.64999 0.668767 2.25106C0.668767 3.38988 1.24837 4.3953 2.12968 4.98363C1.59121 4.96707 1.08531 4.81894 0.642926 4.57291C0.642198 4.58656 0.642198 4.60039 0.642198 4.61476C0.642198 6.2047 1.77392 7.53204 3.27578 7.83285C3.00008 7.90801 2.71001 7.94841 2.41047 7.94841C2.19901 7.94841 1.99338 7.9273 1.79339 7.88927C2.21121 9.19332 3.42318 10.1425 4.86007 10.1693C3.73636 11.0499 2.32094 11.5745 0.783049 11.5745C0.518272 11.5745 0.256952 11.5594 0 11.529C1.45273 12.46 3.17769 13.0036 5.03186 13.0036Z"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="text-black hover:text-gray-400 cursor-pointer w-[15px] h-[15px] mr-3">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.33333 1.66667C3.33333 2.6 2.6 3.33333 1.66667 3.33333C0.733333 3.33333 0 2.6 0 1.66667C0 0.733333 0.733333 0 1.66667 0C2.6 0 3.33333 0.733333 3.33333 1.66667ZM3.33333 4.66667H0V15.3333H3.33333V4.66667ZM8.66667 4.66667H5.33333V15.3333H8.66667V9.73333C8.66667 6.6 12.6667 6.33333 12.6667 9.73333V15.3333H16V8.6C16 3.33333 10.0667 3.53333 8.66667 6.13333V4.66667Z"
                                        />
                                    </svg>
                                </button>
                                <button className="text-black hover:text-gray-400 cursor-pointer w-[15px] h-[15px]">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 1.46667C10.1333 1.46667 10.4 1.46667 11.2667 1.53333C13.4667 1.6 14.4667 2.66667 14.5333 4.8C14.6 5.66667 14.6 5.86667 14.6 8C14.6 10.1333 14.6 10.4 14.5333 11.2C14.4667 13.3333 13.4 14.4 11.2667 14.4667C10.4 14.5333 10.2 14.5333 8 14.5333C5.86667 14.5333 5.6 14.5333 4.8 14.4667C2.6 14.4 1.6 13.3333 1.53333 11.2C1.46667 10.3333 1.46667 10.1333 1.46667 8C1.46667 5.86667 1.46667 5.6 1.53333 4.8C1.6 2.66667 2.66667 1.6 4.8 1.53333C5.6 1.46667 5.86667 1.46667 8 1.46667ZM8 0C5.8 0 5.53333 0 4.73333 0.0666667C1.8 0.2 0.2 1.8 0.0666667 4.73333C0 5.53333 0 5.8 0 8C0 10.2 0 10.4667 0.0666667 11.2667C0.2 14.2 1.8 15.8 4.73333 15.9333C5.53333 16 5.8 16 8 16C10.2 16 10.4667 16 11.2667 15.9333C14.2 15.8 15.8 14.2 15.9333 11.2667C16 10.4667 16 10.2 16 8C16 5.8 16 5.53333 15.9333 4.73333C15.8 1.8 14.2 0.2 11.2667 0.0666667C10.4667 0 10.2 0 8 0ZM8 3.86667C5.73333 3.86667 3.86667 5.73333 3.86667 8C3.86667 10.2667 5.73333 12.1333 8 12.1333C10.2667 12.1333 12.1333 10.2667 12.1333 8C12.1333 5.73333 10.2667 3.86667 8 3.86667ZM8 10.6667C6.53333 10.6667 5.33333 9.46667 5.33333 8C5.33333 6.53333 6.53333 5.33333 8 5.33333C9.46667 5.33333 10.6667 6.53333 10.6667 8C10.6667 9.46667 9.46667 10.6667 8 10.6667ZM12.2667 2.8C11.7333 2.8 11.3333 3.2 11.3333 3.73333C11.3333 4.26667 11.7333 4.66667 12.2667 4.66667C12.8 4.66667 13.2 4.26667 13.2 3.73333C13.2 3.2 12.8 2.8 12.2667 2.8Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="mt-[95px]">
                <p className="font-[700] text-[17px] text-[#46A358]">Product Description</p>
                <hr className="text-gray-200 mt-[11px] mb-[15px]"/>
                <div>
                    <p className="font-[400] text-[14px] text-[#727272] leading-[24px]">
                        The ceramic cylinder planters come with a wooden stand to help elevate your plants off the
                        ground. The ceramic cylinder
                        planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor
                        sit amet, consectetur
                        adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate
                        rutrum. Morbi ornare
                        lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
                        nulla.
                        <br/>
                        Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis
                        eros eget velit. Donec ac
                        tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien
                        libero hendrerit est, sed commodo
                        augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem
                        et placerat vestibulum, metus nisi
                        posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a
                        nunc. Etiam gravida vehicula tellus,
                        in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help
                        elevate your plants off the ground.
                    </p>
                    <div className="mt-3">
                        <p className="font-[700] text-[14px] text-[#3D3D3D] leading-[24px]">Living Room:</p>
                        <p className="font-[400] text-[14px] text-[#727272] leading-[24px]">
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the
                            ground. The ceramic cylinder planters come with a wooden
                            stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </p>
                    </div>
                    <div className="mt-3">
                        <p className="font-[700] text-[14px] text-[#3D3D3D] leading-[24px]">Dining Room:</p>
                        <p className="font-[400] text-[14px] text-[#727272] leading-[24px]">
                            The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins,
                            they can help to
                            improve your mood, reduce stress and provide you with better sleep. Fill every room of your
                            home with houseplants and
                            their restorative qualities will improve your life.
                        </p>
                    </div>
                    <div className="mt-3">
                        <p className="font-[700] text-[14px] text-[#3D3D3D] leading-[24px]">Office:</p>
                        <p className="font-[400] text-[14px] text-[#727272] leading-[24px]">
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the
                            ground.
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the
                            ground.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-7">
                <div>
                    <p className="text-[17px] font-[700] text-green-700">Releted Products</p>
                    <hr className="text-gray-200 mt-[12px] mb-[44px]"/>
                </div>
                <div className="mb-[128px] flex items-center justify-center">
                    <SliderCart/>
                </div>
            </div>
            <footer>
                <div className="h-[250px] flex flex-row bg-gray-100 p-[25px] justify-between">
                    {/*1*/}
                    <div className="w-[225px] flex flex-col ">
                        <div className="relative w-[74px] h-[94px] mb-[17px]">
                            <img src={ImgFooter1_1} alt="img" className="absolute right-0 bottom-0"/>
                            <img src={ImgFooter1_2} alt="img" className="absolute left-[18px] top-[4px]"/>
                            <img src={ImgFooter1_3} alt="img" className="absolute left-[3px] bottom-0"/>
                        </div>
                        <p className="text-[17px] font-[700] text-gray-800">Garden Care</p>
                        <p className="text-[14px] font-[400] text-gray-600 mt-[6px]">
                            We are an online plant shop offering a wide range of cheap and trendy plants.
                        </p>
                    </div>
                    {/*2*/}
                    <div className="w-[225px] flex flex-col ">
                        <div className="relative w-[74px] h-[94px] mb-[17px]">
                            <img src={ImgFooter2_1} alt="img" className="absolute right-0 bottom-0"/>
                            <img src={ImgFooter2_2} alt="img" className="absolute left-[21px] top-[3px]"/>
                            <img src={ImgFooter1_3} alt="img" className="absolute left-[3px] bottom-0"/>
                        </div>
                        <p className="text-[17px] font-[700] text-gray-800">Plant Renovation</p>
                        <p className="text-[14px] font-[400] text-gray-600 mt-[6px]">
                            We are an online plant shop offering a wide range of cheap and trendy plants.
                        </p>
                    </div>
                    {/*3*/}
                    <div className="w-[225px] flex flex-col ">
                        <div className="relative w-[74px] h-[94px] mb-[17px]">
                            <img src={ImgFooter3_1} alt="img" className="absolute right-0 bottom-0"/>
                            <img src={ImgFooter3_2} alt="img" className="absolute left-[20px] top-[8px]"/>
                            <img src={ImgFooter1_3} alt="img" className="absolute left-[3px] bottom-0"/>
                        </div>
                        <p className="text-[17px] font-[700] text-gray-800">Watering Graden</p>
                        <p className="text-[14px] font-[400] text-gray-600 mt-[6px]">
                            We are an online plant shop offering a wide range of cheap and trendy plants.
                        </p>
                    </div>
                    {/*4*/}
                    <div className="w-[354px]">
                        <p className="text-[17px] font-[700] text-gray-800 mb-[18px]">Would you like to join
                            newsletters?</p>
                        <div className="mb-[17px] flex flex-row">
                            <input type="email"
                                   className="w-[75%] h-[40px] rounded-[3px] rounded-r-[0] border-2 border-green-700 indent-[10px] text-[14px] outline-none"
                                   placeholder="enter your email address..."
                            />
                            <button
                                className="w-[25%] h-[40px] bg-green-700 text-white hover:bg-green-600 cursor-pointer transition duration-300 font-[700]">
                                Join
                            </button>
                        </div>
                        <p className="text-[13px] leading-[22px] font-[400] text-gray-600">
                            We usually post offers and challenges in newsletter. We’re your online houseplant
                            destination.
                            We offer a wide range of houseplants and accessories shipped directly from our (green)house
                            to yours!
                        </p>
                    </div>
                </div>


                <div className="flex flex-row h-[88px] bg-green-50 justify-between items-center p-[25px] ">
                    {/*1*/}
                    <div className="w-[225px]">
                        <img src={ImgLogo} alt="Logo" className="w-[150px] h-[34px] mr-[140px]"/>
                    </div>
                    {/*2*/}
                    <div className="flex flex-row gap-[9px] w-[225px]">
                        <img src={ImgMap} alt="Map"/>
                        <p className="text-[13px] leading-[22px] font-[400]">
                            70 West Buckingham Ave. <br/>
                            Farmingdale, NY 11735
                        </p>
                    </div>
                    {/*3*/}
                    <div className="flex flex-row gap-[9px] w-[225px]">
                        <img src={ImgMessage} alt="Message"/>
                        <p className="text-[13px] leading-[22px] font-[400]">
                            contact@contact.com
                        </p>
                    </div>
                    {/*4*/}
                    <div className="flex flex-row gap-[9px] w-[354px]">
                        <img src={ImgPhone} alt="Phon"/>
                        <p className="text-[13px] leading-[22px] font-[400]">+77 77777 777 777</p>
                    </div>
                </div>


                <div className="flex flex-row h-[236px] bg-gray-100 p-[25px] justify-between">
                    {/*1*/}
                    <div className="w-[225px] flex flex-col ">
                        <p className="text-[17px] font-[700] text-gray-800 mb-[4px]">My Account</p>
                        <div className="flex flex-col gap-[4px] items-start">
                            <button
                                className="text-[14px] text-black leading-[30px] font-[400] cursor-pointer hover:text-green-600 transition duration-300">My
                                Account
                            </button>
                            <button
                                className="text-[14px] text-black leading-[30px] font-[400] cursor-pointer hover:text-green-600 transition duration-300">Our
                                stores
                            </button>
                            <button
                                className="text-[14px] text-black leading-[30px] font-[400] cursor-pointer hover:text-green-600 transition duration-300">Contact
                                us
                            </button>
                            <button
                                className="text-[14px] text-black leading-[30px] font-[400] cursor-pointer hover:text-green-600 transition duration-300">Career
                            </button>
                            <button
                                className="text-[14px] text-black leading-[30px] font-[400] cursor-pointer hover:text-green-600 transition duration-300">Specials
                            </button>
                        </div>
                    </div>
                    {/*2*/}
                    <div className="w-[225px] flex flex-col">
                        <p className="text-[17px] font-[700] text-gray-800 mb-[4px]">Help & Guide</p>
                        <div className="flex flex-col gap-[4px] items-start">
                            <button
                                className="text-[14px] text-black leading-[30px] font-[400] cursor-pointer hover:text-green-600 transition duration-300">Help
                                Center
                            </button>
                            <button
                                className="text-[14px] text-black leading-[30px] font-[400] cursor-pointer hover:text-green-600 transition duration-300">How
                                to Buy
                            </button>
                            <button
                                className="text-[14px] text-black leading-[30px] font-[400] cursor-pointer hover:text-green-600 transition duration-300">Shipping
                                & Delivery
                            </button>
                            <button
                                className="text-[14px] text-black leading-[30px] font-[400] cursor-pointer hover:text-green-600 transition duration-300">Product
                                Policy
                            </button>
                            <button
                                className="text-[14px] text-black leading-[30px] font-[400] cursor-pointer hover:text-green-600 transition duration-300">How
                                to Return
                            </button>
                        </div>
                    </div>
                    {/*3*/}
                    <div className="w-[225px] flex flex-col ">
                        <p className="text-[17px] font-[700] text-gray-800 mb-[4px]">Categories</p>
                        <div className="flex flex-col gap-[4px] items-start">
                            <button
                                className="text-[14px] text-black leading-[30px] font-[400] cursor-pointer hover:text-green-600 transition duration-300">House
                                Plants
                            </button>
                            <button
                                className="text-[14px] text-black leading-[30px] font-[400] cursor-pointer hover:text-green-600 transition duration-300">Potter
                                Plants
                            </button>
                            <button
                                className="text-[14px] text-black leading-[30px] font-[400] cursor-pointer hover:text-green-600 transition duration-300">Seeds
                            </button>
                            <button
                                className="text-[14px] text-black leading-[30px] font-[400] cursor-pointer hover:text-green-600 transition duration-300">Small
                                Plants
                            </button>
                            <button
                                className="text-[14px] text-black leading-[30px] font-[400] cursor-pointer hover:text-green-600 transition duration-300">Accessories
                            </button>
                        </div>
                    </div>
                    {/*4*/}
                    <div className="w-[354px]">
                        <p className="text-[17px] font-[700] text-gray-800 mb-[20px]">Social Media</p>
                        <div className="flex flex-row gap-[10px] mb-[33px]">
                            <button
                                className="w-[30px] h-[30px] border-1 border-[#46A35833] rounded-[5px] flex justify-center items-center cursor-pointer hover:bg-gray-300 transition duration-300">
                                <img src={ImgFacebook} alt="Facebook"/></button>
                            <button
                                className="w-[30px] h-[30px] border-1 border-[#46A35833] rounded-[5px] flex justify-center items-center cursor-pointer hover:bg-gray-300 transition duration-300">
                                <img src={ImgInstagram} alt="Instagram"/></button>
                            <button
                                className="w-[30px] h-[30px] border-1 border-[#46A35833] rounded-[5px] flex justify-center items-center cursor-pointer hover:bg-gray-300 transition duration-300">
                                <img src={ImgLinkedin} alt="Linkedin"/></button>
                            <button
                                className="w-[30px] h-[30px] border-1 border-[#46A35833] rounded-[5px] flex justify-center items-center cursor-pointer hover:bg-gray-300 transition duration-300">
                                <img src={ImgTwitter} alt="Twitter"/></button>
                            <button
                                className="w-[30px] h-[30px] border-1 border-[#46A35833] rounded-[5px] flex justify-center items-center cursor-pointer hover:bg-gray-300 transition duration-300">
                                <img src={ImgUnion} alt="Union"/></button>
                        </div>
                        <p className="text-[17px] font-[700] text-gray-800 mb-[13px]">We accept</p>
                        <img src={ImgCreditCard} alt="CreditCard"/>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-center mt-[8px]">
                    <p className="text-[14px] leading-[30px] font-[400]">© 2021 GreenShop. All Rights Reserved.</p>
                </div>
            </footer>
            {showAlert && <Alert1 onClose={() => setShowAlert(false)}/>}
        </div>
    )
}

export default ProductInfo;