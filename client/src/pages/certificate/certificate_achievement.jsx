import React from "react";
import SEO from "../../common/seo";
import WrapperFour from "../../layout/wrapper-4";

const data = [
  {
    img6: "/assets/img/isgdiocese/achievement/1.jpeg",
  },
  {
    img6: "/assets/img/isgdiocese/achievement/2.jpeg",
  },
  {
    img6: "/assets/img/isgdiocese/achievement/3.jpeg",
  },
  {
    img6: "/assets/img/isgdiocese/achievement/4.jpeg",
  },
  {
    img6: "/assets/img/isgdiocese/achievement/5.jpeg",
  },
  {
    img6: "/assets/img/isgdiocese/achievement/6.jpeg",
  },
  {
    img6: "/assets/img/isgdiocese/achievement/7.jpeg",
  },
  {
    img6: "/assets/img/isgdiocese/achievement/8.jpeg",
  },
  {
    img6: "/assets/img/isgdiocese/achievement/9.jpeg",
  },
  {
    img6: "/assets/img/isgdiocese/achievement/10.jpeg",
  },
  {
    img6: "/assets/img/isgdiocese/achievement/11.jpeg",
  },
  {
    img6: "/assets/img/isgdiocese/achievement/12.jpeg",
  },
  {
    img6: "/assets/img/isgdiocese/achievement/13.jpeg",
  },
  {
    img6: "/assets/img/isgdiocese/achievement/14.jpeg",
  },
  {
    img6: "/assets/img/isgdiocese/achievement/15.jpeg",
  },
];

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"certificate_achievement"} />
      <div className="row" style={{ backgroundColor: "#5f096f" }}>
        {data.map((item) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-12">
            <div className=" tp-rec-item mb-25 mt-25">
              <div>
                <img src={item.img6} alt="category-img" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </WrapperFour>
  );
};

export default index;