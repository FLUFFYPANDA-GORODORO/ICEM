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

function Placement() {
  return (
    <div className="w-full bg-white">
      {/* Hero Banner Section */}
      <section className="w-full relative">
        {/* Background Banner */}
        <img
          src={Banner}
          alt="Indira College Banner"
          className="w-full h-full object-cover"
        />
      </section>

      <Typingsection />
      <CASsection />
      <TrainingOverview />
      <Impact />
      <ResearchLab />
      <Career />
      <Upskilling />

      <Testimonials />
      <PlacementInformation />
    </div>
  );
}

export default Placement;
