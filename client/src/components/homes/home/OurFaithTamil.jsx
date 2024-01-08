import React, { useState } from "react";

const feature_content = [
  {
    id: 1,
    title: "பரிசுத்த வேதாகமம்",
    des: "பரிசுத்த வேதாகமம் தேவ ஆவியானவரால் ஏவப்பட்டு எழுதப்பட்டது. | தீமோத்தேயு 3.5.16",
  },
  {
    id: 2,
    title: "பிதா,குமாரன்",
    des: "பரிசுத்தாவியானவராகிய நித்திய திரியேக தேவன் உண்டு. உபாகமம் 6.4",
  },
  {
    id: 3,
    title: "இயேசு கிறிஸ்துவின் தெய்வீகத்தன்மை",
    des: "கன்னிசைப் பிறப்பு, அவரது மீட்பின் செயல், பரிகார மரணம், சரீர உயிர்த்தெழுதல், பரமேறுதல் . ஏசாயா .7:14 ; ஏசாயா 9:6 ; ரோமர் 8:34; அப்போஸ்தலர் 1:10 ",
  },
  {
    id: 4,
    title: " மனிதனின் வீழ்ச்சி ",
    des: "ஆதியாகமம் 2:17 3:1-3, 6:17",
  },
  {
    id: 5,
    title: "இயேசு கிறிஸ்துவின் இரத்தத்தால் மாத்திரம் இரட்சிப்பு உண்டு",
    des: "இயேசு கிறிஸ்துவின் இரத்தத்தால் மாத்திரம் இரட்சிப்பு உண்டு.1 யோவான் 5:10 ; ரோமர் 10 :13-15",
  },
  {
    id: 6,
    title: "தண்ணீரில் மூழ்கி ஞானஸ்நானம்",
    des: "ஞானஸ்நானம் பெறவேண்டும் மத்தேயு 28:19 ; அப்போஸ்தலர் 8 :38,39 ; கொலோசெயர் 2:12 ; ரோமர் 6:4",
  },
  {
    id: 7,
    title: " கர்த்தருடைய பந்தியை அனுசரிக்க வேண்டும்",
    des: "கர்த்தருடைய பந்தியை அனுசரிக்க வேண்டும் | கொரிந்தியர் 11:23-26",
  },
  {
    id: 8,
    title: "இயேசு கிறிஸ்து",
    des: "இயேசு கிறிஸ்து சிலுவையில் நிறைவேற்றிய மீட்பின் செயலால் தெய்வீக சுகம் உண்டு. ஏசாயா 53:4; மத்தேயு 8:16-17 யாக்கோபு 5:13-1",
  },
  {
    id: 9,
    title:
      " அந்நிய பாஷை என்பது பரிசுத்தாவியின் ஞானஸ்தானத்திற்கான ஆரம்ப வெளிப்படையான சரீரப்பிரகாரமான அடையாளம் ",
    des: "அப்போஸ்தலர் 2:4 ;10,44,16 அப்போஸ்தலர் 15:8-9",
  },
  {
    id: 10,
    title: "விசுவாசிகள்",
    des: "பரிசுத்தமாக வாழ பரிசுத்தாவியானவரின் பரிசுத்தமாக்கும் வல்லமை அவசியம். எபிரெயர் 12:14 ; 1 பேதுரு 1:15-16",
  },
  {
    id: 11,
    title: "சபையும் அதன் அருட்பணியும்",
    des: "அப்போஸ்தலர் 2:47; ரோமர் 16:5 ; 1 கொரிந்தியர் 1:2 ; எபிரெயர் 12:23 ; 1 தெசலோனிக்கேயர் 1:1 ; எபேசியர் 1:22 3:21",
  },
  {
    id: 12,
    title: "ஊழியம்",
    des: "ரோமர் 12:7 ; எபேசியர் 4:12-13",
  },
  {
    id: 13,
    title: "இயேசு கிறிஸ்துவின் இரண்டாம் வருகை",
    des: "அப்போஸ்தலர் 24:14 ; லூக்கா 14:14 ; வெளி 19:7-9",
  },
  {
    id: 14,
    title: "ஆயிரவருட அரசாட்சி    ",
    des: "11 தெசலோனிக்கேயர் 1:7-8 ; வெளி 19: 11-14 ; வெளி 20 : 17",
  },
  {
    id: 15,
    title: "இறுதி நியாயத்தீர்ப்பு வெளி",
    des: " வெளி 20 :10- 15 16. புதிய வானம், புதிய பூமி. 11 பேதுரு 3:13; வெளி 21:1",
  },
];

const OurFaithTamil = () => {
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
      <style jsx>{`
        @font-face {
          font-family: "MyCustomFont";
          src: url("/assets/fonts/tamil.ttf") format("truetype");
        }

        .customfont {
          font-family: "MyCustomFont";
        }
      `}</style>
      <section
        className="tp-feature-area pt-5 pb-5"
        style={{ marginTop: "130px" }}
      >
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <h2 className="tp-section-title customfont">எங்கள் விசுவாசம்</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {feature_content.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="tpfea mb-30 wow fadeInUp">
                  <div className="tpfea__icon mb-3">
                    <i
                      className={`${item.icon} d-flex align-items-center justify-content-center`}
                    >
                      {" "}
                      {/* Adjusted size with inline style */}
                      <img
                        src="/assets/img/icon/church.png"
                        alt="meta-icon"
                        style={{ maxWidth: "60%", maxHeight: "60%" }}
                      />
                    </i>
                  </div>
                  <div className="tpfea__text">
                    <h5 className="tpfea__title mb-2 customfont">{item.title}</h5>
                    <p className="customfont">
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

export default OurFaithTamil;
