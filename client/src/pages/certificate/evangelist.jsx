import React from "react";
import SEO from "../../common/seo";
import WrapperFour from "../../layout/wrapper-4";

const data = [
  {
    img2: "/assets/img/isgdiocese/evangelist/1.jpeg",
  },
  {
    img2: "/assets/img/isgdiocese/evangelist/2.jpeg",
  },
  {
    img2: "/assets/img/isgdiocese/evangelist/3.jpeg",
  },
  {
    img2: "/assets/img/isgdiocese/evangelist/4.jpeg",
  },
  {
    img2: "/assets/img/isgdiocese/evangelist/5.jpeg",
  },
  {
    img2: "/assets/img/isgdiocese/evangelist/6.jpeg",
  },
  {
    img2: "/assets/img/isgdiocese/evangelist/7.jpeg",
  },
];
const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"evangelist"} />
      <div className="row" style={{ backgroundColor: "#5f096f" }}>
        {data.map((item) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-12">
            <div className=" tp-rec-item mb-25 mt-25">
              <div>
                <img src={item.img2} alt="category-img" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </WrapperFour>
  );
};

export default index;