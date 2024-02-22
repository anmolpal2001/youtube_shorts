import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/icon.jpg";
import VideoCard from "./components/VideoCard";
import video1 from "./assets/videos/video1.mp4";
import video2 from "./assets/videos/video2.mp4";
import video3 from "./assets/videos/video3.mp4";
import video4 from "./assets/videos/video4.mp4";

const videos_data = [
  {
    index: 0,
    url: video1,
    channel: "sonny",
    likes: 123,
    shares: 11,
    avatarSrc: "https://avatars.githubusercontent.com/u/3?v=4",
  },
  {
    index: 1,
    url: video3,
    channel: "sonny",
    likes: 123,
    shares: 11,
    avatarSrc: "https://avatars.githubusercontent.com/u/3?v=4",
  },
  {
    index: 2,
    url: video2,
    channel: "sonny",
    likes: 123,
    shares: 11,
    avatarSrc: "https://avatars.githubusercontent.com/u/3?v=4",
  },
  {
    index: 3,
    url: video4,
    channel: "sonny",
    likes: 123,
    shares: 11,
    avatarSrc: "https://avatars.githubusercontent.com/u/3?v=4",
  },
];

function App() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handlePrevious = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentVideoIndex < videos_data.length - 1) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    }
  };

  const currentVideo = videos_data[currentVideoIndex];

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      handlePrevious();
    } else if (event.key === "ArrowDown") {
      handleNext();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentVideoIndex]);
  return (
    <div className="grid place-items-center h-screen bg-white">
      <div className="-mb-3">
        <div className="flex items-center justify-center">
          <img
            className="sm:h-[12vh] h-[9vh] -ml-6 sm:-ml-10"
            src={logo}
            alt="instagram-logo"
          ></img>
          <h1 className="md:text-6xl text-5xl font-bold">Shorts</h1>
        </div>
      </div>
      <div className="relative bg-white sm:w-[70%] md:rounded-3xl max-w-[450px] max-h-[1200px] overflow-scroll app-videos sm:rounded-2xl">
        {videos_data.map((video, index) => (
          <VideoCard
            key={index}
            channel={video.channel}
            avatarSrc={video.avatarSrc}
            url={video.url}
            likes={video.likes}
            onPrevious={handlePrevious}
            onNext={handleNext}
            isCurrent={index === currentVideoIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
