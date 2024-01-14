import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import SEO from "../common/seo";
import CourseGrid from "../components/course-grid";
import WrapperFour from "../layout/wrapper-4";

const Index = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to sign-in page if no active session
  useEffect(() => {
    if (status === "unauthenticated" || !session) {
      router.push("/sign-in");
    }
  }, [status, session, router]);

  if (status === "loading") {
    // You might want to render a loading indicator here
    return <div>Loading...</div>;
  }

  return (
    <WrapperFour>
      <SEO pageTitle={"Bible Course"} />
      <CourseGrid />
    </WrapperFour>
  );
};

export default Index;
