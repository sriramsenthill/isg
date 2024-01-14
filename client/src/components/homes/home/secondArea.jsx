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


const SecondArea = () => {
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
                style={{ backgroundColor: '#5f096f', backgroundImage: `url(/assets/img/bg/shape-bg-02.png)` }}
            >
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="section-title mb-65">
                                <h2 className="tp-section-title" style={{ color: 'white' }}>Our Letter Head</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                            <img src="/assets/img/isg/1.jpeg" alt="founder" />
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                            <img src="/assets/img/isg/2.jpeg" alt="coFounder" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                            <img src="/assets/img/isg/3.jpeg" alt="dean" />
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mb-4">
                            <img src="/assets/img/isg/4.jpeg" alt="dean" />
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
};

export default SecondArea;
