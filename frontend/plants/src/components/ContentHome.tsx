import CardOrder from "./CardOrder.tsx";
import ProductFilter from "./ProductFilter.tsx";
import CategoryFilter from "./CategoryFilter.tsx";
import {useState} from "react";
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
import SaleBanner from "./SaleBanner.tsx";


export default function ContentHome() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All Plants");
    const [selectedSize, setSelectedSize] = useState<string>("All");
    const [sortOrder, setSortOrder] = useState<"default" | "asc" | "desc">("default");
    const [categoryCount, setCategoryCount] = useState({});
    const [sizeCount, setSizeCount] = useState({});
    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 100000 });


    return (
        <div className="mt-[46px] flex flex-row gap-[50px]">
            <section className="w-[30%]">
                <CategoryFilter setSelectedCategory={setSelectedCategory} setSelectedSize={setSelectedSize} categoryCount={categoryCount} sizeCount={sizeCount} onApplyFilter={setPriceRange} />
                <SaleBanner/>
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
                    <ProductFilter
                        selectedCategory={selectedCategory}
                        selectedSize={selectedSize}
                        sortOrder={sortOrder}
                        onCountUpdate={(categoryData, sizeData) =>{
                            setCategoryCount(categoryData);
                            setSizeCount(sizeData);
                        }}
                        priceRange={priceRange}
                    >
                        <CardOrder
                            id={1}
                            category={["House Plants", "New Arrivals"]}
                            image={ImgCard1}
                            title="Aluminum Plant"
                            price={179}
                            size="Small"
                        />
                        <CardOrder
                            id={2}
                            category={["Potter Plants"]}
                            image={ImgCard2}
                            title="Barberton Daisy"
                            price={119}
                            size="Medium"
                        />
                        <CardOrder
                            id={3}
                            category={["Seeds", "New Arrivals"]}
                            image={ImgCard3}
                            title="Angel Wing Begonia"
                            price={169}
                            size="Large"
                        />
                        <CardOrder
                            id={4}
                            category={["Small Plants"]}
                            image={ImgCard4}
                            title="African Violet"
                            price={199}
                            size="Medium"
                        />
                        <CardOrder
                            id={5}
                            category={["Big Plants", "Sale"]}
                            image={ImgCard5}
                            title="Beach Spider Lily"
                            price={129}
                            size="Small"
                        />
                        <CardOrder
                            id={6}
                            category={["Succulents", "New Arrivals", "Sale"]}
                            image={ImgCard6}
                            title="Blushing Bromeliad"
                            price={139}
                            size="Large"
                        />
                        <CardOrder
                            id={7}
                            category={["Terrariums", "Sale"]}
                            image={ImgCard7}
                            title="Bird's Nest Fern"
                            price={99}
                            size="Large"
                        />
                        <CardOrder
                            id={8}
                            category={["Gardening", "New Arrivals"]}
                            image={ImgCard8}
                            title="Broadleaf Lady Palm"
                            price={59}
                            size="Small"
                        />
                        <CardOrder
                            id={9}
                            category={["Accessories"]}
                            image={ImgCard9}
                            title="Chinese Evergreen"
                            price={39}
                            size="Medium"
                        />
                    </ProductFilter>
            </section>
        </div>
    );
}