import React from "react";
import OurVision from "./OurVision";
import OurMission from "./OurMission";
import OurFaithCreed from "./OurFaithCreed";
import OurFaith from "./OurFaith";
import HeroBanner from "./hero-banner";
import InstructorArea from "../../instructor/instructor-area";
import BrandArea from "../../../common/brand-area";
import SecondArea from "./secondArea";
import FaqArea from "../../faq/faq-area";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <SecondArea />
      <OurMission />
      <OurFaithCreed />
      <FaqArea />
      <BrandArea style_1={true} />
    </>
  );
};

export default Home;
