import React, { useEffect, useRef, useState } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideoCard({ url, likes, channel, avatarSrc, onPrevious, onNext }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (isVideoPlaying) {
      //stop
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      //play
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  const updateProgress = () => {
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    const progressPercent = (currentTime / duration) * 100;
    setProgress(progressPercent);
  };

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // When 50% of the video is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Video is in viewport, play it
          videoRef.current.play();
          // onVideoPress();
          setIsVideoPlaying(true);
        } else {
          // Video is out of viewport, pause it
          videoRef.current.pause();
          setIsVideoPlaying(false);
        }
      });
    }, options);

    // Start observing the video element
    observer.observe(videoRef.current);
    videoRef.current.addEventListener("timeupdate", updateProgress);
    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
      videoRef.current.removeEventListener("timeupdate", updateProgress);
    };
  }, []);


  return (
    <div className="relative h-full w-full videoCard">
      <VideoHeader isVideoPlaying={isVideoPlaying} />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="w-full h-full object-fill"
        src={url}
        alt="youtube shorts"
        loop
      ></video>
      <VideoFooter
        channel={channel}
        avatarSrc={avatarSrc}
        likes={likes}
        progress={progress}
      ></VideoFooter>
      
    </div>
  );
}

export default VideoCard;
