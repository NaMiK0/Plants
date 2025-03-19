import React from "react";

interface ProductFilterProps {
    selectedCategory: string;
    selectedSize: string;
    children: React.ReactNode;
}

const ProductFilter: React.FC<ProductFilterProps> = ({selectedCategory, selectedSize, children}) => {


    const productsArray = React.Children.toArray(children);
    
    const products = productsArray.filter((child:any) => {
        const filteredCategory = selectedCategory === "All Plants" || child.props.category === selectedCategory;
        const filteredSize = selectedSize === "All" || child.props.size === selectedSize;

        return filteredCategory && filteredSize;
    } )


    return (
        <div className="grid grid-cols-3 gap-[40px]">
            {products.length > 0 ? products : <p>Nothing to show!</p>}
        </div>
    )
}


export default ProductFilter;