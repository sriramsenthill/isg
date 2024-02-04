import React from "react";
import SEO from "../../common/seo";
import WrapperFour from "../../layout/wrapper-4";
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';

const index = () => {
  const data = [
    {
      img4: "/assets/img/isg/apostalic.jpeg",
    },
  ];
  return (
    <WrapperFour>
      <SEO pageTitle={"appostalic"} />
      <div className="row" style={{ backgroundColor: "#5f096f" }}>
        <div className="row text-center">
          <div className="col-lg-12">
            <div className="section-title mb-65">
              <h2 className="tp-section-title" style={{ color: 'white', padding: "2rem" }}>Apostolic</h2>
            </div>
          </div>
        </div>
        {data.map((item, index) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={index}>
            <div className="tp-rec-item mb-25 mt-25 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={item.img4} alt={`category-img-${index}`} className="img-fluid" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <AudioPlayer
        autoPlay
        src="/assets/img/isg/song.mp3"
        onPlay={e => console.log("onPlay")}
      // other props here
      />
    </WrapperFour>
  );
};

export default index;
