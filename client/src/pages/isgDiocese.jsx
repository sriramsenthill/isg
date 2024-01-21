import React from "react";
import SEO from "../common/seo";
import WrapperFour from "../layout/wrapper-4";

const isgDiocese = () => {
    const imageFilenames = Array.from({ length: 2 }, (_, index) => `${index + 1}.jpeg`);

    return (
        <WrapperFour>
            <SEO pageTitle={"ISG Diocese"} />
            <div style={{ backgroundColor: '#5f096f', backgroundImage: `url(/assets/img/bg/shape-bg-02.png)`, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className="row text-center">
                    <div className="col-lg-12">
                        <div className="section-title mb-65">
                            <h2 className="tp-section-title" style={{ color: 'white', padding: "2rem" }}>ISG Diocese</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {imageFilenames.map((filename, index) => (
                        <div key={index} className="col-md-6">
                            <img
                                src={`/assets/img/isg/d${filename}`}
                                alt={`Image ${index + 1}`}
                                style={{ width: "90%", height: "90%", margin: "10px" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </WrapperFour>
    );
};

export default isgDiocese;