import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchfromapi";
import toast from "react-hot-toast";
import ReactPlayer from "react-player";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [channel, setChannel] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchFromAPI("videos?part=snippet,statistics&id=" + id)
      .then((data) => {
        setVideo(data.items[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Error fetching YouTube video");
        setIsLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (video && video.snippet) {
      setIsLoading(true);
      fetchFromAPI("channels?part=snippet&id=" + video.snippet.channelId)
        .then((data) => {
          setChannel(data.items[0]);
          setIsLoading(false);
        })
        .catch((err) => {
          toast.error("Error fetching YouTube channel");
          setIsLoading(false);
        });
    }
  }, [video]);

  useEffect(() => {
    fetchFromAPI("search?part=snippet&type=video&relatedToVideoId=" + id).then(
      (data) => {
        setRelatedVideos(data.items || []);
        console.log(data.items);
      }
    ).catch((err) => {
        toast.error("Error fetching related videos");
    });
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-20 px-5 md:px-10 min-h-[95vh] mb-10">
      <div className="w-full flex flex-col md:flex-row gap-3 min-h-full">
        <div className="flex flex-col flex-1">
          <div className="min-h-[50vh]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player w-full min-h-full"
              width="100%"
              min-height="100%"
              controls
            />
          </div>
          {video && video.snippet && (
            <div>
              <div className="mb-4 mt-2">
                <h1 className="text-xl font-semibold">{video.snippet.title}</h1>
              </div>
              <div className="flex items-center justify-between flex-wrap text-gray-300">
                <div>
                  {channel && channel.snippet && (
                    <div className="flex gap-3 w-fit">
                      <div className="w-[50px] rounded-full overflow-hidden">
                        <img
                          src={channel.snippet.thumbnails.default.url}
                          alt="Channel Image"
                          className="w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3>{video.snippet.channelTitle}</h3>
                        <p>
                          {channel?.statistics?.subscriberCount} Subscribers
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex gap-2 flex-col">
                  <p>Published at: {video.snippet.publishedAt.split("T")[0]}</p>
                  <div className="flex gap-2">
                    <p>{video.statistics.viewCount} Views |</p>
                    <p>{video.statistics.likeCount} Likes</p>
                  </div>
                </div>
              </div>
              <div className="bg-my-gray w-full min-h-fit px-5 py-3 md:px-10 md:py-6 mt-3 rounded-lg">
                <h1 className="mb-3 text-gray-300">Description</h1>
                <div className="whitespace-normal w-full">
                  <p>{video.snippet.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="md:max-h-[100vh] md:overflow-y-scroll mt-5 md:mt-0">
          <h1 className="mb-3">Related Videos</h1>
          {Array.isArray(relatedVideos) &&
            relatedVideos.map(
              (video) =>
                video.id.videoId && (
                  <Link to={`/video/${video.id.videoId}`} key={video.id.videoId} className="h-[250px]">
                    <div className="flex flex-col flex-wrap gap-3 w-full md:w-[300px]  bg-my-gray mb-5">
                      <img
                        src={video?.snippet?.thumbnails?.medium?.url}
                        alt={video.snippet.title}
                        className="w-full object-cover h-[200px]"
                      />
                      <div className="p-3 flex justify-between flex-col md:h-[140px]">
                        <h1 className="mb-2 md:line-clamp-2">
                          {video?.snippet?.title}
                        </h1>
                        <Link
                          className="text-gray-400"
                          to={`/channel/${video.snippet.channelId}`}
                        >
                          <h1 className="text-gray-300">
                            {video?.snippet?.channelTitle}
                          </h1>
                        </Link>
                      </div>
                    </div>
                  </Link>
                )
            )}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
