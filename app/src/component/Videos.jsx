import React from "react";
import { Link } from "react-router-dom";

const Videos = ({ videos }) => {
  console.log(videos[0]);
  return (
    <div className="flex flex-wrap gap-4">
      {videos.map(
        (video) =>
          video.id.videoId && (
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
                <h1 className="mb-2 md:line-clamp-2">{video.snippet.title}</h1>
                <Link className="text-gray-400" to={`/channel/${video.snippet.channelId}`}>
                  {video.snippet.channelTitle}
                </Link>
              </div>
            </Link>
          )
      )}
    </div>
  );
};

export default Videos;
