import Slider from "./Slider.tsx";
import ContentHome from "./ContentHome.tsx";


export default  function Home() {
    return (
        <div className="m-0 pt-[25px] pr-[120px] pl-[120px] pb-[0] font-['Montserrat']">
            <Slider/>
            <ContentHome/>
        </div>
    )
}