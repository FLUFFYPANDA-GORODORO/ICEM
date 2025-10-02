import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
