import React, { useState } from "react";
import "./VideoFooter.css";
import { Button, Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
function VideoFooter({ likes, channel, avatarSrc,progress }) {
    let initialLikes = likes;
  const [like, setLike] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="relative ml-5 bottom-[70px]">
      <div className="absolute bottom-0 text-white flex mb-[10px]">
        <Avatar src={avatarSrc} />
        <h3 className="ml-[10px] pb-5 text-white font-semibold">
          {channel} <Button style={{color:'white', fontWeight : '900', textTransform : 'inherit', background : 'red', marginLeft : '15px', padding : '2px'}}>Follow</Button>
        </h3>
      </div>
      <div className="flex absolute w-[95%] justify-between text-white">
        <div className="p-2">
          <p>Title / Caption</p>
        </div>
        <div className="flex">
          <div
            className={`flex items-center mt-[10px] ${isLiked ? "liked" : ""}`}
            onClick={handleLikeClick}
          >
            <FavoriteIcon style={ isLiked ? {color : '#ff0000'} : {color : '#f2f2f2'}} />
            <p className="ml-1">{like}</p>
          </div>
        </div>
      </div>
      <div className="absolute sm:mt-[30px] mt-[34px] -ml-6 w-[110%]">
      <div className="w-full mt-7 rounded-md h-2 bg-[#ddd]">
        <div
          className="h-full bg-[#4caf50] rounded-md transition-width duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      </div>
    </div>
  );
}

export default VideoFooter;
