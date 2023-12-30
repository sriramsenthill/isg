import FeatureArea from "@/src/common/feature-area";
import SuitableArea from "@/src/common/suitable-area";
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import CourseArea from "./course-area";

const CourseGrid = () => {
  return (
    <>
      <Breadcrumb title="Bible Course" subtitle="Bible Course" isDbbl="Course" />
      <CourseArea />
    </>
  );
};

export default CourseGrid;
