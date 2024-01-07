import Link from "next/link";
import React from "react";



const choose_data = {
  bg_img: "/assets/img/bg/choose-img-01.jpg",
  experiences_years: "23",
  title: "",
  sub_title: <>எங்கள் விசுவாச பிரமாணம்</>,
  des: "வானத்தையும் பூமியையும் தனது ஒரே பேறான குமாரனை கொண்டு படைத்த சர்வ வல்லமையுள்ள பிதாவாகிய தேவனை விசுவாசிக்கிறேன அவருடைய ஒரேபேபறான குமாரனான நம்முடைய இரட்சகர் இயேசு கிறிஸ்துவை விசுவாசிக்கிறேன். பரிசுத்த வேதாகமத்தின் தீர்க்கதரிசன வசனங்களின்படி அவர் பரிசுத்த ஆவியினால் கன்னி மரியாளிடத்தில் உற்பவித்து பிறந்தார். பொந்தியு பிலாத்துவின் காலத்தில் என்னுடைய பாவங்களுக்காக பாடுபட்டு கோர சிலுவையில் அறையுண்டு மரித்து அடக்கம்பண்ணப்பட்டு பாதாளத்துக்கு இறங்கினார். மூன்றாம் நாளில் மரித்தோரிடத்திலிருந்து உயிர்த்தெழுந்தார். உன்னதத்துக்கேறி பரலோகத்தில் சர்வ வல்லமையுள்ள பிதாவின் வலது பாரிசத்தில் வீற்றிருக்கிறார். அவ்விடத்திலிருந்து நமக்காக பிதாவினிடத்தில் பரிந்து பேசிக்கொண்டிருக்கிறார் அவர் தம்முடைய சொந்த இரத்தத்தினால் சம்பாதித்த தம்முடைய மணவாட்டியான திருச்சபையை தன்னிடத்தில் எடுத்துக்கொள்ளவும் பின்பு உயிருள்ளோரையும் மரித்தோரையும் நியாயந்தீர்க்க வருகிறார்.",

  choose_list: [],
};

const { bg_img, experiences_years, title, sub_title, des, choose_list } =
  choose_data;
const OurFaithCreedTamil = () => {
  return (
    <>
     <style jsx>{`
        @font-face {
          font-family: 'MyCustomFont';
          src: url('/assets/fonts/Uni-Tamil150.ttf') format('truetype');
        }

        .customfont {
          font-family: 'MyCustomFont';
        }
      `}</style>
      <section
        className="choose-area pb-90 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
        style={{ backgroundColor: "#5f096f" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 col-md-6">
              <div className="tp-choose-img p-relative mb-30 ml-25">
                <img
                  src={bg_img}
                  alt="choose-img"
                  style={{ backgroundSize: "cover" }}
                />
                <div className="tpchoose-img-text d-none d-md-block"></div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="tp-choose-content mb-10">
                <div className="section-title mb-20">
                  <span className="tp-sub-title mb-20 ">{title}</span>
                  <h2 className="tp-section-title mb-10 text-white customfont">
                    {sub_title}
                  </h2>
                  <p className='customfont' style={{ textAlign: "justify", color: "#fff", fontSize: '18px' }}>{des}</p>
                </div>
                <div className="tp-choose-list mb-35 ">
                  <ul>
                    {choose_list.map((item, i) => (
                      <li key={i}>
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
