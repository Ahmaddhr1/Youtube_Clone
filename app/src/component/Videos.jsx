import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos }) => {
  const [channels, setChannels] = useState([]);
  
  useEffect(() => {
    const filteredVideos = videos.filter((v) => !v.id.videoId);
    setChannels(filteredVideos);
  }, [videos]);
  return (
    <section>
      {channels.length >0 && <p className="text-slate-400 text-xl font-semibold">Channels:</p>}
      {channels.length > 0 && (
        <div className="w-full flex items-center overflow-x-scroll h-[180px] mb-1">
          {channels.map(
            (item ,index) => item.id.channelId && <ChannelCard channel={item} key={index}/>
          )}
         </div>
      )}
      <div className="flex flex-wrap gap-4">
        {videos.map(
          (video) =>
            video.id.videoId && (
              <>
                <Link
                  key={video.id.videoId}
                  to={`/video/${video.id.videoId}`}
                  className="flex flex-col flex-wrap  gap-3 w-full md:w-[260px] bg-my-gray "
                >
                  <div className="w-full md:h-[150px] overflow-hidden relative">
                    <img
                      src={video.snippet?.thumbnails?.medium?.url}
                      alt={video.snippet.title}
                      className="w-full object-cover "
                    />
                  </div>
                  <div className="p-3 flex justify-between flex-col md:h-[140px]">
                    <h1 className="mb-2 md:line-clamp-2">
                      {video.snippet.title}
                    </h1>
                    <Link
                      className="text-gray-400"
                      to={`/channel/${video.snippet.channelId}`}
                    >
                      {video.snippet.channelTitle}
                    </Link>
                  </div>
                </Link>
                {video.id.channelId && <ChannelCard channel={video} />}
              </>
            )
        )}
      </div>
    </section>
  );
};

export default Videos;
