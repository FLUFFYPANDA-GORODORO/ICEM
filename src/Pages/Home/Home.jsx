import React from "react";
import HeroSlider from "./HeroSlider";
import ExploreSection from "./ExploreSection";
import DiscoverPaths from "./DiscoverPaths";
import AcademicYearSection from "./AcademicYearSection";
import RecruitersSection from "./RecruiterSection";
import EnergyInnovation from "./EnergyInnovation";
import CampusBeat from "./CampusBeat";
import CollegeUnplugged from "./CollegeUnplugged";
import FacultySection from "./FacultySection";
import NewsSection from "./NewsSection";
import EventsSection from "./EventSection";
import InstagramFeed from "../instagramFeed";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <ExploreSection />
      <DiscoverPaths />
      <AcademicYearSection />
      <RecruitersSection />
      <EnergyInnovation />
      <CampusBeat />
      <CollegeUnplugged />
      <FacultySection />
      <NewsSection />
      <EventsSection />
      <InstagramFeed />
    </div>
  );
};

export default Home;