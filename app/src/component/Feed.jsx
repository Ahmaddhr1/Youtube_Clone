import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { fetchFromAPI } from "../utils/fetchfromapi";
import { useEffect, useState } from "react";
import Videos from "./Videos";
import PulseLoader from "react-spinners/PulseLoader";
import toast, { Toaster } from 'react-hot-toast';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
      setIsLoading(false);
    }).catch((err) => { 
      toast.error('Error fetching videos,Try again later. Maybe the limit reaching this API was reached')
      setIsLoading(false);
    })
  }, [selectedCategory]);
  
  return (
    <div className="md:h-cover mt-0 flex flex-col pt-20 p-4">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="flex-1  bg-transparent outline-none md:ml-[230px] mt-[70px] md:mt-0 min-h-[100vh]">
        <h1 className="text-2xl font-semibold mb-3">
          {selectedCategory}{" "}
          <span
            style={{
              background: `linear-gradient(to bottom right, #FFA500, #FF69B4, #00008B)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Videos
          </span>
        </h1>
        {isLoading ? (
          <div className="flex-1 flex items-center justify-center text-2xl h-[100%] mt-[100px]">
            <PulseLoader color="white" />
          </div>
        ) : (
          <Videos videos={videos} />
        )}
      
      </div>
    
    </div>
  );
};

export default Feed;
