import Link from "next/link";
import React from "react";

// footer two content data
const footer_two_content = [
  {
    id: 1,
    title: "About",
    cls: "col-xl-3",
    footer_col: "footer-2-col-2",
    ml: "ml-90",
    links: [
      { name: "About Us", link: "/about" },
      { name: "Blog", link: "/blog" },
      { name: "Careers", link: "/" },
      { name: "Jobs", link: "/about" },
      { name: "In Press", link: "/" },
      { name: "Payments", link: "/" },
    ],
  },
  {
    id: 2,
    title: "Support",
    cls: "col-xl-2",
    footer_col: "footer-2-col-3",
    ml: "",
    links: [
      { name: "Contact us", link: "/contact" },
      { name: "Online Chat", link: "/contact" },
      { name: "Whatsapp", link: "/" },
      { name: "Telegram", link: "/" },
      { name: "In Press", link: "/" },
      { name: "Ticketing", link: "/" },
    ],
  },
];

// social_links
const social_links = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: "fab fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "https://www.youtube.com/",
    target: "_blank",
    icon: "fab fa-youtube",
    name: "Youtube",
  },
  {
    link: "https://www.basketball.com/",
    target: "_blank",
    icon: "fa-light fa-basketball",
    name: "Instagram",
  },

  {
    link: "http://whatsapp.com",
    target: "_blank",
    icon: "fa-brands fa-whatsapp",
    name: "Twitter",
  },
];

// footer bottom data
const footer_bottom = [
  { name: "About us", link: "/about" },

];


const FooterTwo = () => {
  return (
    <>
      <footer>
        <div
          className="footer-bg theme-bg-secondary"
          style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
        >
         
          <div className="f-copyright pt-60 pb-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="f-copyright__dom">
                    <span>
                      Uxaction© {new Date().getFullYear()}, All Rights Reserved
                    </span>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 col-12">
                  <div className="f-copyright__list f-bottom-list">
                    <ul className="d-flex align-items-center">
                      {footer_bottom.map((item, i) => (
                        <li key={i}>
                          <Link href={item.link}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
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

export default FooterTwo;
