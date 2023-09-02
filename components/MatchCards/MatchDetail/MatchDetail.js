import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import grayMatter from "gray-matter";
import matter from "gray-matter";
import "swiper/css"; // Import Swiper's core styles (not bundled)
import "swiper/css/bundle"; // Import Swiper's bundle styles (optional)
import "swiper/css/navigation";
//import "swiper/css/coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./MatchDetail.module.css";

import { EffectCards } from "swiper/modules";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

function MatchDetailPage({ matchContent, data }) {
  const parsedContent = matter(matchContent);
  const imageUrls = [];

  // Extract image URLs from the Markdown content
  matchContent.replace(/!\[Image \d+\]\((.*?)\)/g, (match, imageUrl) => {
    imageUrls.push(imageUrl);
  });

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <ReactMarkdown
          components={{
            img: ({ src, alt }) => (
              <img
                src={src}
                alt={alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "400px",
                }} // Adjust width and height as needed
              />
            ),
          }}
        >
          {matchContent}
        </ReactMarkdown>
      </div>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        {imageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img
              width="200px"
              height="500px"
              src={imageUrl}
              alt={`Slide ${index}`}
            />
            <div>Team:{index + 1} </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className={styles.styleHead}>Slide above cards to view more Teams</h2>
    </div>
  );
}

export default MatchDetailPage;
