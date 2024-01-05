import React, { useEffect } from "react";
import { useRouter } from "next/router";
import SEO from "../common/seo";
import CourseGrid from "../components/course-grid";
import WrapperFour from "../layout/wrapper-4";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    // Check for JWT token in local storage
    const jwtToken = localStorage.getItem("jwtToken");

    // If there is no token, redirect to "/sign-in" page
    if (!jwtToken) {
      router.push("/sign-in");
    }
  }, [router]);

  return (
    <WrapperFour>
      <SEO pageTitle={"Bible Course"} />
      <CourseGrid />
    </WrapperFour>
  );
};

export default Index;
