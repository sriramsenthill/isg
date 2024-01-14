import React, { useEffect } from "react";
import SEO from "../common/seo";
import SignIn from "../components/sign-in";
import WrapperFour from "../layout/wrapper-4";

const Index = () => {

  return (
    <>
      <SEO pageTitle={"sign in"} />
      <SignIn />
    </>
  );
};

export default Index;
