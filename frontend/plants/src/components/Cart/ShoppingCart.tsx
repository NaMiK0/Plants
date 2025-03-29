import { useCart } from "./ContextCart.tsx";

import ImgDeleteOrder from "../../assets/Cart/Delete.svg"

function ShoppingCart() {
    // @ts-ignore
    const { cart, updateCart, removeFromCart } = useCart();



    return (
        <div  className="m-0 pr-[120px] pl-[120px] pb-[0] font-['Montserrat']">
            <div className="mt-[60px] flex flex-row gap-[86px]">
                <div className="w-[61%]">
                    <div className="flex flex-row text-[16px]">
                        <p className="pr-[245px]">Products</p>
                        <p className="pr-[108px]">Price</p>
                        <p className="pr-[108px]">Quantity</p>
                        <p>Total</p>
                    </div>
                    <hr className="text-gray-200 mt-[11px] mb-[11px]"/>
                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id}
                                 className="flex flex-row items-center bg-gray-100 w-[782px] h-[70px] mb-[10px]">
                                <div className="flex items-center mr-[45px]">
                                    <img src={item.image} alt={item.title} className="w-[65px] h-[70px] mr-[9px] ml-[10px]"/>
                                    <div className="flex flex-col w-[190px] gap-[2px]">
                                        <p className="text-[16px] font-[500] text-gray-700">{item.title}</p>
                                        <p className="text-[14px] text-gray-500"><span
                                            className="text-gray-400">SKU:</span> 1995751877966</p>
                                    </div>
                                </div>
                                <div className="w-[70px] mr-[77px] text-gray-500 font-[500] text-[16px]">
                                    <p>${item.price}</p>
                                </div>
                                <div className="w-[95px] mr-[82px]">
                                    <div className="flex flex-row gap-[16px]">
                                        <button
                                            className={`w-[21px] h-[25px] rounded-[14px]  
                                            ${item.quantity === 1 ? "bg-gray-300" : "bg-green-700 cursor-pointer hover:bg-green-600 transition duration-300"}`}
                                            onClick={() => updateCart(item.id, item.quantity = item.quantity - 1)}
                                        >
                                            <p className="text-[12px] text-white font-[800] mb-[6px]">_</p>
                                        </button>
                                        <p className="w-[20px] flex justify-center">{item.quantity}</p>
                                        <button
                                            className={`w-[21px] h-[25px] rounded-[14px] 
                                            ${item.quantity === 45 ? "bg-gray-300" : "bg-green-700 cursor-pointer hover:bg-green-600 transition duration-300"}`}
                                            onClick={() => updateCart(item.id, item.quantity = item.quantity + 1)}
                                            disabled={item.quantity === 45}
                                        >
                                            <p className="text-[16px] text-white font-[500] mt-[1px]">+</p>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-[62px] text-[16px] mr-[30px]">
                                    <p>${item.price * item.quantity}</p>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="w-[17px] h-[19px] cursor-pointer group">
                                    <img
                                        src={ImgDeleteOrder}
                                        alt="Delete"
                                        className=""
                                        style={{
                                            filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%)' +
                                                'saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)'
                                        }}
                                    />
                                </button>
                            </div>
                        ))
                    )}
                </div>


                <div className="w-[39%]">
                    <p className="text-[18px] font-[700] text-[#3D3D3D]">Cart Totals</p>
                    <hr className="text-gray-200 mt-[8px] mb-[11px]"/>
                    <p className="text-[14px] mb-[8px]">Coupon Apply</p>
                    <div className="">
                        <input type="text"
                               className="w-[230px] h-[40px] rounded-[3px] rounded-r-[0] border-2 border-green-700 indent-[10px] text-[14px] outline-none"
                               placeholder="Enter coupon code here..."
                        />
                        <button className="w-[102px] h-[40px] bg-green-700 text-white hover:bg-green-600 cursor-pointer transition duration-300">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;
