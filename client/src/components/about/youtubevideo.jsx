import React, { useState } from "react";
import YouTube from "react-youtube";

const Example = () => {
  const opts = {
    height: "250",
    width: "350",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div>
        <h1
          style={{
            textAlign: "center",
            paddingTop: "60px",
            paddingBottom: "30px",
          }}
        >
          Youtube videos
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
            <YouTube videoId="0SPCj67qC40" opts={opts} />
          </div>
          <div>
            <YouTube videoId="oU8nnuSCLzo" opts={opts} />
          </div>
          <div>
            <YouTube videoId="CbKVQvWzYFw" opts={opts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Example;
