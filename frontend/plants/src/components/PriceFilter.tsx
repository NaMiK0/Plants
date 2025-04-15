import React, { useState } from "react";

interface PriceFilterProps {
    onApplyFilter: (min: number, max: number) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onApplyFilter }) => {
    const [minPrice, setMinPrice] = useState<number | "">("");
    const [maxPrice, setMaxPrice] = useState<number | "">("");

    const handlePriceBlur = () => {
        if (minPrice !== "" && maxPrice !== "" && minPrice > maxPrice) {
            setMinPrice(maxPrice);
            setMaxPrice(minPrice);
        }
    };

    const handleFilterApply = () => {
        onApplyFilter(minPrice === "" ? 0 : minPrice, maxPrice === "" ? 100000 : maxPrice);
    };

    return (
        <div className="flex flex-col gap-4 mt-4 w-full">
            <h2 className="font-semibold text-lg mb-2">Price, ₽</h2>
            <div className="ml-2 flex gap-2">
                <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value === "" ? "" : Number(e.target.value))}
                    className="border p-2 w-30 text-center ml-2"
                    onBlur={handlePriceBlur}
                    placeholder="from"
                    min="0"
                    max="1000000"
                />
                <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))}
                    className="border p-2 w-30 text-center ml-2"
                    onBlur={handlePriceBlur}
                    placeholder="to"
                    min="0"
                    max="1000000"
                />
            </div>
            <button
                onClick={handleFilterApply}
                className="bg-green-500 text-white px-4 py-2 ml-4 rounded w-[150px]"
            >
                Apply Filter
            </button>
        </div>
    );
};

export default PriceFilter;