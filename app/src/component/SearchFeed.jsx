import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchfromapi";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import toast from "react-hot-toast";
import PulseLoader from "react-spinners/PulseLoader";

const SearchFeed = () => {
  const { search } = useParams();
  const [searchedVds, setSearchedVds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchFromAPI(`search?q=${search}&part=snippet&order=date`)
      .then((data) => {
        setSearchedVds(data.items);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Error while fetching videos. Please try again later.");
        setIsLoading(false);
      });
  }, [search]);

  return (
    <div className="pt-20 md:px-10 px-5 pb-4 relative min-h-[100vh]">
      <h1 className="text-2xl font-semibold mb-3 border-b border-my-gray pb-4">
        Results for:{" "}
        <span
          style={{
            background: `linear-gradient(to bottom right, #FFA500, #FF69B4, #00008B)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {search}
        </span>
      </h1>
      {isLoading ? (
        <div className="flex items-center justify-center p-[200px] h-full">
          <PulseLoader color="white" />
        </div>
      ) : (
        <Videos videos={searchedVds} />
      )}
    </div>
  );
};

export default SearchFeed;
