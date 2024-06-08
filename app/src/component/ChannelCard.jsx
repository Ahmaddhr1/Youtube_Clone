import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ channel }) => {
  return (

      <Link className="flex flex-col items-center justify-center mb-4 mr-3 h-[120px]" to={`/channel/${channel.id.channelId}`}>
        <img
          src={channel?.snippet?.thumbnails?.default?.url}
          alt={channel.snippet.title}
          className="rounded-full min-w-[100px]"
        />
        <h3 className="text-center flex items-center justify-center overflow-ellipsis">{channel?.snippet?.title?.substring(0,13)}</h3>
      </Link>
  
  );
};

export default ChannelCard;
