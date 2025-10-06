import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import StudentWelfare from "./components/StudentCorner/StudentWelfare";
import IIC from "./components/StudentCorner/IIC";
import InductionProgramme from "./components/StudentCorner/InductionProgramme";
import CivilEngineering from "./components/ProgramsOffered/CivilEngineering";

import Overview from "./components/AboutUs/Overview";
import ChanakyaEdu from "./components/AboutUs/ChanakyaEdu";
import IGOI from "./components/AboutUs/IGOI";
import CFCM from "./components/AboutUs/CFCM";
import Placement from "./components/Placement/Placement";

function App() {
  return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/overview" element={<Overview />} />
            <Route path="/about/chanakya-edu" element={<ChanakyaEdu />} />
            <Route path="/about/IGOI" element={<IGOI />} />
            <Route path="/about/cfcm" element={<CFCM />} />
            <Route path="/student-corner/student-welfare" element={<StudentWelfare />} />
            <Route path="/student-corner/iic" element={<IIC />} />
            <Route path="/student-corner/induction-programme" element={<InductionProgramme />} />
            <Route path="/placement" element={<Placement/>} />
            {/* add more <Route> as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
