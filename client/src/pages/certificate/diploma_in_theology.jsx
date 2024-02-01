import React from "react";
import SEO from "../../common/seo";
import WrapperFour from "../../layout/wrapper-4";

const data = [
  {
    img5: "/assets/img/isgdiocese/diploma/1.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/2.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/3.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/4.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/5.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/6.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/7.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/8.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/9.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/10.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/11.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/12.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/13.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/14.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/15.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/16.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/17.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/18.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/19.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/20.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/21.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/22.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/23.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/24.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/25.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/26.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/27.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/28.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/29.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/30.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/31.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/32.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/33.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/34.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/35.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/36.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/37.jpeg",
  },
  {
    img5: "/assets/img/isgdiocese/diploma/38.jpeg",
  },
];

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"diploma_in_theology"} />
      <div className="row" style={{ backgroundColor: "#5f096f" }}>
        <div className="row text-center">
          <div className="col-lg-12">
            <div className="section-title mb-65">
              <h2 className="tp-section-title" style={{ color: 'white', padding: "2rem" }}>Diploma in Theology</h2>
            </div>
          </div>
        </div>
        {data.map((item) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-12">
            <div className=" tp-rec-item mb-25 mt-25">
              <div>
                <img src={item.img5} alt="category-img" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </WrapperFour>
  );
};

export default index;
