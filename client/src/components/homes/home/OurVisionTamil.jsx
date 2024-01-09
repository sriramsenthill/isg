import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';

// about info
const about_info = {
  img_1: "/assets/img/about/about-img.png",
  about_title: "எங்கள் தரிசனம்:",
  sub_title: "",
  des: (
    <>
      உலகெங்கும் வாழும் தமிழ் பேசும் ஊழியக்காரர்கள் மற்றும் திருச்சபை மக்களை
      கடைசிகால எழுப்புதலுக்காக தரிசன தலைவர்களாக கொலோசெயர் 1:28 வசனத்தின்படி
      உருவாக்குவது எங்கள் தரிசனம். அதற்காக மாற்கு 10 :45 வசனத்தில் நமது
      ஆண்டவராகிய இயேசு கிறிஸ்துவின் வாக்கின்படி உலகெங்கும் வாழும் தமிழ் பேசும்
      ஊழியக்காரர்கள் மற்றும் திருச்சபை மக்களுக்கு கிறிஸ்துவுக்குள்
      வேலைக்காரர்களாக இருக்கும்படி எங்களை அர்ப்பணம் செய்திருக்கிறோம். |
      தெசலோனிக்கேயர் 5:23,24 வசனங்களின்படி பரலோக தேவன் நம்மை வழி நடத்துவார்.
    </>
  ),
  about_btn: "Read More",
};

const { img_1, img_2, img_3, about_title, sub_title, des, about_btn } = about_info;

const generateImagePaths = (count) => {

  const imagePaths = [];

  for (let i = 1; i <= count; i++) {
    imagePaths.push(`/assets/img/isg/a${i}.png`);
  }

  return imagePaths;
};

const OurVisionTamil = () => {
  const itemCount = 10; // Adjust the count based on your requirement
  const items = generateImagePaths(itemCount);

  const carouselStyle = {
    width: '100%',
    maxHeight: '400px',
  };

  const imageStyle = {
    objectFit: 'fit',
    width: '70%',
    height: '70%',
  };

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);


  return (
    <>
      <style jsx>{`
        @font-face {
          font-family: "MyCustomFont";
          src: url("/assets/fonts/tamil.ttf") format("truetype");
        }

        .customfont {
          font-family: "MyCustomFont";
        }
      `}</style>

      <section
        className="tp-about-area pt-120 pb-90 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".4s"
        style={{ backgroundColor: "#5f096f" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-6">
              <Carousel
                style={carouselStyle}
                index={activeIndex}
                autoPlay={false}
                interval={1000}
                animation="slide"
                timeout={500}
                indicators={false}
              >
                {items.map((item, i) => (
                  <img key={i} src={item} style={imageStyle} alt={`Banner ${i}`} />
                ))}
              </Carousel>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6">
              <div className="tp-about-content pb-30 ml-80">
                <div className="section-title mb-55">
                  <span
                    className="tp-sub-title mb-20 text-white customfont"
                    style={{ fontSize: "40px" }}
                  >
                    {about_title}
                  </span>
                  <p className="customfont" style={{ letterSpacing: '0.2em', color: "#fff", fontSize: '21px' }}>{des}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurVisionTamil;
