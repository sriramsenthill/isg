import Link from "next/link";
import React from "react";

const choose_data = {
    bg_img: "/assets/img/banner/b3.jpeg",
    experiences_years: "23",
    title: "",
    sub_title: <>Our Faith</>,
    des: `
      The Scriptures Inspired
      The Scriptures, both the Old and New Testaments, are verbally inspired of God and are the revelation of God to man, the infallible, authoritative rule of faith and conduct (2 Timothy 3:15-17; 1 Thessalonians 2:13; 2 Peter 1:21).

      The One Triune God
      The one true God has revealed himself as the eternally self-existent “Yehaye Asher Yeheye” (I AM that I AM). He has further revealed himself as embodying the principles of relationship and association as Father, Son, and Holy Spirit (Deuteronomy 6:4; Isaiah 43:10,11; Matthew 28:19; Luke 3:22).

      The Deity of the Lord Jesus Christ
         a. His virgin birth (Matthew 1:23; Luke 1:31,35).
         b. His sinless life (Hebrews 7:26; 1 Peter 2:22).
         c. His miracles (Acts 2:22; 10:38).
         d. His substitutionary work on the cross (1 Corinthians 15:3; 2 Corinthians 5:21).
         e. His bodily resurrection from the dead (Matthew 28:6; Luke 24:39; 1 Corinthians 15:4).
         f. His exaltation to the right hand of God. Acts 1:9,11; 2:33; Philippians 2:9-11; Hebrews 1:3

      The fall of the Man
      Genesis 2:17, 3:1-13, 6:17

      Man’s only hope of redemption is through the shed blood of Jesus Christ
      1 John 5:10, Romans 10: 13-15

      The ordinance of baptism by immersion is commanded in the Scriptures
      Matthew 28:19. Acts 8:38, 39,  Colossians 2:12

      Observing the Lord's Supper. A memorial of His suffering and death and a prophecy of His second coming
      1 Corinthians 11;23-26

      Divine healing is an integral part of the gospel. Deliverance from sickness is provided for in the Atonement, and is the privilege of all believers
      Isaiah 53:4,5; Matthew 8:16,17; James 5:14-16.

      The Initial Physical Evidence of the Baptism in the Holy Spirit is Speaking in Tongues
      Acts 2: 4,10, 44,46,11: 8-9

      Sanctification is realized in the believer by recognizing his identification with Christ in His death and resurrection, and by faith reckoning daily upon the fact of that union, and by offering every faculty continually to the dominion of the Holy Spirit
      Romans 6:1-11,13; 8:1,2,13; Galatians 2:20; Philippians 2:12,13; 1 Peter 1:5

      The Initial Physical Evidence of the Baptism in the Holy Spirit is Speaking in Tongues
      Romans 12:7, Ephesians 4:12-17

      The Second Coming of Jesus Christ
      Acts 24:14, Luke 14:14, Revelation 19:7-9

      Millennial Kingdom
      2 Thessalonians 1:7,8., Revelation 19:11-14,20:17,

      Final Judgment
      Revelation 19:20,20:10-15

      New Heaven New Earth
      2 Peter 3:13, Revelation 21:1
    `,
    choose_list: [],
};

const { bg_img, experiences_years, title, sub_title, des, choose_list } =
    choose_data;
const OurfaithNew = () => {
    return (
        <>
            <section
                className="choose-area pb-90 wow fadeInUp"
                data-wow-duration=".8s"
                data-wow-delay=".4s"

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
                                    <h2 className="tp-section-title mb-10" style={{ color: 'Black' }}>{sub_title}</h2>
                                    <p style={{ textAlign: "justify", color: 'Black' }}>{des}</p>
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

export default OurfaithNew;
