import Link from "next/link";
import React, { useEffect, useState } from "react";
import Carousel from 'react-material-ui-carousel'

const HeroBanner = () => {
  var items = [
    {
      path: '/assets/img/banner/background.jpg',
    },
    {
      path: '/assets/img/banner/1.jpeg',
    },
  ]

  const carouselStyle = {
    width: '100%', // Set the width to 100% of the container
    maxHeight: '400px', // Adjust the height as needed
  };

  const imageStyle = {
    objectFit: 'cover', // Ensure the image covers the entire container
    width: '100%', // Make the image take up 100% of the container's width
    height: '100%', // Set a fixed height for the images
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
      <Carousel
        style={carouselStyle}
        index={activeIndex} // Set the active index to control the displayed image
        autoPlay={false} // Set to true if you want it to autoplay
        interval={1000} // Set the interval to 1000 milliseconds (1 second)
        animation="fade"
        timeout={500}
        indicators={false}>
        {
          items.map((item, i) => <img key={i} src={item.path} style={imageStyle} alt={`Banner ${i}`} />)
        }
      </Carousel>

    </>
  );
};

export default HeroBanner;
