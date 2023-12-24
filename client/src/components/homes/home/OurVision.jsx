import Link from "next/link";
import React from "react";

// shape_img data
const shape_img = [
  {
    id: 1,
    shape: "/assets/img/about/about-shape-03.png",
    cls: "tp-aline-one",
  },
  {
    id: 2,
    shape: "/assets/img/about/about-shape-04.png",
    cls: "tp-aline-two",
  },
  {
    id: 3,
    shape: "/assets/img/about/about-shape-05.png",
    cls: "tp-aline-three",
  },
];

// about info
const about_info = {
  img_1: "/assets/img/about/about-img.png",
  img_2: "/assets/img/about/about-shape-01.png",
  img_3: "/assets/img/about/about-shape-02.png",
  about_title: "Our Vision",
  sub_title: "Divine Imperatives: Answering the Call to Serve and Lead in Christ's Way",
  des: <>According to the Holy bible Mark.12:29-31 and Matthew 28:18-20  the great commandment and the great commission which  our Lord and Saviour Jesus Christ given to us, we dedicate ourselves as servants of God as Christ taught to us in the Holy Bible Mark 10:45 to the Christian community around the world, to prepare them as visionary Leaders of the End-Time Revival of the Church according to Colossians 1:28. May our Heavenly Father guide us according to 1 Thessalonians 5:23, 24 by His Holy Spirit.</>,
  about_btn: "Read More"
}

const { img_1, img_2, img_3, about_title, sub_title, des, about_btn } = about_info

const OurVision = () => {
  return (
    <>
      <section
        className="tp-about-area pt-120 pb-90 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-6">
              <div className="tp-about-img p-relative pb-30 ml-10">
                <img src={img_1} alt="about-img" />
                <div className="tp-about-line-shape d-none d-md-block">
                  {shape_img.map((item) => (
                    <img
                      key={item.id}
                      src={item.shape}
                      alt="about-shape"
                      className={item.cls}
                    />
                  ))}

                </div>
                <div className="tp-about-shape  d-none d-xl-block">
                  <img
                    src={img_2}
                    alt="about-shape"
                    className="a-shape-one"
                  />
                  <img
                    src={img_3}
                    alt="about-shape"
                    className="a-shape-two"
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6">
              <div className="tp-about-content pb-30 ml-80">
                <div className="section-title mb-55">
                  <span className="tp-sub-title mb-20">{about_title}</span>
                  <h2 className="tp-section-title mb-15">
                    {sub_title}
                  </h2>
                  <p style={{ textAlign: 'justify' }}>
                    {des}
                  </p>
                </div>
                <div className="about-btn">
                  <Link href="/about" className="tp-btn">
                    {about_btn}
                  </Link>
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
