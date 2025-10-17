import Banner from "../../assets/ICEMBANNERPLACEMENT.jpg";
import PlacementInformation from "./PlacementInformation";
import Testimonials from "./Testimonials";
import Typingsection from "./Typingsection";
import CASsection from "./CASsection";
import TrainingOverview from "./TrainingOverview";
import ResearchLab from "./ResearchLab";
import Career from "./Career";
import Impact from "./Impact";
import Upskilling from "./Upskilling";
import Companies from "./Companies";
import PlacementCarousel from "./PlacementCarousel";

function Placement() {
  return (
    <div className="w-full bg-white">
      {/* Hero Banner Section */}
      <PlacementCarousel/>
      <Typingsection />
      <Impact />
      <Companies />
      <ResearchLab />
      <Career /> {/* Add logos etc here */}
      <CASsection />
      <TrainingOverview />
      <Upskilling />
      <Testimonials />
      <PlacementInformation /> {/* All the extra content goes here */}
    </div>
  );
}

export default Placement;
