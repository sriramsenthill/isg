import React from 'react';
import SEO from '../common/seo';
import Instructor from '../components/instructor';
import WrapperFour from '../layout/wrapper-4';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const index = () => {
    const imageFilenames = Array.from({ length: 8 }, (_, index) => `${index + 1}.jpeg`);

    return (
        <WrapperFour>
            <SEO pageTitle={"Instructor"} />
            <Instructor />
            <div style={{ backgroundColor: '#5f096f', backgroundImage: `url(/assets/img/bg/shape-bg-02.png)`, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className="row text-center">
                    <div className="col-lg-12">
                        <div className="section-title mb-65">
                            <h2 className="tp-section-title" style={{ color: 'white', padding: "2rem" }}>Professor's Letter Head</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {imageFilenames.map((filename, index) => (
                        <div key={index} className="col-md-6">
                            <img
                                src={`/assets/img/isg/prof${filename}`}
                                alt={`Image ${index + 1}`}
                                style={{ width: "90%", height: "90%", margin: "10px" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <AudioPlayer
                autoPlay
                src="/assets/img/isg/prof.mp3"
                onPlay={e => console.log("onPlay")}
            // other props here
            />
        </WrapperFour>
    );
};

export default index;