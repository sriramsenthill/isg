import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import OurVision from "../homes/home/OurVision";
import OurMission from "../homes/home/OurMission";
import OurFaith from "../homes/home/OurFaith";
import OurFaithCreed from "../homes/home/OurFaithCreed";
import ReactPlayer from 'react-player/youtube'




const About = () => {

  return (
    <>
      <Breadcrumb title="About Us" subtitle="About Us" isDbbl="Pages" />
      <OurVision />
      <OurMission />
      <OurFaith />
      <OurFaithCreed />
      {/* <FeatureArea style_about={true} />
      <VideoArea style_2={true} /> */}
    </>
  );
};

export default About;
