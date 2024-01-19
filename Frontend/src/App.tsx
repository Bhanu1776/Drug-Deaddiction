import Carousel from "./pages/Home/components/HomeCarousel";
import Services from "./pages/Home/components/Services";
import Treatment from "./pages/Home/components/Treatment";
import Activities from "./pages/Home/components/Activities";
import Footer from "./pages/Home/components/Footer";
function App() {
  return (
    <main className="flex flex-col items-center h-screen mx-48">
    <Carousel />
    <Services />
    <Activities />
    <Treatment />
    <Footer />
    </main>
  );
}

export default App;
