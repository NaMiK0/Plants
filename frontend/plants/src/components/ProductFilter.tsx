import React from "react";

interface ProductFilterProps {
    selectedCategory: string;
    selectedSize: string;
    children: React.ReactNode;
    sortOrder: "default" | "asc" | "desc";
    onCountUpdate: (categoryData: Record<string, number>, sizeData: Record<string, number>) => void;
    priceRange: { min: number, max: number };
}

const ProductFilter: React.FC<ProductFilterProps> = ({selectedCategory, selectedSize, children, sortOrder, onCountUpdate, priceRange}) => {
    const productsArray = React.Children.toArray(children);

    const categoryCount: Record<string, number> = {};
    const sizeCount: Record<string, number> = {};

    const filteredProducts = productsArray.filter((child:any) => {
        child.props.category.forEach((cat: string) => {
            categoryCount[cat] = (categoryCount[cat] || 0) + 1;
        });

        sizeCount[child.props.size] = (sizeCount[child.props.size] || 0) + 1;

        const filteredPrice = child.props.price >= priceRange.min && child.props.price <= priceRange.max;
        const filteredCategory = selectedCategory === "All Plants" || child.props.category.includes(selectedCategory);
        const filteredSize = selectedSize === "All" || child.props.size === selectedSize;
        return filteredCategory && filteredSize && filteredPrice;
    })


    React.useEffect(() => {
        onCountUpdate(categoryCount, sizeCount);
    }, [filteredProducts]);

    const sortedProducts = [...filteredProducts].sort((a:any, b:any) => {
        if (sortOrder === "asc") return a.props.price - b.props.price;
        if (sortOrder === "desc") return b.props.price - a.props.price;
        return 0;
    })


    return (
        <div className="grid grid-cols-3 gap-[40px]">
            {sortedProducts.length > 0 ? sortedProducts :
                <p>Nothing to show!</p>}
        </div>
    )
}


export default ProductFilter;