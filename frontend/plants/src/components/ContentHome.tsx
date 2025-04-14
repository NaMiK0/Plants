import CardOrder from "./CardOrder.tsx";
import ProductFilter from "./ProductFilter.tsx";
import CategoryFilter from "./CategoryFilter.tsx";
import { useState } from "react";
import ImgArrow from "../assets/Cart/right-arrow.png"
import ImgBlog1 from "../assets/Home-blog/Blog1.svg"
import ImgBlog2 from "../assets/Home-blog/Blog2.svg"
import ImgBlog3 from "../assets/Home-blog/Blog3.svg"
import ImgBlog4 from "../assets/Home-blog/Blog4.svg"
import ImgArrowBlog from "../assets/Home-blog/ArrowBlog.svg"
import DropdownMenuHome from "./DropdownMenuHome.tsx";
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
import {products} from "./ProductSearch/products.tsx";




export default function ContentHome() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All Plants");
    const [selectedSize, setSelectedSize] = useState<string>("All");
    const [sortOrder, setSortOrder] = useState<"default" | "asc" | "desc">("default");


    //Пагинация
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // Количество карточек на одной странице





    //определяем индексы текущих отображаемых товаров
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    //фун-ия смены страницы
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="mt-[46px] mb-[146px] flex flex-row gap-[50px]">
                <section className="w-[30%]">

                    <CategoryFilter setSelectedCategory={setSelectedCategory} setSelectedSize={setSelectedSize}/>
                </section>
                <section className="w-[70%] flex flex-col">
                    <nav className="flex flex-row justify-between mb-[38px]">
                        <div className="flex flex-row items-center gap-[40px]">
                            {["All Plants", "New Arrivals", "Sale"].map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`cursor-pointer pb-2 transition-all duration-200 ${
                                        selectedCategory === category ? "border-b-2 border-green-500 font-semibold" : "text-gray-500"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div>
                            <DropdownMenuHome setSortOrder={setSortOrder}/>
                        </div>
                    </nav>

                    <div className="h-[1200px] border-b-2 border-green-600">
                        <ProductFilter selectedCategory={selectedCategory} selectedSize={selectedSize}
                                       sortOrder={sortOrder}>
                            <div className="grid grid-cols-3 ">
                                {currentProducts.map((product) => (
                                    <CardOrder
                                        key={product.id}
                                        id={product.id}
                                        category={product.category}
                                        image={product.image}
                                        title={product.title}
                                        price={product.price}
                                        size={product.size}
                                    />
                                ))}
                            </div>
                        </ProductFilter>
                    </div>

                    {/*Пагинация*/}
                    <div className="flex justify-end mt-6">
                        <ul className="flex items-center gap-2">
                            {Array.from({length: Math.ceil(products.length / itemsPerPage)}, (_, index) => (
                                <li id="12" key={index} className="flex flex-row">
                                    <button
                                        onClick={() => paginate(index + 1)}
                                        className={`w-[35px] h-[35px] flex items-center justify-center border rounded cursor-pointer ${
                                            currentPage === index + 1 ? "bg-green-600 text-white" : "border-gray-300 text-gray-700"
                                        }`}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                            <button
                                className={`w-[35px] h-[35px] flex items-center justify-center border rounded border-gray-300 text-gray-700
                            ${(currentPage < totalPages) ? " cursor-pointer bg-white" : "bg-gray-300"}`}
                                onClick={() => {
                                    if (currentPage < totalPages) {
                                        paginate(currentPage + 1);
                                    }
                                }}
                                disabled={currentPage === totalPages}
                            ><img className="w-[11px]" src={ImgArrow} alt="Arrow"/>
                            </button>
                        </ul>
                    </div>
                </section>
            </div>

            <div className="flex flex-col items-center mb-[100px]">
                <p className="text-[30px] font-[700] text-[#3D3D3D] mb-[15px]">Our Blog Posts</p>
                <p className="text-[14px] text-[#727272] mb-[35px]">We are an online plant shop offering a wide range of
                    cheap and trendy plants. </p>
                <div className="flex flex-row gap-[44px]">
                    {/*1*/}
                    <div>
                        <div className="h-[362px] w-[268px] bg-gray-100">
                            <img className="" src={ImgBlog1} alt="Blog1"/>
                            <div className="mt-[9px] mr-[11px] mb-[12px] ml-[15px]">
                                <p className="text-[14px] font-[500] text-[#46A358] mb-[4px]">September 12 I Read in 6
                                    minutes</p>
                                <p className="text-[20px] leading-[26px] font-[700] text-[#3D3D3D] mb-[4px]">Cactus &
                                    Succulent <br/>Care
                                    Tips</p>
                                <p className="text-[14px] leading-[22px] font-[400] text-[#727272] mb-[9px]">Cacti are
                                    succulents are
                                    easy care plants for any home or patio. </p>
                                <button
                                    className="flex flex-row gap-1 justify-center items-center text-[14px] leading-[16px] font-[500] text-[#3D3D3D] hover:text-[#46A358]  transition duration-300 cursor-pointer"
                                >
                                    Read More <img className="mt-[3px]" src={ImgArrowBlog} alt="Arrow"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*2*/}
                    <div>
                        <div className="h-[362px] w-[268px] bg-gray-100">
                            <img className="" src={ImgBlog2} alt="Blog2"/>
                            <div className="mt-[9px] mr-[11px] mb-[12px] ml-[15px]">
                                <p className="text-[14px] font-[500] text-[#46A358] mb-[4px]">September 13 I Read in 2
                                    minutes</p>
                                <p className="text-[20px] leading-[26px] font-[700] text-[#3D3D3D] mb-[4px]">
                                    Top 10 Succulents for <br/>
                                    Your Home</p>
                                <p className="text-[14px] leading-[22px] font-[400] text-[#727272] mb-[9px]">
                                    Best in hanging baskets. Prefers medium to high light.
                                </p>
                                <button
                                    className="flex flex-row gap-1 justify-center items-center text-[14px] leading-[16px] font-[500] text-[#3D3D3D] hover:text-[#46A358]  transition duration-300 cursor-pointer"
                                >
                                    Read More <img className="mt-[3px]" src={ImgArrowBlog} alt="Arrow"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*3*/}
                    <div>
                        <div className="h-[362px] w-[268px] bg-gray-100">
                            <img className="" src={ImgBlog3} alt="Blog3"/>
                            <div className="mt-[9px] mr-[11px] mb-[12px] ml-[15px]">
                                <p className="text-[14px] font-[500] text-[#46A358] mb-[4px]">September 12 I Read in 6
                                    minutes</p>
                                <p className="text-[20px] leading-[26px] font-[700] text-[#3D3D3D] mb-[4px]">
                                    Cacti & Succulent <br/>
                                    Care Tips
                                </p>
                                <p className="text-[14px] leading-[22px] font-[400] text-[#727272] mb-[9px]">
                                    Cacti and succulents thrive in containers and because most are..
                                </p>
                                <button
                                    className="flex flex-row gap-1 justify-center items-center text-[14px] leading-[16px] font-[500] text-[#3D3D3D] hover:text-[#46A358]  transition duration-300 cursor-pointer"
                                >
                                    Read More <img className="mt-[3px]" src={ImgArrowBlog} alt="Arrow"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*4*/}
                    <div>
                        <div className="h-[362px] w-[268px] bg-gray-100">
                            <img className="" src={ImgBlog4} alt="Blog4"/>
                            <div className="mt-[9px] mr-[11px] mb-[12px] ml-[15px]">
                                <p className="text-[14px] font-[500] text-[#46A358] mb-[4px]">September 12 I Read in 6
                                    minutes</p>
                                <p className="text-[20px] leading-[26px] font-[700] text-[#3D3D3D] mb-[4px]">
                                    Best Houseplants <br/>
                                    Room by Room
                                </p>
                                <p className="text-[14px] leading-[22px] font-[400] text-[#727272] mb-[9px]">
                                    The benefits of houseplants are endless. In addition to..
                                </p>
                                <button
                                    className="flex flex-row gap-1 justify-center items-center text-[14px] leading-[16px] font-[500] text-[#3D3D3D] hover:text-[#46A358] transition duration-300 cursor-pointer"
                                >
                                    Read More <img className="mt-[3px]" src={ImgArrowBlog} alt="Arrow"/>
                                </button>
                            </div>
                        </div>
                    </div>
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

        </>
    );
}

