import Header from "./components/Header.tsx";
import Slider from "./components/Slider.tsx";
import ContentHome from "./components/ContentHome.tsx";

function App() {


  return (
    <div className="m-0 pt-[25px] pr-[120px] pl-[120px] pb-[0] font-['Montserrat']">
        <Header />
        <Slider/>
        <ContentHome/>
    </div>
  )
}

export default App
