import React from "react";
import SEO from "../../common/seo";
import WrapperFour from "../../layout/wrapper-4";
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';

const data = [
  {
    img2: "/assets/img/isgdiocese/reverend/0.jpeg",
  },
  {
    img2: "/assets/img/isgdiocese/reverend/1.jpeg",
  },
  {
    img2: "/assets/img/isgdiocese/reverend/2.jpeg",
  },
  {
    img2: "/assets/img/isgdiocese/reverend/3.jpeg",
  },
  {
    img2: "/assets/img/isgdiocese/reverend/4.jpeg",
  },
  {
    img2: "/assets/img/isgdiocese/reverend/5.jpeg",
  },
  {
    img2: "/assets/img/isgdiocese/reverend/6.jpeg",
  },
  {
    img2: "/assets/img/isgdiocese/reverend/7.jpeg",
  },
  {
    img2: "/assets/img/isgdiocese/reverend/8.jpeg",
  },
  {
    img2: "/assets/img/isgdiocese/reverend/9.jpeg",
  },
];

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"reverent"} />

      <div className="row" style={{ backgroundColor: "#5f096f" }}>
        <div className="row text-center">
          <div className="col-lg-12">
            <div className="section-title mb-65">
              <h2 className="tp-section-title" style={{ color: 'white', padding: "2rem" }}>Reverend</h2>
            </div>
          </div>
        </div>
        {data.map((item) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-12">
            <div className=" tp-rec-item mb-25 mt-25">
              <div>
                <img src={item.img2} alt="category-img" />
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
