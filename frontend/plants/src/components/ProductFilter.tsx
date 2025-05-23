import React from "react";

interface ProductFilterProps {
    selectedCategory: string;
    selectedSize: string;
    children: React.ReactNode;
    sortOrder: "default" | "asc" | "desc";
}

const ProductFilter: React.FC<ProductFilterProps> = ({selectedCategory, selectedSize, children, sortOrder}) => {
    const productsArray = React.Children.toArray(children)
        .flatMap((child: any) => child.props?.children || []);

    const filteredProducts = productsArray.filter((child:any) => {
        console.log("Child object:", child);

        console.log("Filtering:", child.props.title, "Categories:", child.props.category);
        const matchesCategory = selectedCategory === "All Plants" || (Array.isArray(child.props.category) && child.props.category.includes(selectedCategory));
        const matchesSize = selectedSize === "All" || child.props.size === selectedSize;
        return matchesCategory && matchesSize;
    })

    const sortedProducts = [...filteredProducts].sort((a:any, b:any) => {
        if (sortOrder === "asc") return a.props.price - b.props.price;
        if (sortOrder === "desc") return b.props.price - a.props.price;
        return 0;
    })


    return (
        <div className="grid grid-cols-3 gap-[40px]">
            {sortedProducts.length > 0 ? sortedProducts : <p>Nothing to show!</p>}
        </div>
    )
}


export default ProductFilter;