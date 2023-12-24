import React from "react";
import FeatureArea from "../../common/feature-area";
import AboutArea from "../../common/about-area";
import BrandArea from "@/src/common/brand-area";
import VideoArea from "../../common/video-area";
import ChooseArea from "../../common/choose-area";
import TestimonialAreaThree from "../../common/testimonial-area-2";
import InstructorArea from "./instructor-area";
import SuitableArea from "@/src/common/suitable-area";
import CounterArea from "../homes/home-3/counter-area";
import Breadcrumb from "../bredcrumb/breadcrumb";
import OurVision from "../homes/home/OurVision";
import OurMission from "../homes/home/ourMission";
import OurFaith from "../homes/home/OurFaith";
import OurFaithCreed from "../homes/home/OurFaithCreed";
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
