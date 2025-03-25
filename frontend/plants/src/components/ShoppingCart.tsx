

function ShoppingCart() {
    return (
        <div  className="m-0 pr-[120px] pl-[120px] pb-[0] font-['Montserrat']">
            <div className="mt-[60px] flex flex-row gap-[86px]">
                <div className="w-[61%]">
                    <div className="flex flex-row">
                        <p className="pr-[245px]">Products</p>
                        <p className="pr-[108px]">Price</p>
                        <p className="pr-[108px]">Quantity</p>
                        <p>Total</p>
                    </div>
                    <hr className="text-gray-200 mt-[11px] mb-[11px]"/>
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
                        <button className="w-[102px] h-[40px] bg-green-700 text-white hover:bg-green-600 cursor-pointer">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;
