import React from "react";
import {useState} from "react";

interface CategoryFilterProps {
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
    setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ setSelectedCategory, setSelectedSize })=> {

    const categories=["All Plants", "House Plants", "Potter Plants", "Seeds", "Small" +
    " Plants", "Big Plants", "Succulents", "Terrariums", "Gardening", "Accessories"];

    const size = ["All", "Small", "Medium", "Large"];

    const [minPrice, setMinPrice] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState<string>("");
    const [activeCategory, setActiveCategory] = useState<string>("All Plants");
    const [activeSize, setActiveSize] = useState<string>("All");

    const handlePriceBlur = () => {
        if (minPrice !== "" && maxPrice !== "" && Number(minPrice) > Number(maxPrice)) {
            setMinPrice(maxPrice);
            setMaxPrice(minPrice);
        }
    };

    return (
        <div className="flex flex-col gap-4 mb-4 bg-gray-100 pl-4 pt-2">
            <h2 className="font-semibold text-lg mb-2">Categories</h2>
            <div className="ml-4 flex flex-col gap-2">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`px-4 py-2 flex justify-between items-center ${activeCategory === category ? "text-green-600" : ""}`}
                        onClick={() => {
                            setSelectedCategory(category);
                            setActiveCategory(category);
                        }}>
                        <span>{category}</span>
                        <p className="mb-4 text-gray-600">({})</p>
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-4 mt-4 w-full ">
                <h2 className="font-semibold text-lg mb-2">Price, ₽</h2>
                <div className="ml-2 flex gap-2">
                    <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        onBlur={handlePriceBlur}
                        className="border p-2 w-30 text-center ml-2"
                        placeholder="from"
                        min="0"
                        max="1000000"
                    />
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        onBlur={handlePriceBlur}
                        className="border p-2 w-30 text-center ml-2"
                        placeholder="to"
                        min="0"
                        max="1000000"
                    />
                </div>
                <button
                    className="bg-green-500 text-white px-4 py-2 ml-4 rounded w-[150px]"
                >
                    Filter
                </button>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-lg mb-2">Size</h2>
                <div className="ml-4 flex flex-col gap-2">
                    {size.map(size => (
                        <button
                            key={size}
                            className={`px-4 py-2 flex justify-between items-center ${activeSize === size ? "text-green-600" : ""}`}
                            onClick={() => {
                                setSelectedSize(size)
                                setActiveSize(size)
                            }}>
                            <span>{size}</span>
                            <p className="mb-4 text-gray-600">({})</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryFilter