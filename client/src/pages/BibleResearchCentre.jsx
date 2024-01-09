import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";

const BibleResearchCentre = () => {
    // Create an array of image filenames
    const imageFilenames = Array.from({ length: 15 }, (_, index) => index + 1)
        .filter((value) => !(value >= 8 && value <= 10))
        .map((index) => `${index}.jpeg`);

    return (
        <Wrapper>
            <SEO pageTitle={'BibleResearchCentre'} />

            {/* Use the map function to render img tags for each image */}
            {imageFilenames.map((filename, index) => (
                <img
                    key={index}
                    src={`/assets/img/isg/${filename}`}
                    alt={`Image ${index + 1}`}
                    style={{ width: "100%", height: "auto", marginBottom: "10px" }}
                />
            ))}
        </Wrapper>
    );
};

export default BibleResearchCentre;
