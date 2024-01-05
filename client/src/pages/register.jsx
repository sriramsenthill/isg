import React, { useEffect } from "react";
import SEO from "../common/seo";
import Register from "../components/register";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
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
      <SEO pageTitle={"Register"} />
      <Register />
    </>
  );
};

export default index;
