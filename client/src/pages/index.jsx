import SEO from "../common/seo";
import Home from "../components/homes/home";
import Wrapper from "../layout/wrapper";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';



const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'ISG'} />
      <Home />
      <AudioPlayer
        autoPlay
        src="/assets/img/isg/song.mp3"
        onPlay={e => console.log("onPlay")}
      // other props here
      />
    </Wrapper>
  );
};

export default index;