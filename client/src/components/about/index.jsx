import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import OurVision from "../homes/home/OurVision";
import OurMission from "../homes/home/OurMission";
import OurFaith from "../homes/home/OurFaith";
import OurFaithCreed from "../homes/home/OurFaithCreed";
import YouTubevideo from "./youtubevideo";
import FaqArea from "../faq/faq-area";
import OurfaithNew from "../homes/home/OurfaithNew";





const About = () => {

  return (
    <>
      <Breadcrumb title="About Us" subtitle="About Us" isDbbl="Pages" />
      <OurVision />
      <OurMission />
      <OurFaithCreed />
      <OurfaithNew />
      <YouTubevideo />
      {/* <FeatureArea style_about={true} />
      <VideoArea style_2={true} /> */}
    </>
  );
};

export default About;
