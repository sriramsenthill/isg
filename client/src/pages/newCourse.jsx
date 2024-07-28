import React, { useEffect } from "react";
import SEO from "../common/seo";
import WrapperFour from "../layout/wrapper-4";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import NewCourse from "../components/homes/home/NewCourse";

const Index = () => {

    return (
        <WrapperFour>
            <SEO pageTitle={"Bible Course"} />
            <NewCourse />
            <AudioPlayer
                autoPlay
                src="/assets/img/isg/bibleCourse.mp3"
                onPlay={e => console.log("onPlay")}
            />
        </WrapperFour>
    );
};

export default Index;
