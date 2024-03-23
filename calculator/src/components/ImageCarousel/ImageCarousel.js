import React, { useState } from "react";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://s3.cloud.cmctelecom.vn/tinhte2/2019/09/4785764_cover_google-search_tinhte.jpg",
    "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP/tim-kiem-bang-hinh-anh-1.png",
    "https://laptop88.vn/media/news/2412_tmkimbnghnhnh.jpg",
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((preIndex) => (preIndex + 1) % images.length);
  };

  const currentImageUrl = images[currentImageIndex];

  return (
    <div className="image-carousel">
      <img src={currentImageUrl} alt={`Anh ${currentImageIndex + 1}`}></img>
      <button onClick={handleNextImage}>Tiep theo</button>
    </div>
  );
};

export default ImageCarousel;
