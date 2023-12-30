import FeatureArea from "@/src/common/feature-area";
import SuitableArea from "@/src/common/suitable-area";
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import InstructorArea from "./instructor-area";

const Instructor = () => {
  return (
    <>
      <Breadcrumb title="Professors" subtitle="Professors" />
      <InstructorArea />
    </>
  );
};

export default Instructor;
