import React from "react";
import OurVision from "./OurVision";
import OurMission from "./ourMission";
import OurFaithCreed from "./OurFaithCreed";
import OurFaith from "./OurFaith";
import HeroBanner from "./hero-banner";
import InstructorArea from "../../instructor/instructor-area";


const Home = () => {
  return (
    <>
      <HeroBanner />
      <OurVision />
      <OurMission />
      <OurFaith />
      <OurFaithCreed />
      <InstructorArea />
    </>
  );
};

export default Home;
