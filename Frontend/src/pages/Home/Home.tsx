import Navbar from "@/pages/Home/navbar"
import Carousel from "./components/HomeCarousel";
import Services from "./components/Services";
import Treatment from "./components/Treatment";
import Activities from "./components/Activities";
import Footer from "./components/Footer";
const Home = () => {
  return (
    <div className="flex flex-col items-center h-screen mx-48">
    <Navbar/>
    <Carousel />
    <Services />
    <Activities />
    <Treatment />
    <Footer />
    </div>
  )
}

export default Home