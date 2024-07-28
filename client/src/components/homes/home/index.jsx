import React from "react";
import HeroBanner from "./hero-banner";
import BrandArea from "../../../common/brand-area";
import SecondArea from "./secondArea";
import OurMissionTamil from "./OurMissionTamil";
import OurFaithCreedTamil from "./OurFaithCreedTamil";
import SuitableArea from "@/src/common/suitable-area";
import OurMission from "./OurMission";
import NewCourse from "./NewCourse";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <br />
      <NewCourse />
      <SuitableArea />
      <SecondArea />
      <OurMissionTamil />
      <OurFaithCreedTamil />
      <img src="/assets/img/isg/logo_exp.jpg" />
      <BrandArea style_1={true} />
    </>
  );
};

export default Home;
