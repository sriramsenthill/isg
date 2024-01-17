import React from "react";

const footer_data = [
  {
    id: 1,
    title: "About",
    cls: "col-xl-2",
    footer_col: "footer-col-1",
    links: [
      { name: "About Us", link: "/about" },
    ],
  },
  {
    id: 3,
    title: "Support",
    footer_col: "footer-col-3",
    cls: "col-xl-3",
    links: [
      { name: "Contact us", link: "/contact" },
      { name: "Online Chat", link: "/chat" },
      { name: "Whatsapp", link: "https://chat.whatsapp.com/KVpmWkhAfLT1cqgyo7JTbP" },
    ],
  },
];


// social_links
const social_links = [
  {
    link: "https://www.facebook.com/profile.php?id=61553247823094",
    target: "_blank",
    icon: "fab fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "https://youtube.com/@theservantofgodtheheartoft4564?si=aGAqxxR71b7VLoEK",
    target: "_blank",
    icon: "fab fa-youtube",
    name: "Youtube",
  },
  {
    link: "https://chat.whatsapp.com/KVpmWkhAfLT1cqgyo7JTbP",
    target: "_blank",
    icon: "fa-brands fa-whatsapp",
    name: "Twitter",
  },
];

const copyright = {
  logo: "/assets/img/isg/logoAni.gif",
  copyright_text: (
    <>Copyright © ISG {new Date().getFullYear()}, All Rights Reserved</>
  ),
};

const { logo, copyright_text } = copyright;
const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="footer-bg theme-bg bg-bottom"
          style={{ backgroundImage: `url(/assets/img/bg/shape-bg-02.png)` }}
        >
          <div className="f-border pt-115 pb-70">
            <div className="container">
              <div className="row">
                {footer_data.map((item) => (
                  <div key={item.id} className={`${item.cls} col-md-4`}>
                    <div className={`footer-widget ${item.footer_col} mb-50`}>
                      <div className="footer-widget__text mb-35">
                        <h3 className="footer-widget__title">{item.title}</h3>
                      </div>
                      <div className="footer-widget__link">
                        <ul>
                          {item.links.map((link, i) => (
                            <li key={i}>
                              <a href={link.link}>{link.name}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-xl-4 col-lg-6 col-md-8">
                  <div className="footer-widget footer-col-4  mb-50">
                    <div className="footer-widget__social d-flex align-items-center">
                      {social_links.map((link, i) => (
                        <a href={link.link} target={link.target} key={i}>
                          <i className={link.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="f-copyright pt-60 pb-30">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="f-copyright__logo mb-30">
                    <a href="#">
                      <img src={logo} alt="logo" style={{ width: '350px', height: '350px' }} />
                    </a>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="f-copyright__text text-md-end mb-30" style={{ marginTop: "10rem" }}>
                    <span>{copyright_text}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
