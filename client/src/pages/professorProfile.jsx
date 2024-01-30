import InstructorProfile from "@/src/components/instructor-profile";
import React from "react";
import SEO from "../common/seo";
import WrapperFour from "../layout/wrapper-4";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Instructor Profile"} />
      <InstructorProfile />
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
