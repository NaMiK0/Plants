import React from "react";

interface ProductFilterProps {
    selectedCategory: string;
    selectedSize: string;
    children: React.ReactNode;
    sortOrder: "default" | "asc" | "desc";
}

const ProductFilter: React.FC<ProductFilterProps> = ({selectedCategory, selectedSize, children, sortOrder}) => {
    const productsArray = React.Children.toArray(children);

    const filteredProducts = productsArray.filter((child:any) => {
        const filteredCategory = selectedCategory === "All Plants" || child.props.category.includes(selectedCategory);
        const filteredSize = selectedSize === "All" || child.props.size === selectedSize;
        return filteredCategory && filteredSize;
    })

    const sortedProducts = [...filteredProducts].sort((a:any, b:any) => {
        if (sortOrder === "asc") return a.props.price - b.props.price;
        if (sortOrder === "desc") return b.props.price - a.props.price;
        return 0;
    })

    const categoryCount = filteredProducts.length;

    const sizeFilteredProducts = filteredProducts.filter((child:any) => child.props.size === selectedSize);
    const sizeCount = sizeFilteredProducts.length;


    return (
        <div>
            <p>Category Count: ({categoryCount})</p>
            <p>Size Count: ({sizeCount})</p>

            <div className="grid grid-cols-3 gap-[40px]">
                {sortedProducts.length > 0 ? sortedProducts :
                    <p>Nothing to show!</p>}
            </div>
        </div>
    )
}


export default ProductFilter;