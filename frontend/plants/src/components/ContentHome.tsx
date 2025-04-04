import CardOrder from "./CardOrder.tsx";
import ProductFilter from "./ProductFilter.tsx";
import CategoryFilter from "./CategoryFilter.tsx";
import { useState } from "react";
import ImgCard1 from "../assets/Cards/card1.png";
import ImgCard2 from "../assets/Cards/card2.png";
import ImgCard3 from "../assets/Cards/card3.png";
import ImgCard4 from "../assets/Cards/card4.png";
import ImgCard5 from "../assets/Cards/card5.png";
import ImgCard6 from "../assets/Cards/card6.png";
import ImgCard7 from "../assets/Cards/card7.png";
import ImgCard8 from "../assets/Cards/card8.png";
import ImgCard9 from "../assets/Cards/card9.png";
import DropdownMenuHome from "./DropdownMenuHome.tsx";



export default function ContentHome() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All Plants");
    const [selectedSize, setSelectedSize] = useState<string>("All");
    const [sortOrder, setSortOrder] = useState<"default" | "asc" | "desc">("default");


    //Пагинация
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // Количество карточек на одной странице



    const products = [
        { id: 1, category: ["House Plants", "New Arrivals"], image: ImgCard1, title: "Aluminum Plant", price: 179, size: "Small" },
        { id: 2, category: ["Potter Plants"], image: ImgCard2, title: "Barberton Daisy", price: 119, size: "Medium" },
        { id: 3, category: ["Seeds", "New Arrivals"], image: ImgCard3, title: "Angel Wing Begonia", price: 169, size: "Large" },
        { id: 4, category: ["Small Plants"], image: ImgCard4, title: "African Violet", price: 199, size: "Medium" },
        { id: 5, category: ["Big Plants", "Sale"], image: ImgCard5, title: "Beach Spider Lily", price: 129, size: "Small" },
        { id: 6, category: ["Succulents", "New Arrivals", "Sale"], image: ImgCard6, title: "Blushing Bromeliad", price: 139, size: "Large" },
        { id: 7, category: ["Terrariums", "Sale"], image: ImgCard7, title: "Bird's Nest Fern", price: 99, size: "Large" },
        { id: 8, category: ["Gardening", "New Arrivals"], image: ImgCard8, title: "Broadleaf Lady Palm", price: 59, size: "Small" },
        { id: 9, category: ["Accessories"], image: ImgCard9, title: "Chinese Evergreen", price: 39, size: "Medium" },
        { id: 10, category: ["House Plants", "New Arrivals"], image: ImgCard1, title: "Aluminum Plant", price: 179, size: "Small" },
        { id: 11, category: ["House Plants", "New Arrivals"], image: ImgCard1, title: "Aluminum Plant", price: 179, size: "Small" },
        { id: 12, category: ["House Plants", "New Arrivals"], image: ImgCard1, title: "Aluminum Plant", price: 179, size: "Small" },
        { id: 13, category: ["House Plants", "New Arrivals"], image: ImgCard1, title: "Aluminum Plant", price: 179, size: "Small" },
        { id: 14, category: ["House Plants", "New Arrivals"], image: ImgCard1, title: "Aluminum Plant", price: 179, size: "Small" },
        { id: 15, category: ["House Plants", "New Arrivals"], image: ImgCard1, title: "Aluminum Plant", price: 179, size: "Small" },
        // { id: 16, category: ["House Plants", "New Arrivals"], image: ImgCard1, title: "Aluminum Plant", price: 179, size: "Small" },
    ];


    //определяем индексы текущих отображаемых товаров
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    //фун-ия смены страницы
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="mt-[46px] flex flex-row gap-[50px]">
            <section className="w-[30%]">

                <CategoryFilter setSelectedCategory={setSelectedCategory} setSelectedSize={setSelectedSize} />
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
                    <ProductFilter selectedCategory={selectedCategory} selectedSize={selectedSize} sortOrder={sortOrder}>
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
                <div className="flex justify-center mt-6">
                    <ul className="flex items-center gap-2">
                        {Array.from({ length: Math.ceil(products.length / itemsPerPage) }, (_, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => paginate(index + 1)}
                                    className={`w-8 h-8 flex items-center justify-center border rounded cursor-pointer ${
                                        currentPage === index + 1 ? "bg-green-600 text-white" : "border-gray-300 text-gray-700"
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

            </section>
        </div>
    );
}