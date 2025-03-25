import ImgSearch from "../../assets/Header/search.png"
import products from "./products.ts"
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence  } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Product {
    id: number;
    title: string;
}

export default function ProductSearch() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const searchRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

    const filteredProducts: Product[] = searchQuery
        ? products.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    const handleProductClick = (id: number) => {
        setSearchQuery("");
        setIsSearchOpen(false);
        navigate(`/productinfo/${id}`);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target as Node)
            ) {
                setIsSearchOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div className="relative" ref={searchRef}>
            {/* Кнопка поиска */}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="cursor-pointer relative z-10">
                <img src={ImgSearch} alt="Search" className="w-[30px]" />
            </button>

            {/* Поле поиска */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{width: 0, opacity: 0}}
                        animate={{width: isSearchOpen ? 200 : 0, opacity: isSearchOpen ? 1 : 0}}
                        exit={{width: 0, opacity: 0}}
                        transition={{duration: 0.2, ease: "easeInOut"}}
                        className="absolute top-[-5px] right-9 bg-white rounded-lg w-[200px] z-10"
                    >
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-[4px] focus:outline-none "
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {/* Список подсказок */}
                        {filteredProducts.length > 0 && (
                            <ul className="mt-2 bg-white border rounded-md shadow-md max-h-60 overflow-y-auto">
                                {filteredProducts.map((product) => (
                                    <li
                                        key={product.id}
                                        className="p-2 cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleProductClick(product.id)}
                                    >
                                        {product.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}