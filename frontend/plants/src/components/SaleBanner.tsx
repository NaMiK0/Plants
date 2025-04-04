import SaleBannerImg from "../assets/Cards/SaleBanner.png"


const SaleBanner = () => {
    return (
        <div className="flex flex-col mb-4 bg-gradient-to-t from-[#46A3581A] to-[#46A35808] pl-4 pt-2 justify-center items-center">
            <h2 className="text-[60px]  font-normal leading-[60px] mb-2 text-[#46A358]">Super Sale</h2>
            <h3 className="font-semibold text-[23px] mb-2">Up to 75% off</h3>
            <img src={SaleBannerImg} alt="Sale Banner" className=""/>
        </div>
    )
}

export default SaleBanner;