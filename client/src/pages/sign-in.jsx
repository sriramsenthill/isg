import React, { useEffect } from "react";
import SEO from "../common/seo";
import SignIn from "../components/sign-in";
import WrapperFour from "../layout/wrapper-4";

const Index = () => {
  useEffect(() => {
    // Check for existing JWT token
    const jwtToken = localStorage.getItem('jwtToken');

    // If token exists, clear it
    if (jwtToken) {
      localStorage.removeItem('jwtToken');
    }
  }, []);

  return (
    <>
      <SEO pageTitle={"sign in"} />
      <SignIn />
    </>
  );
};

export default Index;
