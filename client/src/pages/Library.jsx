import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import SEO from "../common/seo";
import WrapperFour from "../layout/wrapper-4";
import "react-h5-audio-player/lib/styles.css";

const Index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Library"} />
      <h1>isg Library</h1>
    </WrapperFour>
  );
};

export default Index;
