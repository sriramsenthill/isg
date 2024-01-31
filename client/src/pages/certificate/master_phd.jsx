import React from "react";
import SEO from "../../common/seo";
import WrapperFour from "../../layout/wrapper-4";

const data = [
  {
    img3: "/assets/img/isgdiocese/phd/1.jpeg",
  },
  {
    img3: "/assets/img/isgdiocese/phd/2.jpeg",
  },
  {
    img3: "/assets/img/isgdiocese/phd/3.jpeg",
  },
  {
    img3: "/assets/img/isgdiocese/phd/4.jpeg",
  },
];

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"master_phd"} />
      <div className="row" style={{ backgroundColor: "#5f096f" }}>
        {data.map((item) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-12">
            <div className=" tp-rec-item mb-25 mt-25">
              <div>
                <img src={item.img3} alt="category-img" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </WrapperFour>
  );
};

export default index;
