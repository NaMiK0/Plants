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

    const [minPrice, setMaxPrice] = useState(39);
    const [maxPrice, setMinPrice] = useState(199);

    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        const value = Number(event.target.value);
        if(value < maxPrice) setMinPrice(value);
    };

    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        const value = Number(event.target.value);
        if(value > minPrice) setMaxPrice(value);
    };

    return (
        <div className="flex flex-col gap-4 mb-4">
            {categories.map(category => (
                <button
                    key={category}
                    className="px-4 py-2 border bg-blue-200"
                    onClick={() => setSelectedCategory(category)}>
                    {category}
                </button>
            ))}

            {size.map(size => (
                <button
                key={size}
                className="px-4 py-2 border"
                onClick={() => setSelectedSize(size)}>
                    {size}
                </button>
            ))}
            <div className="flex flex-col gap-4 mt-4 w-full max-w-[300px]">
                <h1>Price Range</h1>
                <div className="relative w-full">
                    <div className="absolute top-1/2 w-full h-1 bg-gray-300 rounded-md"></div>
                    <div
                        className="absolute top-1/2 h-1 bg-green-500 rounded-md"
                        style={{
                            left: `${((minPrice - 39) / (199 - 39)) * 100}%`,
                            right: `${100 - ((maxPrice - 39) / (199 - 39)) * 100}%`,
                        }}
                    ></div>

                    <input
                        type="range"
                        className="absolute w-full appearance-none bg-transparent pointer-events-none"
                        value={minPrice}
                        min="39"
                        max="199"
                        onChange={handleMinChange}
                        style={{ zIndex: 2}}
                    />

                    <input
                        type="range"
                        className="absolute w-full appearance-none bg-transparent pointer-events-non"
                        value={maxPrice}
                        min="39"
                        max="199"
                        onChange={handleMaxChange}
                        style={{ zIndex: 1}}
                    />

                </div>
                <p>Price: <span className="font-bold">${minPrice}</span> - <span
                    className="font-bold">${maxPrice}</span></p>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded">Filter
                </button>
            </div>
        </div>
    )
}

export default CategoryFilter