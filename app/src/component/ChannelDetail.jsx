import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchfromapi";
import { Link, useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import toast from "react-hot-toast";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channeldetails, setChannelDetails] = useState([]);
  const [channelVds, setChannelVds] = useState([]);
  const [isLoadingChannel, setIsLoadingChannel] = useState(false);
  const [isLoadingChannelVds, setIsLoadingChannelVds] = useState(false);
  useEffect(() => {
    setIsLoadingChannel(true);
    fetchFromAPI("channels?part=snippet&id=" + id).then(async (data) => {
      await setChannelDetails(data.items);
      setIsLoadingChannel(false);
    }).catch((err) => { 
        toast.error('Error while fetching Channel information')
        setIsLoadingChannel(false);
    })
    setIsLoadingChannelVds(true);
    fetchFromAPI("search?part=snippet&channelId=" + id).then(async (data) => {
      await setChannelVds(data.items);
      setIsLoadingChannelVds(false);
    }).catch((err) => { 
      toast.error('Error while fetching Channel Videos')
      setIsLoadingChannelVds(false);
  })
  }, []);

  return (
    <div className="pt-20 w-full min-h-[100vh]">
      {isLoadingChannel || isLoadingChannelVds ? (
        <div className="flex items-center justify-center p-[200px] h-full">
          <PulseLoader color="white" />
        </div>
      ) : (
        <>
          <section className="w-full relative">
            <div className="md:h-[200px] h-[100px] overflow-hidden">
              <img
                src={
                  channeldetails[0]?.brandingSettings?.image?.bannerExternalUrl
                }
                alt="Channel Banner"
                className="z-10 object-cover h-full w-full"
              />
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center">
              <img
                src={channeldetails[0]?.snippet?.thumbnails?.default?.url}
                alt="Channel Thumbnail"
                className="md:w-[120px] w-[100px] object-cover rounded-full"
              />
            </div>
          </section>
          <div className="flex flex-col items-center justify-center text-center md:p-20 pt-20 pb-5 px-5 gap-2">
            <h1 className="font-semibold text-xl">
              {channeldetails[0]?.snippet?.title}
            </h1>
            <p className="text-gray-300">
              {channeldetails[0]?.snippet?.description.length > 100
                ? ""
                : channeldetails[0]?.snippet?.description}
            </p>
            <div className="flex gap-2">
              <h1 className="text-gray-300">
                {channeldetails[0]?.statistics?.subscriberCount} Subscribers
              </h1>
              <p>|</p>
              <h1 className="text-gray-300">
                {channeldetails[0]?.statistics?.videoCount} Videos!
              </h1>
            </div>
          </div>
          <section className="flex gap-8 md:gap-5 flex-wrap md:pb-4 md:pr-10 md:pl-10 pr-5 pl-5 mb-5">
            {channelVds.map(
              (video) =>
                video.id.videoId && (
                  <Link 
                  to={`/video/${video.id.videoId}`}
                  key={video.id.videoId}
                  className=" md:h-[200px] h-fit md:w-[300px] w-full overflow-hidden relative flex justify-between flex-col gap-2 cursor-pointer rounded-lg ">
                    <img
                      src={video.snippet?.thumbnails?.medium?.url}
                      alt={video.snippet.title}
                      className="w-full object-cover "
                    />
                    <h1 className="text-gray-300">{video.snippet.title}</h1>
                  </Link>
                )
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default ChannelDetail;
