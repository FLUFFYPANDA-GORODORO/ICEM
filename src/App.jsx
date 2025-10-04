import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
