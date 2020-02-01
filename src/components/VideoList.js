import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  let count = 0;
  const videoMap = video => {
    if (count < 5) {
      count++;
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoSelect={onVideoSelect}
        />
      );
    }
  };
  const list = videos.map(videoMap);
  return <div className="ui relaxed divided list">{list}</div>;
};

export default VideoList;
