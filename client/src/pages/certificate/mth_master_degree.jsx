import React from "react";
import SEO from "../../common/seo";
import WrapperFour from "../../layout/wrapper-4";
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';

const index = () => {
  const data = [
    {
      img4: "/assets/img/isgdiocese/mth/1.jpeg",
    },
    {
      img4: "/assets/img/isgdiocese/mth/2.jpeg",
    },
    {
      img4: "/assets/img/isgdiocese/mth/3.jpeg",
    },
    {
      img4: "/assets/img/isgdiocese/mth/4.jpeg",
    },
    {
      img4: "/assets/img/isgdiocese/mth/5.jpeg",
    },
    {
      img4: "/assets/img/isgdiocese/mth/6.jpeg",
    },
    {
      img4: "/assets/img/isgdiocese/mth/7.jpeg",
    },
    {
      img4: "/assets/img/isgdiocese/mth/8.jpeg",
    },
    {
      img4: "/assets/img/isgdiocese/mth/9.jpeg",
    },
    {
      img4: "/assets/img/isgdiocese/mth/10.jpeg",
    },
    {
      img4: "/assets/img/isgdiocese/mth/11.jpeg",
    },
    {
      img4: "/assets/img/isgdiocese/mth/12.jpeg",
    },
  ];

  return (
    <WrapperFour>
      <SEO pageTitle={"mth_master_degree"} />
      <div className="row" style={{ backgroundColor: "#5f096f" }}>
        <div className="row text-center">
          <div className="col-lg-12">
            <div className="section-title mb-65">
              <h2 className="tp-section-title" style={{ color: 'white', padding: "2rem" }}>Master of Theology</h2>
            </div>
          </div>
        </div>
        {data.map((item) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-12">
            <div className=" tp-rec-item mb-25 mt-25">
              <div>
                <img src={item.img4} alt="category-img" />
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
