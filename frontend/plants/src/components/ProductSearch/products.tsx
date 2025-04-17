import ImgCard1 from "../../assets/Cards/card1.png";
import ImgCard2 from "../../assets/Cards/card2.png";
import ImgCard3 from "../../assets/Cards/card3.png";
import ImgCard4 from "../../assets/Cards/card4.png";
import ImgCard5 from "../../assets/Cards/card5.png";
import ImgCard6 from "../../assets/Cards/card6.png";
import ImgCard7 from "../../assets/Cards/card7.png";
import ImgCard8 from "../../assets/Cards/card8.png";
import ImgCard9 from "../../assets/Cards/card9.png";
export interface Product {
    id: number;
    category: string[];
    image: string;
    title: string;
    price: number;
    size: string[];
}

export const products: Product[] = [
    { id: 1, category: ["House Plants", "New Arrivals"], image: ImgCard1, title: "Aluminum Plant", price: 179, size: ["Small", "Medium"] },
    { id: 2, category: ["Potter Plants"], image: ImgCard2, title: "Barberton Daisy", price: 119, size: ["Medium"] },
    { id: 3, category: ["Seeds", "New Arrivals"], image: ImgCard3, title: "Angel Wing Begonia", price: 169, size: ["Large"] },
    { id: 4, category: ["Small Plants"], image: ImgCard4, title: "African Violet", price: 199, size:[ "Medium"] },
    { id: 5, category: ["Big Plants", "Sale"], image: ImgCard5, title: "Beach Spider Lily", price: 129, size: ["Small" ]},
    { id: 6, category: ["Succulents", "New Arrivals", "Sale"], image: ImgCard6, title: "Blushing Bromeliad", price: 139, size: ["Large"] },
    { id: 7, category: ["Terrariums", "Sale"], image: ImgCard7, title: "Bird's Nest Fern", price: 99, size: ["Large", "Small", "Medium"] },
    { id: 8, category: ["Gardening", "New Arrivals"], image: ImgCard8, title: "Broadleaf Lady Palm", price: 59, size: ["Small"] },
    { id: 9, category: ["Accessories"], image: ImgCard9, title: "Chinese Evergreen", price: 39, size: ["Medium"] },
    { id: 10, category: ["House Plants", "New Arrivals"], image: ImgCard1, title: "Aluminum Plant", price: 179, size: ["Small"] },
    { id: 11, category: ["House Plants", "New Arrivals"], image: ImgCard1, title: "Aluminum Plant", price: 179, size: ["Small"] },
    { id: 12, category: ["House Plants", "New Arrivals"], image: ImgCard1, title: "Aluminum Plant", price: 179, size: ["Small"] },
    { id: 13, category: ["House Plants", "New Arrivals"], image: ImgCard1, title: "Aluminum Plant", price: 179, size: ["Small"] },
    { id: 14, category: ["House Plants", "New Arrivals"], image: ImgCard1, title: "Aluminum Plant", price: 179, size: ["Small"] },
    { id: 15, category: ["House Plants", "New Arrivals"], image: ImgCard1, title: "Aluminum Plant", price: 179, size: ["Small"] },
    { id: 16, category: ["House Plants", "New Arrivals"], image: ImgCard1, title: "Aluminum Plant", price: 179, size: ["Small"] },
];

