import React from "react";
import "./video.css";
import VideoPreview from "../../../assets/images/Content/video-preview.png";

export const Video = () => {
  return (
    <div className="video-container">
      <section className="video">
        <h3 className="video__title">
          Awesome experiences with virtual reality world
        </h3>
        <a className="video__link" href=".">
          <img className="video__img" src={VideoPreview} alt="Video" />
        </a>
      </section>
    </div>
  );
};
