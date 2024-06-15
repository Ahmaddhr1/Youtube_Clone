import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchfromapi";
import toast from "react-hot-toast";
import ReactPlayer from "react-player";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchFromAPI("videos?part=contentDetails&id=" + id)
      .then((data) => {
        setVideo(data.items[0]);
        console.log(video);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Error fetching yt video");
        setIsLoading(false);
      });
  }, [id]);
  return (
    <div className="pt-20 px-5 md:px-10 min-h-[95vh]">
      <div className="w-full flex flex-col md:flex-row gap-3 min-h-full">
        <div className="flex-1 min-h-[50vh]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player w-full min-h-full"
            width="100%"
            min-height="100%"
            controls
          />
        </div>
        <div>Hiii</div>
      </div>
    </div>
  );
};

export default VideoDetail;
