import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const BibleResearchCentre = () => {
    // Create an array of image filenames
    const imageFilenames = Array.from({ length: 7 }, (_, index) => `${index + 1}.jpeg`);


    return (
        <Wrapper>
            <SEO pageTitle={'BibleResearchCentre'} />

            <div style={{ backgroundColor: '#5f096f', backgroundImage: `url(/assets/img/bg/shape-bg-02.png)`, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className="row text-center">
                    <div className="col-lg-12">
                        <div className="section-title mb-65">
                            <h2 className="tp-section-title" style={{ color: 'white', padding: "2rem" }}>Bible Research Centre</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {imageFilenames.map((filename, index) => (
                        <div key={index} className="col-md-6">
                            <img
                                src={`/assets/img/isg/br${filename}`}
                                alt={`Image ${index + 1}`}
                                style={{ width: "90%", height: "90%", margin: "10px" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <AudioPlayer
                autoPlay
                src="/assets/img/isg/song.mp3"
                onPlay={e => console.log("onPlay")}
            // other props here
            />
        </Wrapper>
    );
};

export default BibleResearchCentre;
