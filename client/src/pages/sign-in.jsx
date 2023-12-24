import React from "react";
import SEO from "../common/seo";
import SignIn from "../components/sign-in";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <>
      <SEO pageTitle={"sign in"} />
      <SignIn />
    </>

  );
};

export default index;
