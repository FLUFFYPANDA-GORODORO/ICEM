import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home/Home";
import StudentWelfare from "./components/StudentCorner/StudentWelfare";
import IIC from "./components/StudentCorner/IIC";
import InductionProgramme from "./components/StudentCorner/InductionProgramme";
// import CivilEngineering from "./components/ProgramsOffered/CivilEngineering";

import Overview from "./components/AboutUs/Overview";
import ChanakyaEdu from "./components/AboutUs/ChanakyaEdu";
import IGOI from "./components/AboutUs/IGOI";
import CFCM from "./components/AboutUs/CFCM";
import Placement from "./components/Placement/Placement";
import Computer from "./components/Programs/Computer";

import AIDS from "./components/Programs/AIDS";
import Civil from "./components/Programs/Civil";
// import Computer from "./components/Programs/Computer";
import ENTC from "./components/Programs/ENTC";
import FE from "./components/Programs/FE";
import IMBA from "./components/Programs/IMBA";
import IMCA from "./components/Programs/IMCA";
import IT from "./components/Programs/IT";
import MBA from "./components/Programs/MBA";
import MCA from "./components/Programs/MCA";
import Mech from "./components/Programs/Mech";
import MTECHComp from "./components/Programs/MTECHComp";
import MTECHMech from "./components/Programs/MTECHMech";
import Sports from "./components/AboutUs/Facilities.jsx/Sports";

import Governance from "./components/AboutUs/Governance";
import Research from "./components/Research/Research";
import Alumni from "./Pages/Alumni";
import Statutory from "./components/StudentCorner/Statutory";
import ContactUs from "./components/ContactUs";
import Examination from "./components/Examination";
import Grievance from "./components/StudentCorner/Grievance";
import NationalServiceScheme from "./components/StudentCorner/NationalServiceScheme";
import IcemStudentCouncil from "./components/StudentCorner/IcemStudentCouncil";
import Academics from "./components/StudentCorner/Academics";
import IcemAwards from "./components/StudentCorner/IcemAwards";
import AwardDetails from "./components/StudentCorner/AwardDetails";
import Accreditation from "./components/AboutUs/Accreditation";
import FixedActionBar from "./components/FixedActionBar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <FixedActionBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/about/overview" element={<Overview />} />
          <Route path="/about/chanakya-edu" element={<ChanakyaEdu />} />
          <Route path="/about/IGOI" element={<IGOI />} />
          <Route path="/about/cfcm" element={<CFCM />} />
          <Route path="/accreditation" element={<Accreditation/>}/>

          {/* ==== STUDENT ROUTES ==== */}
          <Route
            path="/campus-life/student-welfare"
            element={<StudentWelfare />}
          />
          <Route path="/campus-life/iic" element={<IIC />} />
          <Route
            path="/campus-life/induction-programme"
            element={<InductionProgramme />}
          />
          <Route path="/campus-life/committees" element={<Statutory />} />
          <Route
            path="/campus-life/nss"
            element={<NationalServiceScheme />}
          />
          <Route
            path="/campus-life/grievance-redressals"
            element={<Grievance />}
          />
          <Route
            path="/campus-life/student-council"
            element={<IcemStudentCouncil />}
          />
          <Route path="/campus-life/academics" element={<Academics />} />
          <Route path="/campus-life/icem-awards" element={<IcemAwards />} />
          <Route path="/awards/:id" element={<AwardDetails />} />

          {/* ==== PROGRAMS ROUTES ==== */}
          <Route path="/programs/ai-ds" element={<AIDS />} />
          <Route path="/programs/civil-engineering" element={<Civil />} />
          <Route path="/programs/computer-engineering" element={<Computer />} />
          <Route path="/programs/entc" element={<ENTC />} />
          <Route path="/programs/fye" element={<FE />} />
          <Route path="/programs/imba" element={<IMBA />} />
          <Route path="/programs/imca" element={<IMCA />} />
          <Route path="/programs/it" element={<IT />} />
          <Route path="/programs/mba" element={<MBA />} />
          <Route path="/programs/mca" element={<MCA />} />
          <Route path="/programs/mechanical-engineering" element={<Mech />} />
          <Route path="/programs/mtech-comp" element={<MTECHComp />} />
          <Route path="/programs/mtech-mech" element={<MTECHMech />} />

          {/* add more <Route> as needed */}

          {/* ==== FACILITIES ROUTES ==== */}
          <Route path="/facilities/sports" element={<Sports />} />
          {/* <Route path="/facilities/library" element={<Library />} />
          <Route path="/facilities/hostel" element={<Hostel />} />
          <Route path="/facilities/transport" element={<Bus />} />
          <Route path="/facilities/canteen" element={<Canteen />} />
          <Route path="/facilities/gym" element={<Gym />} />
          <Route path="/facilities/health-centre" element={<PHC />} /> */}
          <Route path="/facilities/governance" element={<Governance />} />
          <Route path="/research" element={<Research />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/examination" element={<Examination />} />

          {/* <Route path="/facilities/governance" element={<Governance />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
