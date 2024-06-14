import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchfromapi";
import { Link, useParams } from "react-router-dom";
import Videos from "./Videos";
import toast from "react-hot-toast";

const SearchFeed = () => {
  const { search } = useParams();
  const [searchedVds, setSearchedVds] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?q=${search}&part=snippet&order=date`)
      .then((data) => {
        setSearchedVds(data.items);
        console.log(searchedVds);
      })
      .catch((err) => {
        toast.error("Error while fetching videos.Please try again later.");
      });
  }, [searchedVds]);
  return (
    <div className="pt-20 md:px-10 px-5 pb-4">
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
      <Videos videos={searchedVds} />
    </div>
  );
};

export default SearchFeed;
