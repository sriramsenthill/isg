import Link from "next/link";
import React from "react";

const choose_data = {
    bg_img: "/assets/img/bg/choose-img-01.jpg",
    experiences_years: "23",
    title: "",
    sub_title: <>Our Faith Creed</>,
    des: "I believe in God the Father Almighty who created heavens and earth through His only begotten Son. I believe in our Lord and Saviour Jesus Christ His only begotten Son who was conceived by the Holy Spirit, born of virgin Mary according to the prophetical scriptures in the Holy Bible, suffered under Pontius Pilate for my sins, was crucified, dead and buried. He descended into hell, the third day he rose again from the dead. He ascended to the Heaven and sitteth on the right hand of God the Father Almighty, From thence He shall take His Bride to himself, which He has purchased with His own Blood, He shall come to judge the quick and the dead. I believe in the Holy Spirit which He has given me His spirit and transformed me as the Temple of the Living God. He reproves me and guiding me into all truth. He created me in His own image therefore I got body, Soul and Spirit. The Almighty God who creates me is the Father, the Son and the Holy Spirit. He is Triune God. I am a member of the Church of Christ Jesus which is universal. I believe in the communion of saints, the forgiveness of sins, the resurrection of the body and life everlasting. Amen.",

    choose_list: [],
};

const { bg_img, experiences_years, title, sub_title, des, choose_list } =
    choose_data;
const OurFaithCreedTamil = () => {
    return (
        <>
            <section
                className="choose-area pb-90 wow fadeInUp"
                data-wow-duration=".8s"
                data-wow-delay=".4s"
                style={{ backgroundColor: '#5f096f', }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 col-md-6">
                            <div className="tp-choose-img p-relative mb-30 ml-25">
                                <img src={bg_img} alt="choose-img" style={{ backgroundSize: 'cover' }} />
                                <div className="tpchoose-img-text d-none d-md-block"></div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-6">
                            <div className="tp-choose-content mb-10">
                                <div className="section-title mb-20">
                                    <span className="tp-sub-title mb-20 ">{title}</span>
                                    <h2 className="tp-section-title mb-10 text-white">{sub_title}</h2>
                                    <p style={{ textAlign: "justify", color: '#fff' }}>{des}</p>
                                </div>
                                <div className="tp-choose-list mb-35 ">
                                    <ul>
                                        {choose_list.map((item, i) => (
                                            <li key={i} >
                                                <i className="fa-light fa-check "></i> {item.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurFaithCreedTamil;
