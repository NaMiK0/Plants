import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "../src/components/Home.tsx"
import ProductInfo from "./components/ProductInfo.tsx";
import Header from "./components/Header.tsx"
import ShoppingCart from "./components/Cart/ShoppingCart.tsx";
import {CartProvider} from "./components/Cart/ContextCart.tsx";
import Profile from "./components/Account/Profile.tsx";

function App() {
  return (

    <CartProvider>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/productinfo" element={<ProductInfo/>}/>
                <Route path="/shoppingCart" element={<ShoppingCart/>}/>
                <Route path="/account" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    </CartProvider>
  )
}

export default App
