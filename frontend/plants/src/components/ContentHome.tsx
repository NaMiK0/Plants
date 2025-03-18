import CardOrder from "./CardOrder.tsx"
import ImgCard1 from "../assets/Cards/card1.png"
import ImgCard2 from "../assets/Cards/card2.png"
import ImgCard3 from "../assets/Cards/card3.png"
import ImgCard4 from "../assets/Cards/card4.png"
import ImgCard5 from "../assets/Cards/card5.png"
import ImgCard6 from "../assets/Cards/card6.png"
import ImgCard7 from "../assets/Cards/card7.png"
import ImgCard8 from "../assets/Cards/card8.png"
import ImgCard9 from "../assets/Cards/card9.png"
import DropdownMenuHome from "./DropdownMenuHome.tsx";



export default function ContentHome() {
    return (
        <div className="mt-[46px] flex flex-row gap-[50px]">
            <section className="w-[31%]">

            </section>
            <section className="w-[69%] flex flex-col">
                <nav className="flex flex-row justify-between mb-[38px]">
                    <div className="flex flex-row gap-[40px]">
                        <a href="#">All Plants</a>
                        <a href="#">New Arrivals</a>
                        <a href="#">Sale</a>
                    </div>
                    <div>
                        <DropdownMenuHome/>
                    </div>
                </nav>
                <div className="grid grid-cols-3 gap-[41px]">
                    <CardOrder
                        image={ImgCard1}
                        title="Aluminum Plant"
                        price={179}
                    />
                    <CardOrder
                        image={ImgCard2}
                        title="Barberton Daisy"
                        price={119}
                    />
                    <CardOrder
                        image={ImgCard3}
                        title="Angel Wing Begonia"
                        price={169}
                    />
                    <CardOrder
                        image={ImgCard4}
                        title="African Violet"
                        price={199}
                    />
                    <CardOrder
                        image={ImgCard5}
                        title="Beach Spider Lily"
                        price={129}
                    />
                    <CardOrder
                        image={ImgCard6}
                        title="Blushing Bromeliad"
                        price={139}
                    />
                    <CardOrder
                        image={ImgCard7}
                        title="Bird's Nest Fern"
                        price={99}
                    />
                    <CardOrder
                        image={ImgCard8}
                        title="Broadleaf Lady Palm"
                        price={59}
                    />
                    <CardOrder
                        image={ImgCard9}
                        title="Chinese Evergreen"
                        price={39}
                    />
                </div>
            </section>
        </div>
    )
}