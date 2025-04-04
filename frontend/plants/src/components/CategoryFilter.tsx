import React from "react";
import {useState} from "react";
import PriceFilter from "./PriceFilter.tsx";

interface CategoryFilterProps {
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
    setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
    categoryCount: Record<string, number>;
    sizeCount: Record<string, number>;
    onApplyFilter: (min: number, max: number) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ setSelectedCategory, setSelectedSize, categoryCount, sizeCount, onApplyFilter })=> {

    const categories=["All Plants", "House Plants", "Potter Plants", "Seeds", "Small" +
    " Plants", "Big Plants", "Succulents", "Terrariums", "Gardening", "Accessories"];

    const size = ["All", "Small", "Medium", "Large"];

    const [activeCategory, setActiveCategory] = useState<string>("All Plants");
    const [activeSize, setActiveSize] = useState<string>("All");

    return (
        <div className="flex flex-col gap-4 bg-gray-100 pl-4 pt-2">
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
                        <p className="mb-4 text-gray-600">({categoryCount[category] || 0 })</p>
                    </button>
                ))}
            </div>

            <PriceFilter onApplyFilter={onApplyFilter}/>

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
                            <p className="mb-4 text-gray-600">({sizeCount[size] || 0 })</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryFilter