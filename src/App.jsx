import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import StudentWelfare from "./components/StudentCorner/StudentWelfare";
import IIC from "./components/StudentCorner/IIC";
import InductionProgramme from "./components/StudentCorner/InductionProgramme";
// // add more pages as you build them

function App() {
  return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student-corner/student-welfare" element={<StudentWelfare />} />
            <Route path="/student-corner/iic" element={<IIC />} />
            <Route path="/student-corner/induction-programme" element={<InductionProgramme />} />
            {/* add more <Route> as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
