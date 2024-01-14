import React, { useEffect } from "react";
import SEO from "../common/seo";
import CourseGrid from "../components/course-grid";
import WrapperFour from "../layout/wrapper-4";

const Index = () => {

  return (
    <WrapperFour>
      <SEO pageTitle={"Bible Course"} />
      <CourseGrid />
    </WrapperFour>
  );
};

export default Index;
