import React from "react";
import SEO from "../common/seo";
import WrapperFour from "../layout/wrapper-4";

const prayer = () => {
    const imageFilenames = Array.from({ length: 3 }, (_, index) => `${index + 8}.jpeg`);

    return (
        <WrapperFour>
            <SEO pageTitle={"Prayer"} />
            {/* Use the map function to render img tags for each image */}
            {imageFilenames.map((filename, index) => (
                <img
                    key={index}
                    src={`/assets/img/isg/${filename}`}
                    alt={`Image ${index + 1}`}
                    style={{ width: "100%", height: "auto", marginBottom: "10px" }}
                />
            ))}
        </WrapperFour>
    );
};

export default prayer;