import React, { useState } from "react";
import YouTube from "react-youtube";

const Example = () => {
  const opts = {
    height: "720",
    width: "1080",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>

      <div style={{ backgroundColor: '#5f096f', backgroundImage: `url(/assets/img/bg/shape-bg-02.png)` }}>
        <h1
          style={{
            textAlign: "center",
            paddingTop: "60px",
            paddingBottom: "30px",
            color: "white"
          }}
        >
          Our Youtube Video
        </h1>
        <div
          style={{
            padding: "20px",
            paddingBottom: "80px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >

          <div>
            <YouTube videoId="CbKVQvWzYFw" opts={opts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Example;
