import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
    size: string | null;
}

interface  CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    updateCart: (id: number, newQuantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart =() => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export const  CartProvider = ({children}: {children: ReactNode}) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        //загрузка из localStorage при первом рендеринге
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    //сохраняем корзину из localStorage при изменении cart
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    const updateCart = (id: number, newQuantity: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
            )
        );
    };

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            // Нормализуем размер (если не выбран, сохраняем null)
            const normalizedItem = {
                ...item,
                size: item.size || null
            };

            // Ищем существующий товар с учетом размера
            const existingItem = prevCart.find(cartItem =>
                cartItem.id === normalizedItem.id &&
                cartItem.size === normalizedItem.size
            );

            if (existingItem) {
                // Обновляем количество существующего товара
                return prevCart.map(cartItem =>
                    cartItem.id === normalizedItem.id && cartItem.size === normalizedItem.size
                        ? { ...cartItem, quantity: cartItem.quantity + normalizedItem.quantity }
                        : cartItem
                );
            }

            // Добавляем новый товар
            return [...prevCart, normalizedItem];
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((item) => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, updateCart}}>
            {children}
        </CartContext.Provider>
    )
};


