import React, { useState } from "react";

const feature_content = [
  {
    id: 1,
    title: "The Scriptures Inspired",
    des: "Both the Old and New Testaments are verbally inspired by God, revealing His infallible and authoritative rule of faith and conduct (2 Timothy 3:15-17; 1 Thessalonians 2:13; 2 Peter 1:21).",
  },
  {
    id: 2,
    title: "The One Triune God",
    des: "The one true God is revealed as the eternally self-existent 'Yehaye Asher Yeheye' (I AM that I AM), embodying the principles of relationship and association as Father, Son, and Holy Spirit (Deuteronomy 6:4; Isaiah 43:10,11; Matthew 28:19; Luke 3:22).",
  },
  {
    id: 3,
    title: "Deity of the Lord Jesus Christ",
    des: "a. His virgin birth (Matthew 1:23; Luke 1:31,35).\nb. His sinless life (Hebrews 7:26; 1 Peter 2:22).\nc. His miracles (Acts 2:22; 10:38).\nd. His substitutionary work on the cross (1 Corinthians 15:3; 2 Corinthians 5:21).\ne. His bodily resurrection from the dead (Matthew 28:6; Luke 24:39; 1 Corinthians 15:4).\nf. His exaltation to the right hand of God (Acts 1:9,11; 2:33; Philippians 2:9-11; Hebrews 1:3).",
  },
  {
    id: 4,
    title: "The Fall of Man",
    des: "Genesis 2:17, 3:1-13, 6:17",
  },
  {
    id: 5,
    title: "Man’s Hope of Redemption",
    des: "Man’s only hope of redemption is through the shed blood of Jesus Christ. 1 John 5:10, Romans 10:13-15",
  },
  {
    id: 6,
    title: "The Ordinance of Baptism",
    des: "Baptism by immersion is commanded in the Scriptures. Matthew 28:19, Acts 8:38, 39, Colossians 2:12",
  },
  {
    id: 7,
    title: "Observing the Lord's Supper",
    des: "A memorial of His suffering and death and a prophecy of His second coming. 1 Corinthians 11:23-26",
  },
  {
    id: 8,
    title: "Divine Healing",
    des: "Divine healing is an integral part of the gospel. Deliverance from sickness is provided for in the Atonement, and is the privilege of all believers. Isaiah 53:4,5; Matthew 8:16,17; James 5:14-16.",
  },
  {
    id: 9,
    title: "The Initial Physical Evidence of the Baptism in the Holy Spirit",
    des: "Speaking in Tongues. Acts 2:4,10, 44,46,11: 8-9",
  },
  {
    id: 10,
    title: "Sanctification",
    des: "Sanctification is realized in the believer by recognizing his identification with Christ in His death and resurrection, and by faith reckoning daily upon the fact of that union, and by offering every faculty continually to the dominion of the Holy Spirit. Romans 6:1-11,13; 8:1,2,13; Galatians 2:20; Philippians 2:12,13; 1 Peter 1:5",
  },
  {
    id: 11,
    title: "The Church and its Mission and Ministry",
    des: "Romans 12:7, Ephesians 4:12-17",
  },
  {
    id: 12,
    title: "The Second Coming of Jesus Christ",
    des: "Acts 24:14, Luke 14:14, Revelation 19:7-9",
  },
  {
    id: 13,
    title: "Millennial Kingdom",
    des: "2 Thessalonians 1:7,8., Revelation 19:11-14,20:17",
  },
  {
    id: 14,
    title: "Final Judgment",
    des: "Revelation 19:20, 20:10-15",
  },
  {
    id: 15,
    title: "New Heaven New Earth",
    des: "2 Peter 3:13, Revelation 21:1",
  },
];

const OurFaith = () => {
  const maxWords = 20; // Set the maximum number of words to display initially
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const truncateText = (text) => {
    const words = text.split(" ");
    return (
      words.slice(0, maxWords).join(" ") +
      (words.length > maxWords ? " ..." : "")
    );
  };

  return (
    <>
      <section
        className="tp-feature-area pt-5 pb-5"
        style={{ marginTop: "130px" }}
      >
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <h2 className="tp-section-title">Our Faith</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {feature_content.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="tpfea mb-30 wow fadeInUp">
                  <div className="tpfea__icon mb-3">
                    <i className={item.icon}>
                      <img
                        src="/assets/img/icon/church.png"
                        alt="meta-icon"
                      />
                    </i>
                  </div>
                  <div className="tpfea__text">
                    <h5 className="tpfea__title mb-2">{item.title}</h5>
                    <p>
                      {expanded ? item.des : truncateText(item.des)}
                      {item.des.split(" ").length > maxWords && (
                        <span
                          className="read-more"
                          onClick={toggleExpand}
                          style={{ color: "#5f096f", fontWeight: "bold" }}
                        >
                          {expanded ? " Read Less" : " Read More"}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurFaith;
