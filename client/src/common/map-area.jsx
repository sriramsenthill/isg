import React from "react";

const MapArea = () => {
  return (
    <>
      <div
        className="map-area wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9916.700063574806!2d-3.0069738781218596!3d51.583355699288006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871e6c9ca7d8729%3A0x50d8b23d4977990!2sStow%20Hill%2C%20Newport%2C%20UK!5e0!3m2!1sen!2sin!4v1708259851088!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MapArea;
