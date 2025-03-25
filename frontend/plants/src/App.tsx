import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "../src/components/Home.tsx"
import ProductInfo from "./components/ProductInfo.tsx";
import Header from "./components/Header.tsx"
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/productinfo" element={<ProductInfo/>}/>
            <Route path="/shoppingCart" element={<ShoppingCart/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
