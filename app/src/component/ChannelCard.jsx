import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ channel }) => {
  return (

      <Link className="flex flex-col items-center justify-betwwen mb-4 mr-3 h-[100px]" to={`/channel/${channel.id.channelId}`}>
        <img
          src={channel?.snippet?.thumbnails?.default?.url}
          alt={channel.snippet.title}
          className="rounded-full min-w-[80px]"
        />
        <h3 className="text-center flex items-center justify-center overflow-ellipsis">{channel?.snippet?.title?.substring(0,20)}</h3>
      </Link>
  
  );
};

export default ChannelCard;
