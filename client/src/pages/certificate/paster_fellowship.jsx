import React from "react";
import SEO from "../../common/seo";
import WrapperFour from "../../layout/wrapper-4";

const data = [
  {
    img1: "/assets/img/isgdiocese/pastor/1.jpeg",
  },
  {
    img1: "/assets/img/isgdiocese/pastor/2.jpeg",
  },
  {
    img1: "/assets/img/isgdiocese/pastor/3.jpeg",
  },
  {
    img1: "/assets/img/isgdiocese/pastor/4.jpeg",
  },
  {
    img1: "/assets/img/isgdiocese/pastor/5.jpeg",
  },
  {
    img1: "/assets/img/isgdiocese/pastor/6.jpeg",
  },
  {
    img1: "/assets/img/isgdiocese/pastor/7.jpeg",
  },
  {
    img1: "/assets/img/isgdiocese/pastor/8.jpeg",
  },
  {
    img1: "/assets/img/isgdiocese/pastor/9.jpeg",
  },
  {
    img1: "/assets/img/isgdiocese/pastor/10.jpeg",
  },
  {
    img1: "/assets/img/isgdiocese/pastor/11.jpeg",
  },
  {
    img1: "/assets/img/isgdiocese/pastor/12.jpeg",
  },
  {
    img1: "/assets/img/isgdiocese/pastor/13.jpeg",
  },
  {
    img1: "/assets/img/isgdiocese/pastor/14.jpeg",
  },
  {
    img1: "/assets/img/isgdiocese/pastor/15.jpeg",
  },
  {
    img1: "/assets/img/isgdiocese/pastor/16.jpeg",
  },
];

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"paster_fellowship"} />
      <div className="row" style={{ backgroundColor: "#5f096f" }}>
        {data.map((item) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-12">
            <div className=" tp-rec-item mb-25 mt-25">
              <div>
                <img src={item.img1} alt="category-img" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </WrapperFour>
  );
};

export default index;