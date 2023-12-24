import React from "react";
import SEO from "../common/seo";
import Register from "../components/register";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Register"} />
      <Register />
    </>
  );
};

export default index;
