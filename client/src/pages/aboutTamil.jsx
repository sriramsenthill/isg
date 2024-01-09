import React from "react";
import SEO from "../common/seo";
import About from "../components/about";
import OurFaithCreedTamil from "../components/homes/home/OurFaithCreedTamil";
import OurFaithTamil from "../components/homes/home/OurFaithTamil";
import OurMissionTamil from "../components/homes/home/OurMissionTamil";
import OurVisionTamil from "../components/homes/home/OurVisionTamil";
import WrapperFour from "../layout/wrapper-4";
import YouTubevideo from "./youtubevideo";

const index = () => {
    return (
        <WrapperFour>
            <SEO pageTitle={"About Us Tamil"} />
            <OurVisionTamil />
            <OurMissionTamil />
            <OurFaithCreedTamil />
            <OurFaithTamil />
            <YouTubevideo />
        </WrapperFour>
    );
};

export default index;
