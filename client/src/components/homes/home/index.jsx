import React from "react";
import HeroBanner from "./hero-banner";
import BrandArea from "../../../common/brand-area";
import SecondArea from "./secondArea";
import OurMissionTamil from "./OurMissionTamil";
import OurFaithCreedTamil from "./OurFaithCreedTamil";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <SecondArea />
      <OurMissionTamil />
      <OurFaithCreedTamil />
      <img src="/assets/img/isg/logo_exp.jpg" />
      <BrandArea style_1={true} />
    </>
  );
};

export default Home;
