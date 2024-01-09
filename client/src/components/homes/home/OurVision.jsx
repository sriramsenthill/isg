import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';



// about info
const about_info = {
  img_1: "/assets/img/about/about-img.png",
  about_title: "Our Vision",
  sub_title: "Divine Imperatives: Answering the Call to Serve and Lead in Christ's Way",
  des: <>According to the Holy bible Mark.12:29-31 and Matthew 28:18-20  the great commandment and the great commission which  our Lord and Saviour Jesus Christ given to us, we dedicate ourselves as servants of God as Christ taught to us in the Holy Bible Mark 10:45 to the Christian community around the world, to prepare them as visionary Leaders of the End-Time Revival of the Church according to Colossians 1:28. May our Heavenly Father guide us according to 1 Thessalonians 5:23, 24 by His Holy Spirit.</>,
  about_btn: "Read More"
}

const { img_1, img_2, img_3, about_title, sub_title, des, about_btn } = about_info

const generateImagePaths = (count) => {

  const imagePaths = [];

  for (let i = 1; i <= count; i++) {
    imagePaths.push(`/assets/img/isg/a${i}.png`);
  }

  return imagePaths;
};


const OurVision = () => {
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
      <section
        className="tp-about-area pt-120 pb-90 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".4s"
        style={{ backgroundColor: '#5f096f' }}
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
                  <span className="tp-sub-title mb-20 text-white">{about_title}</span>
                  <h2 className="tp-section-title mb-15 text-white">
                    {sub_title}
                  </h2>
                  <p style={{ textAlign: 'justify', color: '#fff' }}>
                    {des}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurVision;
